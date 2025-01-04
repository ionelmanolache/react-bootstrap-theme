//============================================
type AppContextValue = {
  name: string;
  appDispatch: (action: ActionData) => void;
};

type AppContextProps = {
  appContextValue: AppContextValue;
  children: ReactNode;
};
//============================================
type THEME = "light" | "dark";

type VARIANT = "variant01" | "variant02";

type ThemeContextValue = {
  theme: THEME;
  variant: VARIANT;
  appDispatch: (action: ActionData) => void;
};

type ThemeContextProps = {
  themeContextValue: ThemeContextValue;
  children: ReactNode;
};
//============================================

type ActionState = {
  name: string;
  theme: THEME;
  variant: VARIANT;
};

type ActionData = {
  type: "changename" | "changetheme" | "changevariant";
  payload: {[key: string]:string | THEME};
};

type Actions = {
  [key: string]: (state: ActionState, data: ActionData) => ActionState;
};

type ToogleButtonProps = {
  onclick: () => void;
  children: ReactNode;
};