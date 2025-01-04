const ThemeButton = ({ onclick, children }: ToogleButtonProps) => {
  return (
    
      <button className="btn" onClick={onclick}>
        {children}
      </button>
    
  );
};

export default ThemeButton;
