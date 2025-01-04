const VariantButton = ({ onclick, children }: ToogleButtonProps) => {
  return (
    <button className="btn btn-outline-primary" onClick={onclick}>
      {children}
    </button>

  );
};

export default VariantButton;
