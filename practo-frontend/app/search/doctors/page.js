"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
    FiChevronDown,
    FiCompass,
    FiMap,
    FiMapPin,
    FiSearch,
} from "react-icons/fi";
import {
    commonSpecialists,
    filterOptions,
    popularSearches,
    searchLocations,
    searchResults,
    sortOptions,
} from "../../lib/data";

const SearchPage = () => {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isDoctorOpen, setIsDoctorOpen] = useState(false);

    return (
        <div className="bg-gray-100">
            <main className="flex flex-col items-center justify-center w-full">
                <div className="md:flex-row p-4 w-full items-center justify-center space-x-1 flex-col space-y-4 md:space-y-0 flex ">
                    <div className="relative md:w-1/4 w-full">
                        <div className="flex items-center bg-white ">
                            <FiMapPin className="text-gray-400 mx-2" />
                            <input
                                type="text"
                                placeholder="Search location"
                                className="w-full p-3 bg-transparent text-gray-700 focus:outline-none"
                                onFocus={() => setIsLocationOpen(true)}
                                onBlur={() => setTimeout(() => setIsLocationOpen(false), 100)}
                            />
                        </div>
                        {isLocationOpen && (
                            <div className="absolute z-10 mt-1 pt-2 bg-white w-full shadow-lg text-md text-gray-700">
                                <ul>
                                    <a className="px-2 py-2 cursor-pointer text-blue-500 underline flex items-center justify-start gap-2">
                                        <FiCompass /> Use my location
                                    </a>
                                    <a className="px-2 py-2 cursor-pointer text-blue-500 underline flex items-center justify-start gap-2">
                                        <FiMap /> Search Bangalore
                                    </a>
                                    {searchLocations.map((location) => (
                                        <li
                                            key={location}
                                            className="px-2 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-start gap-2"
                                        >
                                            {" "}
                                            <FiSearch className="text-gray-400 mx-2" />
                                            {location}
                                            <p className="text-xs text-gray-500">Banglore</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative md:w-1/3  w-full">
                        <div className="flex items-center bg-white ">
                            <FiSearch className="text-gray-400 mx-2" />
                            <input
                                type="text"
                                placeholder="Search doctors, clinics, hospitals, etc."
                                className="w-full p-3 bg-transparent text-gray-700 focus:outline-none"
                                onFocus={() => setIsDoctorOpen(true)}
                                onBlur={() => setTimeout(() => setIsDoctorOpen(false), 100)}
                            />
                        </div>
                        {isDoctorOpen && (
                            <div className="absolute z-10 mt-1 w-full bg-white text-sm  shadow-lg text-gray-700">
                                <div className="p-0">
                                    <h3 className="text-xs bg-gray-300 py-1 text-left p-2">
                                        Popular Searches
                                    </h3>
                                    <ul className="p-2 grid grid-cols-2">
                                        {popularSearches.map((search) => (
                                            <li
                                                key={search}
                                                className="py-1 ml-2 rounded-xl  cursor-pointer bg-gray-200"
                                            >
                                                {search}
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className="text-xs bg-gray-300 py-1 text-left p-2">
                                        Common Specialists
                                    </h3>
                                    <div className="p-2">
                                        {commonSpecialists.map((specialist) => (
                                            <div
                                                key={specialist}
                                                className="py-2 cursor-pointer hover:bg-gray-100 flex items-center border-b-1 border-gray-200 justify-between"
                                            >
                                                {" "}
                                                <div className="flex items-center">
                                                    <FiSearch className="text-gray-400 mx-2" />
                                                    {specialist}
                                                </div>
                                                <p className="text-xs text-gray-500 align-self-end">
                                                    SPECIALITY
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-full bg-blue-950 py-2 px-4 md:px-0 flex items-center justify-center">
                    <div className="flex items-center justify-center space-x-4 w-full">
                        {filterOptions.map((filter) => (
                            <div key={filter.title} className="relative group">
                                <button className="bg-blue-950 py-2 px-4 text-white rounded-md hover:text-gray-100 flex items-center space-x-2">
                                    <span>{filter.title}</span>
                                    <FiChevronDown />
                                </button>
                                <div className="absolute z-10 w-full bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
                        <div className="relative group">
                            <button className="bg-blue-950 py-2 px-4 text-white rounded-md hover:text-gray-100 flex items-center space-x-2">
                                <span>Reset Filters</span>
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="bg-blue-950 py-2 px-4 text-white rounded-md hover:text-gray-100 flex items-center space-x-2">
                                <span>Sort By</span>
                                <FiChevronDown />
                            </button>
                            <div className="absolute z-10 w-full bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity">
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

                <div className="result-query px-12 py-4 w-full">
                    {searchResults.map((result, index) => (
                        <div
                            key={index}
                            className="flex items-center border-b py-4 flex-col md:flex-row"
                        >
                            <Image
                                src={result.picture}
                                alt={`Picture of ${result.name}`}
                                width={80}
                                height={80}
                                className="mr-4"
                            />
                            <div className="flex-grow text-left w-full">
                                <div className="font-bold">{result.name}</div>
                                <div>{result.specialist}</div>
                                <div>{result.experience} years experience</div>
                                <div>{result.address}</div>
                                <div>{result.info}</div>
                                <div>Fees: ${result.fees}</div>
                                <div>Rating: {result.rating} stars</div>
                            </div>
                            <div className="text-right flex flex-col mx-4">
                                <div>{result.availability}</div>
                                <button className="bg-blue-500 text-white py-1 px-3 rounded mt-2">
                                    Book Clinic Visit
                                </button>
                                <button className="bg-gray-300 text-black py-1 px-3 rounded mt-2">
                                    Contact Hospital
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SearchPage;
