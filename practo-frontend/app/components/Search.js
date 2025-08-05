"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiMapPin, FiSearch, FiCompass, FiMap } from "react-icons/fi";



const Search = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const [isLocationSelected, setLocationSelected] = useState(true);
  const [isDoctorSelected, setDoctorSelected] = useState(false);
  const [commonSpecialists, setCommonSpecialists] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [doctorSuggestions, setDoctorSuggestions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const sessionLocation = sessionStorage.getItem("selectedLocation");
    const sessionDoctor = sessionStorage.getItem("selectedDoctor");

    if (sessionLocation) {
      setSelectedLocation(JSON.parse(sessionLocation));
    }
    else{
      setSelectedLocation({
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
    }
    if (sessionDoctor) {
      setSelectedDoctor(JSON.parse(sessionDoctor));
    }

  }, []);

  useEffect(() => {
    if (isLocationSelected && isDoctorSelected) {
      sessionStorage.setItem("selectedLocation", JSON.stringify(selectedLocation));
      sessionStorage.setItem("selectedDoctor", JSON.stringify(selectedDoctor));

      const params = new URLSearchParams({ region: selectedLocation.city_slug, result_type: selectedDoctor.original });
      router.push(`/search/doctors?${params}`, undefined, { shallow: false });
    }
  }, [isLocationSelected, isDoctorSelected, selectedLocation, selectedDoctor, router]);

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
      const res = await fetch(`https://practo-clone-9wxf.onrender.com/api/suggestions?${params}`);
      const data = await res.json();
      setCommonSpecialists(data);
    };
    if (isDoctorOpen && commonSpecialists.length == 0) {
      specialitySuggestions();
    }

    const localitySuggestions = async () => {
      const params = new URLSearchParams({ city: selectedLocation.city_slug, query: "locality" });
      const res = await fetch(`https://practo-clone-9wxf.onrender.com/api/suggestions?${params}`);
      const data = await res.json();
      setLocationSuggestions(data);
    };
    if (isLocationOpen && isLocationSelected) {
      localitySuggestions();
    }
  }, [isLocationOpen, isDoctorOpen, isLocationSelected, commonSpecialists.length, selectedLocation.city_slug, selectedLocation.original]);

  const getAutoSuggestions = async (query, isregion) => {
    const params = new URLSearchParams({ q: query, isregion: isregion });
    const res = await fetch(`https://practo-clone-9wxf.onrender.com/api/autocomplete?${params}`);
    const data = await res.json();
    if (isregion) {
      setLocationSuggestions(data);
      return;
    }
    setCommonSpecialists(data);
  };

  return (
    <>

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
                getAutoSuggestions(e.target.value, true);
              }
              setLocationSelected(false);
            }}
            onBlur={() => setIsLocationOpen(false)}
          />
        </div>
        {isLocationOpen && (
          <div className="absolute z-100 px-1 mt-1 pt-2 bg-white w-full shadow-lg text-sm text-gray-700">
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
            onChange={(e) => {
              if (e.target.value.trim().length > 2) {
                getAutoSuggestions(e.target.value, false);
              }
              setDoctorSelected(false);
            }}
            onBlur={() => setIsDoctorOpen(false)}
          />
        </div>
        {isDoctorOpen && (
          <div className="absolute z-100 mt-1 w-full bg-white text-sm  shadow-lg text-gray-700">
            <div className="p-0">
              <h3 className="text-xs bg-gray-300 py-1 text-left p-2">Suggested Specialists</h3>
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
    </>
  );
};

export default Search;
