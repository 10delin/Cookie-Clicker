import { useTranslation } from "react-i18next";

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
      <button disabled={name.length <= 0} data-cy="button-home">
        {t("home.button")}
      </button>
    </form>
  );
};

export default InputForm;
