import React from "react";
import removeIcon from "../../assets/removeIcon.png";

const SingleSelectedCard = ({ handleRemove, singleCard }) => {
  const handleSelectedRemove = () => {
    handleRemove(singleCard);
  };
  return (
    <div className="mt-3">
      <div className="flex justify-between items-center p-3 border-2 border-gray-200 rounded-2xl">
        <div className="flex items-center gap-4">
          <img
            className="w-[100px] h-[66px] object-cover rounded-xl"
            src={singleCard.image}
            alt="cricketer image"
          />

          <div>
            <h1 className="text-2xl font-bold">{singleCard.name}</h1>
            <p className="text-gray-500">{singleCard.role}</p>
          </div>
        </div>

        <div onClick={handleSelectedRemove}>
          <img src={removeIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleSelectedCard;
