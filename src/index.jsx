import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header/Header";
import  Sidemenu  from "./Components/Sidemenu/Sidemenu";
import Viewcampaign from "./Components/Viewcampaign/Viewcampaign";


const App = () => {
  return (
    <div>
      <Header />
     
      <Viewcampaign/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
