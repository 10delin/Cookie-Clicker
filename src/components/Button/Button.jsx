const Button = ({ text, secondary, disabled, onClick, icon, dataCy }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}
      data-cy={dataCy}
    >
      <span>{icon}</span> {text} {secondary && <span>({secondary})</span>}
    </button>
  );
};

export default Button;
