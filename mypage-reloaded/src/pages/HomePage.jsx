import React, { useState, useEffect } from "react";
import Career from "../pages/Career";
import "../css/HomePage.css";

const HomePage = () => {
  let [home, setHome] = useState(true);
  let [career, setCareer] = useState(false);
  let [blog, setBlog] = useState(false);

  let isHome = () => {
    return home ? "" : "un";
  };

  let isCareer = () => {
    return career ? "" : "un";
  };
  let isBlog = () => {
    return blog ? "" : "un";
  };

  let togglePage = page => {
    switch (page) {
      case "home":
        setHome(true);
        setBlog(false);
        setCareer(false);
        break;
      case "blog":
        setHome(false);
        setBlog(true);
        setCareer(false);
        break;
      case "career":
        setHome(false);
        setBlog(false);
        setCareer(true);
        break;
      default:
        break;
    }
  };

  let renderPage = () => {
    return <Career />;
  };

  return (
    <>
      <div className="container">
        <div className="title-div">
          <h1> Welcome to my page! </h1>
          <h4> Gregorio Ospina, Software Engineer</h4>
        </div>
      </div>
      <div className="menu-side-bar">
        <div className="row">
          <div className="col-3">
            <div className="row">
              <div
                className={`card menu-card card-${isHome()}pressed`}
                onClick={() => togglePage("home")}
              >
                <div className="card-body">
                  <h3>About me</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className={`card menu-card card-${isCareer()}pressed`}
                onClick={() => togglePage("career")}
              >
                <div className="card-body">
                  <h3>Career</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className={`card menu-card card-${isBlog()}pressed`}
                onClick={() => togglePage("blog")}
              >
                <div className="card-body">
                  <h3>Blog</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-render container">{renderPage()}</div>
    </>
  );
};

export default HomePage;
