import { useMemo } from "react";
import Header from "../components/header";
import Home from "../components/home";

export default function Layout() {
  const header = useMemo(() => <Header />, []);

  return (
    <div className="container-sm" style={{ maxWidth: '400px' }}>
      {header}<br />
      <Home />
    </div>
  )
}
