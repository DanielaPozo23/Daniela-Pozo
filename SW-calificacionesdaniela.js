
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Alumno extends Persona {
    constructor(nombre, NumControl,) {
        super(nombre)
        this.NumControl = NumControl;
        this.calificaciones = []
    }
    agcalificacion(calificacion) {
        this.calificaciones.push(calificacion)
    }

    CalPromedio() {
        const materias = {}
        //para agrupar un foreach
        this.calificaciones.forEach(cal => {
            if (!materias[cal.materia.nombre]) {
                materias[cal.materia.nombre] = [];
            }
            materias[cal.materia.nombre].push(cal.calificacion);
        });
        for (const materia in materias) {
            const suma = materias[materia].reduce((acc, cal) => acc + cal, 0);
            const promedio = (suma / materias[materia].length).toFixed(2);
            console.log(`Su promedio en es ${materia} : ${promedio}`);
        }
    }
    informacion() {
        console.log(`Alumno: ${this.nombre} (No. Control: ${this.NumControl})`);
        this.calificaciones.forEach(cal => {
            console.log(`${cal.materia.nombre} - ${cal.docente.nombre}: ${cal.calificacion}`);
        });
        this.CalPromedio();
    }
}
class Docente extends Persona {
    constructor(nombre, materia) {
        super(nombre); {
            this.materia = materia;
        }
    }
}
class Materia {
    constructor(nombre, creditos) {
        this.nombre = nombre;
        this.creditos = creditos;
    }
}
class Calificacion {
    constructor(materia, docente,calificacion) {
        this.materia = materia;
        this.docente = docente;
        this.calificacion = calificacion;


    }
}


const Matematicas = new Materia("Matemáticas");
const Fisica = new Materia("Física");
const Programacion = new Materia("Programación");


const Dany = new Docente("Dany");
const Luis = new Docente("Luis");
const David = new Docente("David");


const alumno1 = new Alumno("Daniela", "23E2111");
const alumno2 = new Alumno("Mario", "23E2000");

alumno1.agcalificacion(new Calificacion(Matematicas, David, 98))
alumno1.agcalificacion(new Calificacion(Matematicas, David, 90))
alumno1.agcalificacion(new Calificacion(Matematicas, David, 85))
alumno1.agcalificacion(new Calificacion(Fisica, Luis, 95))
alumno1.agcalificacion(new Calificacion(Fisica, Luis, 92))
alumno1.agcalificacion(new Calificacion(Fisica, Luis, 92))
alumno1.agcalificacion(new Calificacion(Programacion, Dany, 100))
alumno1.agcalificacion(new Calificacion(Programacion, Dany, 88))
alumno1.agcalificacion(new Calificacion(Programacion, Dany, 92))

alumno2.agcalificacion(new Calificacion(Matematicas,David, 90))
alumno2.agcalificacion(new Calificacion(Matematicas, David, 85))
alumno2.agcalificacion(new Calificacion(Matematicas, David, 95))
alumno2.agcalificacion(new Calificacion(Fisica, Luis, 92))
alumno2.agcalificacion(new Calificacion(Fisica, Luis, 90))
alumno2.agcalificacion(new Calificacion(Fisica, Luis, 90))
alumno2.agcalificacion(new Calificacion(Programacion, Dany, 80))
alumno2.agcalificacion(new Calificacion(Programacion, Dany, 88))
alumno2.agcalificacion(new Calificacion(Programacion, Dany, 92))

alumno1.informacion()
alumno2.informacion()
