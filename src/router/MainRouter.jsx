import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Wrapper } from "./Wrapper";
import Test from "./Test";
import { Header, Homes, NewsDetailPage } from "../components";
import { Outlet } from "react-router-dom";
import Layout from "./Layout";
import Todolist from "../pages/Todolist";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path=":id" element={<NewsDetailPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Todolist />} />
            <Route path="/TodoList" element={<Todolist />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
