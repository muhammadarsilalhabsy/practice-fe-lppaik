import { Outlet } from "react-router-dom";
import { Header } from "../components";
const SharedPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedPage;
