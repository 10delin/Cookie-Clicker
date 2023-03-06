import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

const Game = () => {
  const [points, setPoints] = useState(0);
  const [autoClickers, setAutoClickers] = useState(0);
  const [showAuto, setShowAuto] = useState(false);

  const { t } = useTranslation();

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
        <p>
          {t("game.title")} : {points}
        </p>
        <button onClick={handleClick}>{t("game.button")}</button>
        {showAuto && (
          <button
            disabled={points < autoClickerCost}
            onClick={handleBuyAutoClicker}
          >
            {t("game.buy")}({autoClickerCost})
          </button>
        )}
      </div>
    </>
  );
};

export default Game;
