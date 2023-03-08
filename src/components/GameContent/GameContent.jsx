import { useTranslation } from "react-i18next";

const GameContent = ({ points, autoClickers, megaClickers }) => {
  const { t } = useTranslation();

  return (
    <div className="game__content">
      {t("game.title")} : {points}
      <br></br>
      {t("game.autoMergers")} : {autoClickers}
      <br></br>
      {t("game.megaMergers")} : {megaClickers}
    </div>
  );
};

export default GameContent;
