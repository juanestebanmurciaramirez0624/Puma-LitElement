import { css } from "lit-element";

export default css `
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Myriad Pro", Myriad, "Liberation Sans", "Nimbus Sans L", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: url(../img/PumasDCLogoBackgroud.png);
  background-repeat: no-repeat;
  background-position: 82% 70%;
  background-size: 25% 55%;
}

.backgroud {
  background: url(../img/fondLogin.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.login {
  width: 650px;
  border-radius: 20px;
  box-shadow: -5px 25px 45px -1px black;
}

.form-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.margin-input {
  margin-top: -25px;
}

.header-card {
  width: 100%;
  color: white;
  background-color: #ff0000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px 0 20px 0;
}

.title-login {
  text-align: center;
  font-size: 3em;
}

.content-card {
  padding: 50px;
  background-color: white;
  border-bottom-left-radius : 20px;
  border-bottom-right-radius : 20px;
}

.input-login {
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: #ff0000 solid 2px;
  font-size: 25px;
  margin: 25px;
  width: 100%;
  margin-top: 30px;
  outline: none; /*outline: none funciona para evitar que el input se resalte al presionarlo*/
  padding-left: 4px;
}

::placeholder {
  font-weight: bold;
  color: silver;
}

.button-login {
  font-size: 25px;
  font-weight: bold;
  background-color: #ff0000;
  border: none;
  border-radius: 10px;
  width: 55%;
  padding: 15px;
  margin-top: 2em;
  margin-bottom: 1em;
}

.button-login:hover {
  cursor: pointer;
}

.a-button {
  color: white;
  text-decoration: none;
}

.forgot-pass {
  color: black;
  margin: 1em 0 2em 0;
  text-decoration: none;
  border-bottom: 2px solid silver;
}

.center {
  display: flex;
  justify-content: center;
}

::-webkit-scrollbar { /*Ocultar scrollbar*/
  display: none;
}
`