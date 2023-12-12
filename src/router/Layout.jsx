import { Outlet, Link } from "react-router-dom";
import { Header } from "../components";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
};

export default Layout;
