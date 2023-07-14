import { RouterProvider } from "react-router-dom";

import routerConfig from "./config/routerConfig";

const App: React.FC = () => {
  return <RouterProvider router={routerConfig} />;
};

export default App;
