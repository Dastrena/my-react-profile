import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import MyCity from "./pages/MyCity";
import MyFuture from "./pages/MyFuture";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${(props) => props.theme.backgroundGradient};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease-in-out;
    font-family: 'Segoe UI', sans-serif;
  }

  * {
    box-sizing: border-box;
  }


`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

const themes = {
  light: {
    backgroundGradient: "linear-gradient(180deg,rgb(177, 186, 210),rgb(165, 164, 185))",
    text: " #333",
    buttonBg: " #0077ff",
    buttonText: " #fff",
    buttonHover: " #0057cc",
    sectionBg: " #ffffff",
    skillBg: " #dedede",
    headerContainerBg: " #dae3f2",
    headerBg: "linear-gradient(90deg, #283045, #1c2331)",
    headerText: "rgb(248, 248, 248)",
    footerBg: " #eee",
    accent: " #0077ff",
    tagText: "#333"
  },
  dark: {
    backgroundGradient: "linear-gradient(180deg, #1a1a1a, #292929)",
    text: " #333",
    buttonBg: " #ff9800",
    buttonText: " #222",
    buttonHover: " #ff7700",
    sectionBg: "rgb(126, 126, 126)",
    skillBg: " #555",
    headerContainerBg: " #292929",
    headerBg: "linear-gradient(90deg, #202020, #333)",
    headerText: " #f5f5f5",
    footerBg: " #111111",
    accent: " #ff9800",
    tagText: "#fff"
  },
};

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Content>
            <Routes>
              <Route path="/my-react-profile/" element={<AboutMe />} />
              <Route path="/my-react-profile/my-city" element={<MyCity />} />
              <Route path="/my-react-profile/my-future" element={<MyFuture />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
