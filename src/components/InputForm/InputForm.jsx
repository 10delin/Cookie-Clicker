import { useTranslation } from "react-i18next";

import Button from "../Button/Button";

const InputForm = ({ name, handleChange, handleSubmit }) => {
  const { t } = useTranslation();

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        name={name}
        type="text"
        placeholder={t("home.placeholder")}
        onChange={handleChange}
        data-cy="input-home"
      />
      <Button
        disabled={name.length <= 0}
        name={name}
        text={t("home.button")}
        dataCy={"button-home"}
      />
    </form>
  );
};

export default InputForm;
