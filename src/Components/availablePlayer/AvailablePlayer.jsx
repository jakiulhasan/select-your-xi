import React, { use } from "react";
import Card from "../card/Card";

const AvailablePlayer = ({
  soldPlayer,
  setSoldPlayer,
  setCoin,
  coin,
  playerPromise,
}) => {
  const playerData = use(playerPromise);
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {playerData.map((player) => (
        <Card
          soldPlayer={soldPlayer}
          setSoldPlayer={setSoldPlayer}
          setCoin={setCoin}
          coin={coin}
          key={player.id}
          player={player}
        ></Card>
      ))}
    </div>
  );
};

export default AvailablePlayer;
