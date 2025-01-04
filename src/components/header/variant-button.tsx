const VariantButton = ({ onclick, children }: ToogleButtonProps) => {
  return (
      <button className="btn" onClick={onclick}>
        {children}
      </button>
    
  );
};

export default VariantButton;
