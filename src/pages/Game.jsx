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

  const autoClickerCost = 50 + 50 * autoClickers;
  const showAuto = autoClickers > 0 || points >= 50;

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
    const storedUser = localStorage.getItem(name);
    if (storedUser !== null) {
      const { points, autoClickers } = JSON.parse(storedUser);
      setPoints(points);
      setAutoClickers(autoClickers);
    }
  }, [name]);

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify({ points, autoClickers }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points, autoClickers, name]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPoints((prevPoints) => prevPoints + autoClickers);
    }, 100);

    return () => clearInterval(intervalId);
  }, [autoClickers]);

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
