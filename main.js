import { Users } from "./usuario.js";
import { bank } from "./Bank.js";

const usuarios = new bank();

const btnLogin = document.getElementById("logueo");
btnLogin.addEventListener("click", login);

const user = "frankita";
const pass = "1234";

function login() {
    const form = document.querySelector(".formularios")
    form.classList.remove("oculto");
    form.children[0].classList.remove("oculto");
}

const iniciar = document.getElementById("iniciar");
iniciar.addEventListener("click", validar);

function validar() {
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
    
    const usuariosList = usuarios.getUsuarios();
    const encontrado = usuariosList.find(u => u.usuario === usuario && u.contraseña === contraseña);
    
    if (encontrado) {

        alert("Bienvenido")
        const cab = document.querySelector(".cabecera")
        cab.classList.remove("oculto");
        cab.children[0].classList.remove("oculto");

        const form = document.querySelector(".formularios")
        form.classList.add("oculto");
        form.children[0].classList.add("oculto");

    } else {
        alert("usuario o contraseña incorrectos")
    }

}

const btnRegister = document.getElementById("registrar");
btnRegister.addEventListener("click", btnRegistrando);

function btnRegistrando() {
    //funcion del boton la cual le quita lo oculto
    const form = document.querySelector(".registrarse")
    form.classList.remove("oculto");
    form.children[0].classList.remove("oculto");

    //ocultamos el formulario de incio
    const oc = document.querySelector(".formularios")
    oc.classList.add("oculto");
    oc.children[0].classList.add("oculto");
}
const btnRegistrar = document.getElementById("register");
btnRegistrar.addEventListener("click", regi);

function regi() {
    const usuario = document.getElementById("usuarios").value.trim(); // Obtener valor y eliminar espacios
    const contraseña = document.getElementById("contraseñas").value.trim(); // Obtener valor y eliminar espacios
    if (usuario === "" || contraseña === "") {
        alert("Por favor, complete todos los campos.");
        return; // Salir de la función si hay campos vacíos
    }
    const nuevoUsuario = new Users(usuario, contraseña)
    alert("Usuario registrado con éxito");

    const form = document.querySelector(".registrarse")
    form.classList.add("oculto");
    form.children[0].classList.add("oculto");
    usuarios.agregarUsuario(usuario, contraseña);
}