import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutRouting from "./LayoutRouting";
import Home from "./Home";
import Sign from "./Sign";
import Signcheckout from "./Signcheckout";
import Signup from "./Signup";
import Forgot from "./Forgot";
import Checkout from "./Checkout";
import Product from "./Product";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutRouting />}>
          <Route index element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/signcheckout" element={<Signcheckout />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/products" element={<Product />} />
          <Route
          path="*"
          element={<Sign />}
        />
        </Route>
      </Routes>
    </>
  );
};

export default Layout;
