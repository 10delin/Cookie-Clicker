import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Toaster, toast } from "sonner";

import Header from "../../components/Header/Header";
import PlayerRanking from "../../components/PlayerRanking/PlayerRanking";
import MergeButtons from "../../components/MergeButtons/MergeButtons";
import GameContent from "../../components/GameContent/GameContent";
import { useTranslation } from "react-i18next";

const Game = () => {
  const { t } = useTranslation();
  const { name } = useSelector((state) => state);
  const navigate = useNavigate();

  const [points, setPoints] = useState(0);
  const [autoClickers, setAutoClickers] = useState(0);
  const [megaClickers, setMegaClickers] = useState(0);

  const autoClickerCost = 50 + 50 * autoClickers;
  const megaClickerCost = 1000 + 1000 * megaClickers;

  const handleClick = () => {
    setPoints((prevPoints) => prevPoints + 1);
  };

  const handleBuyAutoClicker = () => {
    if (points >= autoClickerCost) {
      setAutoClickers((prevAutoClickers) => prevAutoClickers + 1);
      setPoints((prevPoints) => prevPoints - autoClickerCost);
      toast.success(t("toaster.autoMerger"));
    }
  };

  const handleBuyMegaClicker = () => {
    if (points >= megaClickerCost) {
      setMegaClickers((prevMegaClickers) => prevMegaClickers + 1);
      setPoints((prevPoints) => prevPoints - megaClickerCost);
      toast.success(t("toaster.megaMerger"));
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem(name);
    if (storedUser !== null) {
      const { points, autoClickers, megaClickers } = JSON.parse(storedUser);
      setPoints(points);
      setAutoClickers(autoClickers);
      setMegaClickers(megaClickers);
    }
  }, [name]);

  useEffect(() => {
    if (!name) {
      navigate("/");
    } else {
      localStorage.setItem(
        name,
        JSON.stringify({ name, points, autoClickers, megaClickers })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points, autoClickers, name]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPoints((prevPoints) => prevPoints + autoClickers);
    }, 100);
    return () => clearInterval(intervalId);
  }, [autoClickers]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPoints((prevPoints) => prevPoints + megaClickers);
    }, 100);
    return () => clearInterval(intervalId);
  }, [megaClickers]);

  return (
    <>
      <Header />
      <div className="game">
        <GameContent
          points={points}
          autoClickers={autoClickers}
          megaClickers={megaClickers}
        />
        <MergeButtons
          handleClick={handleClick}
          handleBuyAutoClicker={handleBuyAutoClicker}
          autoClickerCost={autoClickerCost}
          points={points}
          handleBuyMegaClicker={handleBuyMegaClicker}
          megaClickerCost={megaClickerCost}
        />
        <PlayerRanking />
        <Toaster expand={true} duration={1500} richColors />
      </div>
    </>
  );
};

export default Game;
