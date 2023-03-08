import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setGlobalName } from "../../redux/reducers/nameSlice";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "../../components/ChangeLanguage/ChangeLanguage";
import InputForm from "../../components/InputForm/InputForm";
import MouseIcon from "../../components/Icons/MouseIcon";

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
      <div className="home__content">
        <MouseIcon />
        <h1 className="home__content--title">{t("home.title")}</h1>
        <InputForm
          name={name}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Home;