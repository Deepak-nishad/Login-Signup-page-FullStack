import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <ToastContainer autoClose={3000} />
      <main className="min-vh-80">{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "EventTask 👨🏻‍💻",
  description: "EventTask 👨🏻‍💻",
  keywords: "MERN, MongoDB, ExpressJS, ReactJS, NodeJS 👨🏻‍💻",
  author: "Deepak 👨🏻‍💻",
};

export default Layout;
