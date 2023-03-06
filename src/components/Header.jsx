import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { name } = useSelector((state) => state);
  const { t } = useTranslation();

  return (
    <div className="header">
      <h1>
        {t("header.hello")} {name}
      </h1>
      <div>
        <Link to="/" data-cy="link-home">
          {t("header.home")}
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
