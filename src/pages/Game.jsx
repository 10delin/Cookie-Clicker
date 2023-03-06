import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";

const Game = () => {
  const { name } = useSelector((state) => state);

  const [points, setPoints] = useState(0);
  const [autoClickers, setAutoClickers] = useState(0);
  const [showAuto, setShowAuto] = useState(false);

  const autoClickerCost = 50 + 50 * autoClickers;

  const handleClick = () => {
    setPoints((prevPoints) => prevPoints + 1);
  };

  const handleBuyAutoClicker = () => {
    if (points >= autoClickerCost) {
      setAutoClickers((prevAutoClickers) => prevAutoClickers + 1);
      setPoints((prevPoints) => prevPoints - autoClickerCost);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPoints((prevPoints) => prevPoints + autoClickers);
    }, 100);

    return () => clearInterval(intervalId);
  }, [autoClickers]);

  useEffect(() => {
    if (points >= 50) {
      setShowAuto(true);
    }
  }, [points]);

  return (
    <>
      <Header />
      <div className="game">
        <h1>Hola {name}</h1>
        <button onClick={handleClick}>Points: {points}</button>
        {showAuto && (
          <button
            disabled={points < autoClickerCost}
            onClick={handleBuyAutoClicker}
          >
            Buy AutoClicker ({autoClickerCost})
          </button>
        )}
      </div>
    </>
  );
};

export default Game;
