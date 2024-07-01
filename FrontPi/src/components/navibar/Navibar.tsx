import React, { useEffect } from "react";
// import Accordion from 'react-bootstrap/Accordion';
import "./Navibar.css";
import { Link } from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Navibar() {
  useEffect(() => {
    var hostName = document.location.pathname.split("/")[2];

    switch (hostName) {
      case "user":
        var resultado =
          (document.getElementById("user") as HTMLElement) || null;
        resultado.classList.add("Link");
        break;


      default:
        break;
    }
  }, []);

  return (
    <div>
      <div className="Nav">
        <div className="Button">
        </div>
        <div className="Button">
          <Link to="/user" id="user" rel="noopener noreferrer">      
          </Link>
        </div>
  
      </div>
   
    </div>
  );
}

export default Navibar;
