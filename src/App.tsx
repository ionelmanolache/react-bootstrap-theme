import { StrictMode, useMemo, useReducer } from 'react';
import Layout from './layout'
import { ApplicationContextProvider, ThemeContextProvider } from './contexts'
import { appReducer } from './reducers';

const initState: ActionState = {
  name: "", theme: 'light', variant: 'variant01'
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initState);
/*
  useEffect(() => {
    console.log("app.useEffect.VARIANT", state.variant);
    switch (state.variant) {
      case "variant01":
        import("./theme/variant01/theme-variant01.scss").then(() => {
        });
        break;
      case "variant02":
        import("./theme/variant02/theme-variant02.scss").then(() => {
        });
        break;
      default:
        import("./theme/theme.scss").then(() => {
        });
    }
  }, [state.variant]);
*/

  const appContextValue = useMemo(() => {
    console.log("update appContextValue", state.name);
    return {
      name: state.name,
      // variant: state.variant,
      appDispatch: dispatch,
    };
  }, [state.name]);

  const themeContextValue = useMemo(() => {
    console.log("update themeContextValue", state.theme);
    return {
      variant: state.variant,
      theme: state.theme,
      appDispatch: dispatch,
    };
  }, [state.theme, state.variant]);

  return (
    <ApplicationContextProvider appContextValue={appContextValue}>
      <ThemeContextProvider themeContextValue={themeContextValue}>
        <StrictMode>
          <Layout />
        </StrictMode>
      </ThemeContextProvider>
    </ApplicationContextProvider>
  )
}

export default App
