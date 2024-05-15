import { useMemo } from 'react';
import Header from '../../features/header/header';
import Home from '../../features/home';

export default function Layout() {
    const header = useMemo(() => <Header />, []);
    return (
        <div className="container">
            {header}
            <Home/>
        </div>
    )
}