import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ExitIcon from "./Icons/ExitIcon";

const Header = () => {
  const { name } = useSelector((state) => state);
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="header__content">
        <p className="header__content--name">
          {t("header.hello")} {name}
        </p>
        <Link className="header__content--link" to="/" data-cy="link-home">
          <ExitIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
