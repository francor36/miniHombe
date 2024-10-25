export class bank{
    constructor(){
        this.cuentas = [];
    }
    agregarUsuario(usuario, contraseña) {
        const nuevoUsuario = { usuario, contraseña };
        this.cuentas.push(nuevoUsuario);
    }
    getUsuarios() {
        return this.cuentas; // Método para obtener el arreglo de usuarios
    }
}