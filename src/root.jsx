import { Outlet } from "react-router-dom";
import Navbar from "components/navbar";

const Root = () => {
  return (
    <div className="App bg-gray-900 antialiased">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Root;
