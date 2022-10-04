import React from "react";

function Sidebar({ countries, countryIndex, setCountryIndex }) {
    
    return (
        <ul className="shadow-md rounded-[20px] h-fit p-4 border w-1/6">
            {
                countries.map((item, index) =>
                    <li className={index === countryIndex ? "bg-orange-500 text-white rounded-lg cursor-pointer px-2 text-lg font-semibold" : "rounded-lg cursor-pointer px-2 text-lg font-semibold"} onClick={() => setCountryIndex(index)}>{item}</li>
                )
            }
        </ul>
    );
}

export default Sidebar;
