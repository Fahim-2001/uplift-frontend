const StyledButton = (btn) => {
  const { name, style, func } = btn.btn;

  return <button className={style} onClick={func}>{name}</button>;
};

export default StyledButton;
