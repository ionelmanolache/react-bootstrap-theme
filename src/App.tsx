import { useEffect, useMemo, useReducer } from "react";
import { appReducer } from "./shared/reducers";
import Layout from "./shared/layout";
import { ApplicationContextProvider, ThemeContextProvider } from "./shared/contexts";

const initState: ActionState = { name: "", theme: 'light', variant:'variant01'};

function App() {
  const [state, dispatch] = useReducer(appReducer, initState);

  const appContextValue = useMemo(() => {
    console.log("name changed", state.name);
    return {
      name: state.name,
      appDispatch: dispatch,
    };
  }, [state.name]);

  const themeContextValue = useMemo(() => {
    console.log("theme changed", state.theme);
    return {
      theme: state.theme,
      appDispatch: dispatch,
    };
  }, [state.theme]);

  useEffect(() => {
    console.log("VARIANT changed", state.variant);
    switch (state.variant) {
      case "variant01":
        import("./shared/theme/variant01/theme-variant01.scss").then(() => {
          // setLoaded(true);
        });
        break;
      default:
        import("./shared/theme/theme.scss").then(() => {
          // setLoaded(true);
        });
    }
  }, [state.variant]);

  return (
    <ApplicationContextProvider appContextValue={appContextValue}>
      <ThemeContextProvider
        variant={state.variant}
        themeContextValue={themeContextValue}
      >
        <Layout />
      </ThemeContextProvider>
    </ApplicationContextProvider>
  );
}

export default App;
