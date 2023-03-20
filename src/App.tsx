import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./component/Header/Header";
import {Nav} from "./component/Nav/Nav";
import {ContainerFliud} from "./component/ContainerFliud";
import {ResumeSection} from "./component/ResumeSection/ResumeSEction";
import {SectionTwo} from "./component/SectionTwo/SectionTwo";
import {MyPortfolio} from "./component/Portfolio/Portfolio";
import {HireMe} from "./component/Hire/HireMe";
import {Blog6} from "./component/Blog6/Blog6";
import {Footer} from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Nav />
        <ContainerFliud />
      <ResumeSection />
        <SectionTwo />
        <MyPortfolio />
        <HireMe/>
        <Blog6 />
      <Footer />
    </div>
  );
}

export default App;
