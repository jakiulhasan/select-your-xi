import React from "react";
import SelectedPlayerCard from "../selectedPlayerCard/SelectedPlayerCard";

const SelectedPlayer = ({ handleRemove, soldPlayer }) => {
  return (
    <div>
      <SelectedPlayerCard
        handleRemove={handleRemove}
        soldPlayer={soldPlayer}
      ></SelectedPlayerCard>
    </div>
  );
};

export default SelectedPlayer;
