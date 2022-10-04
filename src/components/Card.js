import React from "react";

function Card({ info }) {
  const { name, deadline, meet_link, image } = info;

  return (
    <div className="border rounded-[20px] w-fit">
      <img
        src={image}
        alt=""
        className="w-full rounded-t-[20px] max-h-[250px]"
      />
      <div className="p-[14px]">
        <div className="font-medium pt-2 pb-4">{name}</div>
        <div className="text-orange-500 font-medium text-sm">
          {new Date(deadline).toDateString()}
        </div>
        <a href={meet_link} className="text-xs font-medium">
          Google meet | {new Date(deadline).toLocaleTimeString().slice(0, 4)}
        </a>
        <div className="border border-green-500 text-green-500 justify-center items-center flex rounded-[10px] mt-3 cursor-pointer p-3">
          Register now
        </div>
      </div>
    </div>
  );
}

export default Card;
