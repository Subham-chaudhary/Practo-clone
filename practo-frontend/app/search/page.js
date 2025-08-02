"use client";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { FiMapPin, FiSearch, FiCompass, FiMap, FiChevronDown } from "react-icons/fi";


const Search = () => {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isDoctorOpen, setIsDoctorOpen] = useState(false);

    const locations = [
        "Jp Nagar",
        "Whitefield",
        "HSR Layout",
        "Indiranagar",
        "Malleshwaram",
        "Sarjapur Road",
        "Bannerghatta Road",
        "Rajajinagar",
        "Jayanagar",
        "Electronic City",
    ];

    const popularSearches = [
        "Hysterectomy",
        "Normal Delivery",
    ];

    const commonSpecialists = [
        "Dentist",
        "Gynecologist/ OBGYN",
        "General Physician",
        "Orthopedist",
        "Pediatrician",
        "Dermatologist",
        "Ear-Nose-Throat (ENT)",
        "Homeopath",
        "Ayurveda",
    ];

    const results = [
        {
            name: "Dr. John Doe",
            specialist: "Orthopedist",
            experience: 5,
            address: "Jp Nagar",
            info: "MBBS, MS - Orthopaedics",
            fees: 500,
            rating: 4.5,
            picture: "/globe.svg",
        },
        {
            name: "Dr. Jane Smith",
            specialist: "Gynecologist/ OBGYN",
            experience: 3,
            address: "Whitefield",
            info: "MBBS, MD - Obstetrics & Gynaecology",
            fees: 300,
            rating: 4.2,
            picture: "/globe.svg",
        },
        {
            name: "Dr. Michael Johnson",
            specialist: "Dentist",
            experience: 7,
            address: "HSR Layout",
            info: "BDS, MDS - Prosthodontics",
            fees: 400,
            rating: 4.8,
            picture: "/globe.svg",
        },
        {
            name: "Dr. Emily Lee",
            specialist: "General Physician",
            experience: 2,
            address: "Indiranagar",
            info: "MBBS",
            fees: 200,
            rating: 4.1,
            picture: "/globe.svg",
        },
        {
            name: "Dr. David Kim",
            specialist: "Pediatrician",
            experience: 10,
            address: "Malleshwaram",
            info: "MBBS, MD - Pediatrics",
            fees: 600,
            rating: 4.9,
            picture: "/globe.svg",
        },
        {
            name: "Dr. Sarah Taylor",
            specialist: "Dermatologist",
            experience: 8,
            address: "Sarjapur Road",
            info: "MBBS, MD - Dermatology, Venereology & Leprosy",
            fees: 550,
            rating: 4.7,
            picture: "/globe.svg",
        },
    ];
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="flexitems-center justify-center w-full" >
                <div className="md:flex-row p-4 items-center justify-center space-x-1 flex-col space-y-4 md:space-y-0 flex ">
                    <div className="relative md:w-1/5 w-full">
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
                                    {locations.map((location) => (
                                        <li
                                            key={location}
                                            className="px-2 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-start gap-2"
                                        > <FiSearch className="text-gray-400 mx-2" />
                                            {location}
                                            <p className="text-xs text-gray-500">Banglore</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative md:w-2/6 w-full">
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
                                    <h3 className="text-xs bg-gray-300 py-1 text-left p-2">Popular Searches</h3>
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
                                    <h3 className="text-xs bg-gray-300 py-1 text-left p-2">Common Specialists</h3>
                                    <div className="p-2">
                                        {commonSpecialists.map((specialist) => (

                                            <div
                                                key={specialist}
                                                className="py-2 cursor-pointer hover:bg-gray-100 flex items-center border-b-1 border-gray-200 justify-between"
                                            > <div className="flex items-center">
                                                    <FiSearch className="text-gray-400 mx-2" />
                                                    {specialist}</div>
                                                <p className="text-xs text-gray-500 align-self-end">SPECIALITY</p>
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
                        <div className="relative group">
                            <button className="bg-blue-950 py-2 px-4 text-white rounded-md hover:text-gray-100 flex items-center space-x-2">
                                <span>Gender</span>
                                <FiChevronDown />
                            </button>
                            <div className="absolute z-10 w-full bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ul className="text-sm">
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Male</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Female</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">All</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="bg-blue-950 py-2 px-4 text-white rounded-md hover:text-gray-100 flex items-center space-x-2">
                                <span>Patient Stories</span>
                                <FiChevronDown />
                            </button>
                            <div className="absolute z-10 w-full bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ul className="text-sm">
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">True Stories</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Success Stories</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">All</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="bg-blue-950 py-2 px-4 text-white rounded-md hover:text-gray-100 flex items-center space-x-2">
                                <span>Experience</span>
                                <FiChevronDown />
                            </button>
                            <div className="absolute z-10 w-full bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ul className="text-sm">
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">0-5 years</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">5-10 years</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">10+ years</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">All</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="bg-blue-950 py-2 px-4 text-white rounded-md hover:text-gray-100 flex items-center space-x-2">
                                <span>All Filters</span>
                                <FiChevronDown />
                            </button>
                            <div className="absolute z-10 w-full bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ul className="text-sm">
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Insurance</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Location</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Language</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">All</li>
                                </ul>
                            </div>


                        </div>
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
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Name (A-Z)</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Name (Z-A)</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Price (Low-High)</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Price (High-Low)</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Rating (Low-High)</li>
                                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Rating (High-Low)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="result-query px-12">
                    {results.map((result, index) => (
                        <div key={index} className="flex items-center border-b py-4 flex-col md:flex-row">
                            <Image src={result.picture} alt={`Picture of ${result.name}`} width={80} height={80} className="mr-4" />
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
                                <button className="bg-blue-500 text-white py-1 px-3 rounded mt-2">Book Clinic Visit</button>
                                <button className="bg-gray-300 text-black py-1 px-3 rounded mt-2">Contact Hospital</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Search;