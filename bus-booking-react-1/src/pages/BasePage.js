import { Outlet } from "react-router-dom";
import { NavbarComp } from "../components/NavbarComp";

export const BasePage = () => {
  return (
    <>
      <NavbarComp />
      <Outlet></Outlet>
      
    </>
  );
};
