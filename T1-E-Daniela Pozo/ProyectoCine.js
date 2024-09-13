const prompt = require("prompt-sync")();
//hare una clase q se llame central video y en ella almacenare el control de las peliculas, clientes y rentas por medio de arreglos.
class VideoCentral {
    constructor() {
        this._peliculas = [];
        this._clientes = [];
        this._rentas = [];
    }
    //por partes agregare los metodos para agregar clientes,mostrar y eliminar asi con todas las variables que pide el problema.
    agregarCliente() {
        let tam = parseInt(prompt("Cantidad de clientes a dar de alta: "));
        for (let i = 0; i < tam; i++) {
            let numMembresia = parseInt(prompt("Ingrese el número de membresía: "));
            let nombre = prompt("Ingrese el nombre del cliente: ");
            let direccion = prompt("Ingrese la dirección del cliente: ");
            let telefono = prompt("Ingrese el teléfono del cliente: ");
            let estadoCliente = prompt("Ingrese el estado del cliente (deudor/libre): ");

            let cliente = {
                numMembresia: numMembresia,
                nombre: nombre,
                direccion: direccion,
                telefono: telefono,
                estadoCliente: estadoCliente
            }
            this._clientes.push(cliente);
        }
    }
    mostrarClientes() {
        this._clientes.length > 0 ? this._clientes.forEach((cliente, index) => {
            console.log(`Cliente ${index + 1}:`, cliente);
        }) : console.log("No hay clientes para mostrar");
    }
    eliminarCliente() {
        if (this._clientes.length > 0) {
            let numMembresia = parseInt(prompt("Ingrese el número de membresía del cliente a eliminar: "));
            this._clientes = this._clientes.filter(cliente => cliente.numMembresia !== numMembresia);
        } else {
            console.log("No hay clientes para eliminar");
        }
    }

    agregarPelicula(pelicula) {
        let tam = parseInt(prompt("Cantidad de películas a dar de alta: "));
        for (let i = 0; i < tam; i++) {
            let numPelicula = parseInt(prompt("Ingrese el número de película: "));
            let titulo = prompt("Ingrese el título de la película: ");
            let pelicula = {
                numPelicula: numPelicula,
                titulo: titulo
            }
            this.peliculas.push(pelicula);
        }
    }
    mostrarPeliculas() {
        this._peliculas.length > 0 ? this._peliculas.forEach((pelicula, index) => {
            console.log(`Pelicula${index + 1}:`, pelicula)
        }) : console.log("No hay Peliculas")
    }
    eliminarPelicula() {
        if (this._peliculas.length > 0) {
            let numPelicula = parseInt(prompt("Ingrese el número de película a eliminar: "));
            this._peliculas = this._peliculas.filter(pelicula => pelicula.numPelicula !== numPelicula);
        } else {
            console.log("No hay Peliculas")
        }
    }
    rentarPelicula() {
        let numMembresia = parseInt(prompt("Ingrese el numero  de membresia: "));
        let cliente = this._clientes.find(cliente => cliente.numMembresia !== numMembresia);
        if (!cliente || cliente.estadoCliente === 'deudor') {
            console.log("Cliente no válido o con multa pendiente.");
            return;
        }


let numPelicula = parseInt(prompt("Ingrese el numero de pelicula a rentar"))
let pelicula = this._peliculas.find(pelicula => pelicula.numPelicula===numPelicula&&pelicula.estado==="disponible")

if (!pelicula) {
    console.log("Película no disponible o no existe.");
    return;
}

pelicula.estado = 'rentada';
let fechaRenta = new Date();
let fechaDevolucion = new Date(fechaRenta);
fechaDevolucion.setDate(fechaDevolucion.getDate() + 3);

let nomtoRenta = pelicula.tipo==="estreno" ?50.00 : 35.00

let renta= {
    numMembresia: numMembresia,
    numPelicula: numPelicula,
    fechaRenta: fechaRenta,
    fechaDevolucion: fechaDevolucion,
    montoRenta: montoRenta
}

this._rentas.push(renta)
}

mostrarRentas(){
    this._rentas.length > 0 ? this._rentas.forEach((renta, index) => {
        console.log(`Renta ${index + 1}:`, renta);
    }) : console.log("No hay rentas para mostrar");
}

menuPrincipal(){
    let opcion;
        do {
            console.log("\n1. Control de Clientes");
            console.log("2. Control de Películas");
            console.log("3. Control de Rentas");
            console.log("4. Salir");
            opcion = parseInt(prompt("Seleccione una opción: "));

            switch (opcion) {
                case 1:
                    this.menuClientes();
                    break;
                case 2:
                    this.menuPeliculas();
                    break;
                case 3:
                    this.menuRentas();
                    break;
                case 4:
                    console.log("Saliendo...");
                    break;
                default:
                    console.log("Opción inválida");
            }
        } while (opcion !== 4);
}
menuClientes() {
    let opcion;
    do {
        console.log("\n1. Agregar Cliente");
        console.log("2. Mostrar Clientes");
        console.log("3. Eliminar Cliente");
        console.log("4. Salir");
        opcion = parseInt(prompt("Seleccione una opción: "));

        switch (opcion) {
            case 1:
                this.agregarCliente();
                break;
            case 2:
                this.mostrarClientes();
                break;
            case 3:
                this.eliminarCliente();
                break;
            case 4:
                console.log("Volviendo al menú principal...");
                break;
            default:
                console.log("Opción inválida");
        }
    } while (opcion !== 4);
}
menuPeliculas() {
    let opcion;
    do {
        console.log("\n1. Agregar Película");
        console.log("2. Mostrar Películas");
        console.log("3. Eliminar Película");
        console.log("4. Salir");
        opcion = parseInt(prompt("Seleccione una opción: "));

        switch (opcion) {
            case 1:
                this.agregarPelicula();
                break;
            case 2:
                this.mostrarPeliculas();
                break;
            case 3:
                this.eliminarPelicula();
                break;
            case 4:
                console.log("Volviendo al menú principal...");
                break;
            default:
                console.log("Opción inválida");
        }
    } while (opcion !== 4);
}

menuRentas() {
    let opcion;
    do {
        console.log("\n1. Rentar Película");
        console.log("2. Mostrar Rentas");
        console.log("3. Salir");
        opcion = parseInt(prompt("Seleccione una opción: "));

        switch (opcion) {
            case 1:
                this.rentarPelicula();
                break;
            case 2:
                this.mostrarRentas();
                break;
            case 3:
                console.log("Volviendo al menú principal...");
                break;
            default:
                console.log("Opción inválida");
        }
    } while (opcion !== 3);
}
}

let videoCentral = new VideoCentral();
videoCentral.menuPrincipal();

//Utilize una IA para buscar la sintaxis para los menu usando switch porque es algo que no me salia.
//trate de no poner nombre a las variables tan comunes para que no se repitiera con mis compañeros.
//Utilice un objeto para almacenar los datos de las películas y las rentas.
// utilice . push y .filder que me sirvio para reducir el número de filas de la tabla con la que está trabajando y emplear solo datos
// que sean necesarios para la tabla.
//tambien hice algunas cosas con .find para que pudiera Buscar una cadena de texto  dentro de otra 
// y me podiera devolver el número de la posición inicialdel texto que quiero que busque mi codigo, desde el primer carácter.
// formatee el problema para que tuviera una forma mas estrcturada y tarde aprox. 4 hrs para buscar todas las posibles soluciones y agregar el menu.
//busque varios ejemplos de codigo y de todos agregue ideas y trate de seguir la sintaxis del codigo visto en clase.