import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayer from "./Components/availablePlayer/AvailablePlayer";
import Navbar from "./Components/navbar/Navbar";
import SelectedPlayer from "./Components/selectedPlayer/selectedPlayer";
import ToggleTop from "./Components/toggleTop/ToggleTop";

const fetchPlayers = async () => {
  const res = await fetch("/playersData.json");
  return res.json();
};
const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [coin, setCoin] = useState(100000000);
  const [soldPlayer, setSoldPlayer] = useState([]);

  const handleRemove = (removeCard) => {
    const remainingPlayer = soldPlayer.filter(
      (soldPlayerSingle) => soldPlayerSingle.id !== removeCard.id
    );
    setSoldPlayer(remainingPlayer);
    setCoin(coin + removeCard.price);
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <Navbar coin={coin}></Navbar>
      <ToggleTop
        soldPlayer={soldPlayer}
        toggle={toggle}
        setToggle={setToggle}
      ></ToggleTop>
      {toggle === true ? (
        <Suspense
          fallback={
            <div className="mx-auto flex justify-center items-center h-96">
              <span className="loading loading-ring loading-xl"></span>
            </div>
          }
        >
          <AvailablePlayer
            soldPlayer={soldPlayer}
            setSoldPlayer={setSoldPlayer}
            setCoin={setCoin}
            coin={coin}
            playerPromise={playerPromise}
          ></AvailablePlayer>
        </Suspense>
      ) : (
        <SelectedPlayer
          handleRemove={handleRemove}
          soldPlayer={soldPlayer}
        ></SelectedPlayer>
      )}
    </div>
  );
}

export default App;
