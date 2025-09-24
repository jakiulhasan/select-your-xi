import React from "react";

const ToggleTop = ({ soldPlayer, toggle, setToggle }) => {
  return (
    <div>
      <div className="flex justify-between items-center my-4">
        <h2 className="text-2xl font-bold">
          {toggle === true
            ? `Available Player`
            : `Selected Player (${soldPlayer.length}/6)`}
        </h2>
        <div className="font-semibold">
          <button
            onClick={() => setToggle(true)}
            className={`cursor-pointer py-2 px-6 border-1 border-[#00000030] rounded-l-2xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`cursor-pointer py-2 px-6 border-1 border-[#00000030] rounded-r-2xl border-l-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>({soldPlayer.length})</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleTop;
