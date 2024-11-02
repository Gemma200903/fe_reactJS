import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./components/Card";
import Button from "./components/Button";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import Databinding from "./components/databinding/Databinding";
import StyleComponent from "./components/StyleComponent/StyleComponent";
import HandleEvent from "./components/HandleEvent/HandleEvent";
import StateComopent from "./components/StateComponent/StateComopent";
import ChangeColor from "./components/StateComponent/ChangeColor";
import ChangeAvatar from "./components/StateComponent/ChangeAvatar";
import ChangeCar from "./components/StateComponent/ChangeCar";
import RenderWithMap from "./components/RenderWithMap/RenderWithMap";
import DemoProps from "./components/Props/DemoProps/DemoProps";
import ProductList from "./components/Props/ExRenderProduct/ProductList";
import ExXemChiTiet from "./components/Props/ExXemChiTiet/ExXemChiTiet";
import ExPhoneCart from "./components/Props/ExPhoneCart/ExPhoneCart";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Header from "./components/HomeLayout/Header";
import HeaderPage from "./components/HeaderPage/HeaderPage";
import HomeTemplate from "./templates/HomeTemplate";
import AuthTemplate from "./templates/AuthTemplate";
import Login from "./page/Login";
import Register from "./page/Register";
import Page404 from "./page/Page404";
import ReactForm from "./page/ReactForm/ReactForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplate></HomeTemplate>}>
        {/* localhost:3000/ExPhoneCart */}
        <Route
          index
          path="ExPhoneCart"
          element={<ExPhoneCart></ExPhoneCart>}
        ></Route>

        {/* LOCALHOST:3000/ExXemChiTiet */}
        <Route
          path="ExXemChiTiet"
          element={<ExXemChiTiet></ExXemChiTiet>}
        ></Route>

        {/* LOCALHOST:3000/ProductList */}
        <Route path="ProductList" element={<ProductList></ProductList>}></Route>

        {/* ExDemoForm */}
        <Route path="ExDemoForm" element={<ReactForm></ReactForm>}></Route>
      </Route>


      {/* Template Auth */}
      <Route path="auth" element={<AuthTemplate></AuthTemplate>}>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Route>

      {/* khi người dùng truy cập vào đường dẫn bất kì không thuộc các đường dẫn ở trên */}
      <Route path="*" element={<Page404></Page404>}></Route>

      {/* localhost:3000/demo */}
      <Route path="demo" element={<div>good afternoon</div>}></Route>
    </Routes>
  </BrowserRouter>
);
