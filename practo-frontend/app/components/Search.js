"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiMapPin, FiSearch, FiCompass, FiMap } from "react-icons/fi";
import Downarrow from "./downarrow";
import { FiMessageSquare, FiTablet, FiBriefcase, FiFileText, FiPlusCircle, FiBook } from "react-icons/fi";

const Search = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    "suggestion": "Bangalore",
    "weight": 100000,
    "category": "city",
    "display_name": "CITY",
    "display_name_original": "CITY",
    "key": "Bangalore",
    "original": "bangalore",
    "city_live": "true",
    "country": "India",
    "city_slug": "bangalore",
    "country_slug": "india",
    "score": 661.75824,
    "problem_area_ids": []
  });
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const [isLocationSelected, setLocationSelected] = useState(true);
  const [isDoctorSelected, setDoctorSelected] = useState(false);
  const [commonSpecialists, setCommonSpecialists] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (isLocationSelected && isDoctorSelected) {
      const params = new URLSearchParams({ city: selectedLocation.original, query: selectedDoctor.original, page: 1 });
      router.push(`/search/doctors?${params}`);
    }
  }, [isLocationSelected, isDoctorSelected]);

  const popularSearches = [
    "Hysterectomy",
    "Normal Delivery",
  ];

  //   const locationSuggestions = [
  //     {
  //         "suggestion": "Jp Nagar",
  //         "original": "Jp Nagar",
  //         "display_name": "LOCALITY",
  //         "category": "locality",
  //         "problem_area_ids": [],
  //         "city": "bangalore",
  //         "city_slug": "bangalore",
  //         "locality": "Jp Nagar",
  //         "locality_slug": "jp-nagar"
  //     }
  // ];

  useEffect(() => {
    const specialitySuggestions = async () => {
      const params = new URLSearchParams({ city: selectedLocation.original, query: "keyword" });
      const res = await fetch(`http://localhost:8080/api/suggestions?${params}`);
      const data = await res.json();
      setCommonSpecialists(data);
    };
    if (isDoctorOpen && commonSpecialists.length == 0) {
      specialitySuggestions();
    }

    const localitySuggestions = async () => {
      const params = new URLSearchParams({ city: selectedLocation.city_slug, query: "locality" });
      const res = await fetch(`http://localhost:8080/api/suggestions?${params}`);
      const data = await res.json();
      setLocationSuggestions(data);
    };
    if (isLocationOpen && isLocationSelected) {
      localitySuggestions();
    }
  }, [isLocationOpen, isDoctorOpen, isLocationSelected]);

  const getAutoSuggestions = async (query) => {
    const params = new URLSearchParams({ q: query });
    const res = await fetch(`http://localhost:8080/api/autocomplete?${params}`);
    const data = await res.json();
    setLocationSuggestions(data);
  };

  return (
    <>
      <div className="relative search-bg  mt-6 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Your home for health</h1>
          <p className="text-2xl font-bold mb-6">Find and Book</p>
          <div className="md:flex-row items-center justify-center space-x-1 flex-col space-y-4 md:space-y-0 flex ">
            <div className="relative md:w-1/4 w-full">
              <div className="flex items-center bg-white ">
                <FiMapPin className="text-gray-400 mx-2" />
                <input
                  id="location_input"
                  name="location"
                  type="text"
                  placeholder={selectedLocation.suggestion}
                  className="w-full p-3 bg-transparent text-gray-700 focus:outline-none"
                  onFocus={(e) => {
                    setIsLocationOpen(true);
                    e.target.select();
                  }}
                  onChange={(e) => {
                    if (e.target.value.trim().length > 2) {
                      getAutoSuggestions(e.target.value);
                    }
                    setLocationSelected(false);
                  }}
                  onBlur={() => setIsLocationOpen(false)}
                />
              </div>
              {isLocationOpen && (
                <div className="absolute z-10 px-1 mt-1 pt-2 bg-white w-full shadow-lg text-sm text-gray-700">
                  <ul>
                    <a className="px-2 py-2 cursor-pointer text-blue-500 underline flex items-center justify-start gap-2"
                      onMouseDown={() => {
                        alert("Feature Not available")
                      }}>
                      <FiCompass /> Use my location
                    </a>
                    <a className="px-2 py-2 cursor-pointer text-blue-500 underline flex  justify-start gap-2" onMouseDown={() => {
                      alert("Feature Not available")
                    }}>
                      <FiMap /> Search {selectedLocation.suggestion}
                    </a>
                    {locationSuggestions.map((item, index) => (
                      <div
                        key={index}
                        className="py-2 cursor-pointer hover:bg-gray-100 flex items-center border-b-1 border-gray-200 justify-between"
                        onMouseDown={() => {
                          setSelectedLocation(item);
                          setLocationSelected(true);
                          document.getElementById("location_input").value = item.suggestion;
                        }}
                      >
                        <div className="flex items-center">
                          <FiSearch className="text-gray-400 mx-2" />
                          {item.suggestion}
                        </div>
                        <p className="text-xs text-gray-500 align-self-end">{item.display_name}</p>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="relative md:w-2/5 w-full">
              <div className="flex items-center bg-white ">
                <FiSearch className="text-gray-400 mx-2" />
                <input
                  id="doctor_input"
                  name="doctor"
                  type="text"
                  placeholder={selectedDoctor?.suggestion || "Search doctors, clinics, hospitals, etc."}
                  className="w-full p-3 bg-transparent text-gray-700 focus:outline-none"
                  onFocus={(e) => {
                    setIsDoctorOpen(true);
                    e.target.select();
                  }}
                  onBlur={() => setIsDoctorOpen(false)}
                />
              </div>
              {isDoctorOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white text-sm  shadow-lg text-gray-700">
                  <div className="p-0">
                    <h3 className="text-xs bg-gray-300 py-1 text-left p-2">Popular Searches</h3>
                    <div className="p-2">
                      {commonSpecialists.map((item) => (
                        <div
                          key={item.original}
                          className="py-2 cursor-pointer hover:bg-gray-100 flex items-center border-b-1 border-gray-200 justify-between"
                          onMouseDown={() => {
                            setSelectedDoctor(item);
                            setDoctorSelected(true);
                            document.getElementById("doctor_input").value = item.suggestion;
                        
                          }}
                        >
                          <div className="flex items-center">
                            <FiSearch className="text-gray-400 mx-2" />
                            {item.suggestion}
                          </div>
                          <p className="text-xs text-gray-500 align-self-end">{item.display_name}</p>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 flex-col flex sm:flex-row justify-center items-center ">
            <span className="font-bold">Popular searches:</span>
            <a href="#" className=" hover:underline hover:text-gray-200 ml-2">
              Dermatologist
            </a>
            <a href="#" className=" hover:underline hover:text-gray-200 ml-2">
              Pediatrician
            </a>
            <a href="#" className=" hover:underline hover:text-gray-200 ml-2">
              Gynecologist/Obstetrician
            </a>
            <div className="relative inline-block ml-2 ">
              <a className=" hover:underline  hover:text-gray-200 flex">Others <Downarrow /> </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-blue-950 text-white justify-around items-center p-4 w-full">
        <a href="/consult-doctor" className="flex-col flex items-center">
          <FiMessageSquare className="text-3xl sm:text-2xl" />
          <span className="hidden md:block">Consult with a doctor</span>
        </a>

        <a href="/order-medicine" className="flex-col flex items-center">
          <FiTablet className="text-3xl sm:text-2xl" />
          <span className="hidden md:block">Order medicine</span>
        </a>

        <a href="/medical-records" className="flex-col flex items-center">
          <FiFileText className="text-3xl sm:text-2xl" />
          <span className="hidden md:block">View medical records</span>
        </a>

        <a href="/book-test" className="flex-col flex items-center">
          <FiPlusCircle className="text-3xl sm:text-2xl" />
          <span className="hidden md:block">Book test</span>
        </a>

        <a href="/articles" className="flex-col flex items-center">
          <FiBook className="text-3xl sm:text-2xl" />
          <span className="hidden md:block">Read articles</span>
        </a>

        <a href="/healthcare-providers" className="flex-col flex items-center">
          <FiBriefcase className="text-3xl sm:text-2xl" />
          <span className="hidden md:block">For healthcare providers</span>
        </a>
      </div>

    </>
  );
};

export default Search;
