import { ReactNode } from "react";

type ToogleButtonProps = {
  onclick: () => void;
  children: ReactNode;
};

const ThemeButton = ({ onclick, children }: ToogleButtonProps) => {
  return (
    <div className="col-6 d-flex justify-content-end">
      <button className="btn" onClick={onclick}>
        {children}
      </button>
    </div>
  );
};

export default ThemeButton;
