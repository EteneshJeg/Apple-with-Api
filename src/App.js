import React from 'react'
// import "./css/bootstrap.css";
import "./css/styles.css";


import Header from './Components/Header/Header'
// import Head2 from './Components/Header/Head2';
// import NormalVariables from './Components/Header/NormalVariables';
import FirstSec from './Components/FirstSec/FirstSec';
import Secondsec from './Components/Secondsec/Secondsec';
import ThirdSec from './Components/ThirdSec/ThirdSec';
import FourthSec from './Components/FourthSec/FourthSec';
import Fifth from './Components/FifthSec/Fifth';
import SixthSec from './Components/SixthSec/SixthSec';
import Footer from './Components/Footer/Footer'
import Youtube from './Components/YouTubeFunctional/Youtube';
// import FromNote from './Components/Header/FromNote';
// import Hooks from "./Components/Header/Hooks/Hooks"
function App() {
  return <div>
      <Header />
     {/* <Head2 />
     <NormalVariables batch = "June 2023"/>
     <FromNote />
     <Hooks /> */}
      <FirstSec />
      <Secondsec />
      <ThirdSec />
      <FourthSec />
      <Fifth />
      <SixthSec />
      <Youtube />
      <Footer />
      
    </div>;
}

export default App
