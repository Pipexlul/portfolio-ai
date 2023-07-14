import { createHashRouter } from "react-router-dom";

import { publicPages } from "../pages";

const { Root: PublicRoot } = publicPages;

const router = createHashRouter([
  {
    path: "/",
    element: <PublicRoot />,
    errorElement: null,
  },
]);

export default router;
