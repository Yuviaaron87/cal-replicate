import { Routes, Route } from "react-router";
import { ROUTES } from "../constants/route";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import PageNotFound from "../pages/pagenotfound/PageNotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}