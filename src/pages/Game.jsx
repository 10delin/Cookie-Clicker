import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import CartIcon from "../components/Icons/CartIcon";
import MergeIcon from "../components/Icons/MergeIcon";

const Game = () => {
  const { t } = useTranslation();
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

  // Carga los datos guardados del usuario desde localStorage o cookies, si existen
  useEffect(() => {
    const storedUser = localStorage.getItem(name);

    if (storedUser !== null) {
      setPoints(JSON.parse(storedUser).points);
      setAutoClickers(JSON.parse(storedUser).autoClickers);
    }
  }, [name]);

  // Guarda los datos del juego en localStorage o cookies cada vez que cambian
  useEffect(() => {
    localStorage.setItem(name, JSON.stringify({ points, autoClickers }));
  }, [points, autoClickers, name]);

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
        <div className="game__content">
          <p>
            {t("game.title")} : {points}
          </p>
          <p>
            {t("game.autoMergers")} : {autoClickers}
          </p>
        </div>
        <div className="game__buttons">
          <Button
            onClick={handleClick}
            text={t("game.button")}
            icon={<MergeIcon />}
            dataCy="merge-button"
          />
          {showAuto && (
            <Button
              onClick={handleBuyAutoClicker}
              text={t("game.buy")}
              secondary={autoClickerCost}
              disabled={points < autoClickerCost}
              icon={<CartIcon />}
              dataCy="auto-button"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Game;
