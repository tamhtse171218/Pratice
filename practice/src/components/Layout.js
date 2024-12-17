import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "../page/LoginPage";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>
        <div>{children}</div>

      </main>
      <Footer />
    </div>
  );
};

export default Layout;
