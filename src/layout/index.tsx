import { useMemo } from "react";
import Header from "../components/header";
import Home from "../components/home";

export default function Layout() {
  const header= useMemo(() => <Header />, []);

  return (
    <div className="container">
      {header}<br/>
      <Home/>
    </div>
  )
}
