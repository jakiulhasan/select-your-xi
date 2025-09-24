import React, { useState } from "react";
import userImg from "../../assets/user-1.png";
import flagIcon from "../../assets/Vector.png";

const Card = ({ setSoldPlayer, soldPlayer, setCoin, coin, player }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectClick = () => {
    if (coin < player.price) {
      alert("Not Enough Coin");
      return;
    }
    setCoin(coin - player.price);
    setIsSelected(true);
    setSoldPlayer([...soldPlayer, player]);
  };
  return (
    <div>
      <div className="p-4 shadow-xl border-1 border-[#00000030] rounded-2xl">
        <div className="mx-auto">
          <img
            className="rounded-xl w-full h-[215px] object-cover"
            src={player.image}
            alt="Cricketer Photo"
          />
          <div className="flex gap-3 my-4">
            <img src={userImg} alt="" />
            <h2 className="card-title font-bold">{player.name}</h2>
          </div>
          <div className="flex justify-between items-center pb-4 mb-4 border-b-1 border-[#00000080]">
            <div className="text-[#00000080] flex gap-2 w-[15px] h-[15px] items-center">
              <img className="opacity-60" src={flagIcon} alt="" />
              <h2>{player.country}</h2>
            </div>
            <h2 className="font-bold">{player.role}</h2>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between">
              <h1 className="font-semibold text-[16px]">Rating</h1>
              <span>⭐{player.rating}</span>
            </div>
            <div className="flex justify-between">
              <h1 className="font-semibold text-[16px]">
                {player.battingType}
              </h1>
              <h1 className="text-[16px]">{player.bowlingType}</h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-[16px]">
                Price: ${player.price}
              </h1>
              <button
                disabled={isSelected}
                onClick={() => {
                  handleSelectClick();
                }}
                className="btn text-[16px]"
              >
                {isSelected ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
