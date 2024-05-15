import { useMemo, createContext, useContext } from "react";
// import { AppContextValue, AppContextProps } from "../../types";

const empty = {} as AppContextValue;

export const ApplicationContext = createContext<AppContextValue>(empty);

export function ApplicationContextProvider({ appContextValue, children }: AppContextProps) {
    const contextValue = useMemo(() => {
        return Object.freeze(appContextValue)
    }, [appContextValue]);

    return (
        <ApplicationContext.Provider value={contextValue}>
            {children}
        </ApplicationContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(ApplicationContext);
    if (!context) {
        throw new Error('useAppContext must be used within a ApplicationContext');
    }
    return context;
}