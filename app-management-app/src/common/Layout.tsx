import { Outlet } from "react-router";
import { Footer } from "./footer/Footer";

export default function Layout() {
  return (
    <>
        <Outlet />
        <Footer />
    </>
  );
}
