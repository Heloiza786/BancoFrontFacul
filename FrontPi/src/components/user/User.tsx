import React from "react";
import Navibar from "../navibar/Navibar";
import axios from "axios";
import "./User.css";
import { Link } from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function User() {

  async function userDataPost() {
    

    var name = (document.getElementById("sName") as HTMLInputElement) || null;
    var lastName = (document.getElementById("sSobrenome") as HTMLInputElement) || null;
    var email = (document.getElementById("sEmail") as HTMLInputElement) || null;
    var cpf = (document.getElementById("sCpf") as HTMLInputElement) || null;
    


    const userJson = {
      name: name.value.toString(),
      last_name: lastName.value.toString(),
      email: email.value.toString(),
      cpf: cpf.value.toString(),
    };
  
    await axios
      .post("http://localhost:9000/api/users", userJson, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        maxRedirects: 0,
      })
      .then((response) => {
        console.log(response);
        alert("Usuário cadastrado com sucesso")
      })
      .catch((error) => {
        console.log(error);
        alert("Não foi possível cadastrar o usuário, por favor tente novamente mais tarde!!!")
      });
  }

 




  return (
    <>
     <Navibar />
      <div className="ContainerInput">
        <a > <p className="fs-1">Cadastro de Usuário</p></a>
        
        <div className="Children">
          <input
            className="MyInput"
            type="text"
            placeholder="Nome"
            rel="noopener noreferrer"
            id="sName"
          />
          <input
            className="MyInput"
            type="text"
            placeholder="Sobrenome"
            rel="noopener noreferrer"
            id="sSobrenome"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Email"
            rel="noopener noreferrer"
            id="sEmail"
          />
          <input
            className="MyInput"
            type="text"
            placeholder="Cpf"
            rel="noopener noreferrer"
            id="sCpf"
          />
        </div>

         <a onClick={userDataPost}href="a" className="btn btn-primary">Cadastrar Usuario</a> 
          <p></p>
          <p></p>
        <Link to={"/listarUsuario"} > <a href="a" className="btn btn-primary">Listar usuario </a>  </Link> 
      
        {/* <button id="cadastrarUser" className="MyButton" onClick={userDataPost}> Cadastrar </button>
        <Link  to={"/listarUsuario"}><button id="listarUsers" className="ListarBtn" >Listar usuários</button></Link> */}
       

      </div>
    </>
  );
}

export default User;
