import React from "react";
import "./index.css";
import Carrosselsis from "./Carrosselsis";
import Carrosselox from "./Carrosselox";
import Carrosselresmas from "./Carrosselresmas";

function Carrossels() {
  return (
    <section className="container">
      <div className="div_fileira">
        <Carrosselsis />
        <Carrosselox />
      </div>
      <Carrosselresmas />
    </section>
  );
}

export default Carrossels;
