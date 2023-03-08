import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} />,
    <Route path="/game" element={<Game />} />,
  ])
);

export default router;
