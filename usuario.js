export class Users {
    #usuario; #contraseña; #nCuenta; #nombre; #apellido; #saldo;
    constructor(usuario, contraseña, nCuenta, nombre, apellido, saldo) {
        this.#usuario = usuario;
        this.#contraseña = contraseña;
        this.#nCuenta = nCuenta;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#saldo = saldo;
    }
    get usuario() {
        return this.#usuario;
    }

    get nombre() {
        return this.#nombre;
    }

    get apellido() {
        return this.#apellido;
    }

    get saldo() {
        return this.#saldo;
    }

    // Métodos set
    set usuario(nuevoUsuario) {
        this.#usuario = nuevoUsuario; // Asigna un nuevo valor al usuario
    }

    set contraseña(nuevaContraseña) {
        this.#contraseña = nuevaContraseña; // Asigna un nuevo valor a la contraseña
    }

    set nCuenta(nuevaCuenta) {
        this.#nCuenta = nuevaCuenta; // Asigna un nuevo valor al número de cuenta
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre; // Asigna un nuevo valor al nombre
    }

    set apellido(nuevoApellido) {
        this.#apellido = nuevoApellido; // Asigna un nuevo valor al apellido
    }
    set saldo(nuevoSaldo) {
        if (nuevoSaldo >= 0) {
            this.#saldo = nuevoSaldo;
        } else {
            console.log("El saldo no puede ser negativo.");
        }
    }

}