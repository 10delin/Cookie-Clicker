import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import CartIcon from "../../components/Icons/CartIcon";
import MergeIcon from "../../components/Icons/MergeIcon";
import FireIcon from "../Icons/FireIcon";

const MergeButtons = ({
  handleClick,
  showAuto,
  handleBuyAutoClicker,
  autoClickerCost,
  points,
  handleBuyMegaClicker,
  megaClickerCost,
}) => {
  const { t } = useTranslation();
  return (
    <div className="game__buttons">
      <Button
        onClick={handleClick}
        text={t("game.button")}
        icon={<MergeIcon />}
        dataCy="merge-button"
      />
      <>
        <Button
          onClick={handleBuyAutoClicker}
          text={t("game.buy")}
          secondary={autoClickerCost}
          disabled={points < autoClickerCost}
          icon={<CartIcon />}
          dataCy="auto-button"
        />

        <Button
          onClick={handleBuyMegaClicker}
          text={t("game.buyMega")}
          secondary={megaClickerCost}
          disabled={points < megaClickerCost}
          icon={<FireIcon />}
          dataCy="mega-button"
        />
      </>
    </div>
  );
};

export default MergeButtons;
