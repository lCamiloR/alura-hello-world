import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './componentes/Menu';
import Footer from "componentes/Footer";
import MainTemplate from 'componentes/MainTemplate';
import Post from 'pages/Post';
import NotFound from 'pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<MainTemplate/>}>
            <Route index element={<HomePage />} />
            <Route path="sobremim" element={<AboutMe />} />
          </Route>
          <Route path="posts/:id/*" element={<Post />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
