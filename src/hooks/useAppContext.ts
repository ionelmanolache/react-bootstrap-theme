import { useContext } from "react";
import { ApplicationContext } from "../contexts";


export const useAppContext = () => {
    const context = useContext(ApplicationContext);
    if (!context) {
        throw new Error('useAppContext must be used within a ApplicationContext');
    }
    return context;
}