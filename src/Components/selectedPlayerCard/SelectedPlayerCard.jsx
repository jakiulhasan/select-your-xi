import React from "react";
import SingleSelectedCard from "../single Selected Card/SingleSelectedCard";

const SelectedPlayerCard = ({ handleRemove, soldPlayer }) => {
  return (
    <>
      {soldPlayer.map((singleCard) => (
        <SingleSelectedCard
          handleRemove={handleRemove}
          key={soldPlayer.id}
          singleCard={singleCard}
        ></SingleSelectedCard>
      ))}
    </>
  );
};

export default SelectedPlayerCard;
