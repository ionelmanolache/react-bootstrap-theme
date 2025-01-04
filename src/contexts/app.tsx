import { createContext } from "react";

const empty = {} as AppContextValue;

const ApplicationContext = createContext<AppContextValue>(empty);

function ApplicationContextProvider({ appContextValue, children }: AppContextProps) {
    return (
        <ApplicationContext.Provider value={appContextValue}>
            {children}
        </ApplicationContext.Provider>
    )
}

export { ApplicationContext, ApplicationContextProvider }