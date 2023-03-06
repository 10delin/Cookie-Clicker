import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setGlobalName } from "../redux/reducers/nameSlice";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "../components/ChangeLanguage";

const Home = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setGlobalName(name));
    navigate("/game");
  };

  return (
    <div className="home">
      <ChangeLanguage />
      <h1>{t("home.title")}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name={name}
          type="text"
          placeholder={t("home.placeholder")}
          onChange={handleChange}
          data-cy="input-home"
        />
        <button disabled={name.length <= 0} data-cy="button-home">
          {t("home.button")}
        </button>
      </form>
    </div>
  );
};

export default Home;
