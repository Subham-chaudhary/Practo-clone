"use client";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiLoader, FiThumbsUp, FiMapPin, FiBriefcase } from "react-icons/fi";
import { filterOptions, sortOptions } from "../../lib/data";
import Search from "@/app/components/Search";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const SearchPage = () => {
    const [parsedResults, setParsedResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadPage, setLoadPage] = useState(1);
    const [fetchError, setFetchError] = useState(null);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        setParsedResults(null);
        setLoadPage(1);
    }, [searchParams]);

    useEffect(() => {
        const city = searchParams.get('region');
        const query = searchParams.get('result_type');

        if (!city || !query) {
            router.push(`/find-doctors`);
            return;
        }

        const fetchSearchResults = async () => {
            let attempts = 0;
            const maxAttempts = 4;
            setFetchError(null);
            while (attempts < maxAttempts) {
                try {
                    setIsLoading(true);

                    const encodedURL = encodeURIComponent(`https://www.practo.com/marketplace-api/dweb/search/provider/v2?page=${loadPage}&q=[{"word":"${query}","autocompleted":true,"category":"subspeciality"}]&city=${city}`);
                    const proxyUrl = `https://api.allorigins.win/get?url=${encodedURL}`;
                    const res = await fetch(proxyUrl);

                    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                    const data = await res.json();

                    const dataObj = JSON.parse(data.contents);
                    const parsed = await fetch("https://practo-clone-9wxf.onrender.com/api/search/doctors", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(dataObj),
                    });

                    if (!parsed.ok) throw new Error(`HTTP error! Status: ${parsed.status}`);
                    const parsed_data = await parsed.json();

                    if (loadPage !== 1) {
                        setParsedResults(prev => ({
                            ...prev,
                            doctors: { ...prev.doctors, ...parsed_data.doctors }
                        }));
                    } else {
                        setParsedResults(parsed_data);
                    }

                    
                        setIsLoading(false);
                    
                    return;
                } catch (error) {
                    attempts++;
                    console.error(`❌ Fetch attempt ${attempts} failed:`, error);
                    if (attempts >= maxAttempts) {
                        setFetchError("Failed to load results after multiple attempts.");
                        setIsLoading(false);
                    }
                }
            }
        };

        fetchSearchResults();
    }, [loadPage, searchParams, router]);


    return (
        <div className="bg-gray-100">
            <main className="flex flex-col items-center justify-center w-full">
                <div className="md:flex-row p-4 w-full items-center justify-center space-x-1 flex-col space-y-4 md:space-y-0 flex ">
                    <Search />
                </div>

                <div className="w-full bg-blue-950 py-2 px-4 md:px-0 flex items-center justify-center">
                    <div className="flex items-center justify-center space-x-4 w-full">
                        {filterOptions.map((filter) => (
                            <div key={filter.title} className="relative group hidden sm:block">
                                <button className="bg-blue-950 py-2 px-4 text-white rounded-md hover:text-gray-100 flex items-center space-x-2">
                                    <span>{filter.title}</span>
                                    <FiChevronDown />
                                </button>
                                <div className="absolute z-10 w-full bg-white shadow-lg py-2  group-hover:block transition-opacity hidden">
                                    <ul className="text-sm">
                                        {filter.options.map((option) => (
                                            <li
                                                key={option}
                                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className="relative group hidden md:block">
                            <button className="bg-blue-950 py-2 px-4 text-white rounded-md hover:text-gray-100 flex items-center space-x-2">
                                <span>Reset Filters</span>
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="bg-blue-950 py-2 px-4 text-white rounded-md hover:text-gray-100 flex items-center space-x-2">
                                <span>Sort By</span>
                                <FiChevronDown />
                            </button>
                            <div className="absolute z-10 w-full bg-white shadow-lg py-2  group-hover:block transition-opacity hidden">
                                <ul className="text-sm">
                                    {sortOptions.map((option) => (
                                        <li
                                            key={option}
                                            className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={`h-full p-6 w-full flex flex-col space-y-4 `}>
                    {parsedResults && parsedResults.doctors_found > 0 &&
                        <div>
                            <p className="text-lg font-bold text-left">{parsedResults.guided_prompt}</p>
                            <br />
                            <p className="text-xl text-blue-950 text-left">{parsedResults.prime_header.title}</p>
                            <hr className="border-t-2 border-gray-300 my-4" />

                            <div className="grid grid-cols-1 gap-6 ">
                                {Object.values(parsedResults.doctors).map((result, index) => (
                                    <Link href={`https://www.practo.com/${result.profile_url}`} key={index} target="_blank" >
                                        <div className="block group">

                                            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-4 flex flex-col sm:flex-row md:items-start items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                                <p className="text-2xl font-bold text-blue-400 group-hover:text-blue-600">{index + 1}</p>
                                                <div className="w-28 h-28 relative flex-shrink-0">
                                                    <Image
                                                        src={result.profile_photo.url || "/user.png"}
                                                        alt={`Picture of ${result.doctor_name}`}

                                                        layout="fill"
                                                        objectFit="cover"
                                                        className="rounded-full transform group-hover:scale-105 transition-transform duration-300"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="flex-grow">
                                                    <h2 className="text-2xl font-bold text-blue-800 group-hover:text-blue-900">{result.doctor_name}</h2>
                                                    <p className="text-gray-600 mt-1">{result.specialization}</p>
                                                    <div className="flex items-center text-gray-500 text-sm mt-2">
                                                        <FiBriefcase className="mr-2" />
                                                        {result.experience_years} years experience
                                                    </div>
                                                    <div className="flex items-center text-gray-500 text-sm mt-1">
                                                        <FiMapPin className="mr-2" />
                                                        {result.practice?.locality}, {result.practice?.city}
                                                    </div>
                                                    <div className="flex items-center space-x-6 mt-3">
                                                        <div className="flex items-center text-green-600 font-semibold">
                                                            <FiThumbsUp className="mr-1" />
                                                            <span>{result.recommendation_percent || "N/A"}%</span>
                                                        </div>
                                                        <div className="flex items-center text-gray-800 font-semibold">
                                                            <span>₹{result.consultation_fees || "N/A"}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col space-y-2 self-center sm:self-end w-full sm:w-auto">
                                                    <button className="bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors w-full">
                                                        Book Clinic Visit
                                                    </button>
                                                    <button className="bg-gray-200 text-gray-800 py-2 px-5 rounded-lg hover:bg-gray-300 transition-colors w-full">
                                                        View Profile
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    }
                    {isLoading && (
                        <div className="flex items-center justify-center h-90 top-1/2">
                            <div className="spinner-border animate-spin animation-spin " role="status">
                                <FiLoader className="animate-spin animation-pulse h-30 w-25  " />
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                    {!isLoading && parsedResults && (
                        <div className="flex items-center justify-center top-1/2">
                            <p className="text-gray-500">Showing {Object.values(parsedResults.doctors).length}/{parsedResults.doctors_found} result{parsedResults.doctors_found > 1 && "s "}</p>
                        </div>
                    )}
                    {!isLoading && parsedResults && parsedResults.doctors_found > Object.values(parsedResults.doctors).length && (
                        <div className="flex items-center justify-center mt-4">
                            <button
                                className="bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors"
                                onClick={() => setLoadPage(prevPage => prevPage + 1)}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                    {!isLoading && parsedResults && parsedResults.doctors_found === 0 && (
                        <div className="flex flex-col items-center justify-center top-1/2 h-100">
                            <p className="text-gray-500 text-2xl z-10">No results found.</p>
                            <p className="absolute text-gray-200 text-9xl">{":("}</p>
                            <p className="text-gray-500 text-xl z-10">Change the search criteria from above to find doctors.</p>
                        </div>
                    )}

                    {fetchError && (
                        <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-red-500 text-2xl">{fetchError}</p>
                            <p className="text-gray-500 text-lg">Please try refreshing the page or check your connection.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default SearchPage;
