import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <>
      <h1>Header Root</h1>
      <Outlet />
      <p>Footer Root</p>
    </>
  );
};

export default Root;
