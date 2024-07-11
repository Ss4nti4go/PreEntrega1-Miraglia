class Componente {
    constructor(tipo, valor) {
        this.tipo = tipo;
        this.valor = valor;
    }
}
//utilizo clases para crear un objeto de cada componente y uno del circuito
class Circuito {
    constructor() {
        //array para contener y modificar los componentes del circuito
        this.componentes = [];
    }

    agregarComponente(componente) {
        this.componentes.push(componente);
    }

    calcularResistenciaTotal() {
        let resistenciaTotal = 0;
        for (let componente of this.componentes) {
            if (componente.tipo === 'resistor') {
                resistenciaTotal += componente.valor;//le sumo a la resistencia total el valor de cada resistencia agregada
            }
        }
        return resistenciaTotal;
    }

    calcularVoltajeTotal() {
        let voltajeTotal = 0;
        for (let componente of this.componentes) {
            if (componente.tipo === 'bateria') {
                voltajeTotal += componente.valor;//le sumo al voltaje total el valor de cada bateria agregada
            }
        }
        return voltajeTotal;
    }

    calcularCorriente() {
        const resistenciaTotal = this.calcularResistenciaTotal();
        const voltajeTotal = this.calcularVoltajeTotal();
        if (resistenciaTotal === 0) {
            return 0;
        }
        return voltajeTotal / resistenciaTotal; //ley de ohm para calcular el amperaje total
    }

    mostrarComponentes() {
        let resultado = "Componentes del Circuito:\n";
        //utilizo un foreach y sintaxis "template literals" para mostrar todos los componentes que contiene el array y mostrar el valor y la unidad de medida de cada componente
        for (let componente of this.componentes) {
            resultado += `${componente.tipo === 'resistor' ? 'Resistor' : 'Batería'}: ${componente.valor} ${componente.tipo === 'resistor' ? 'Ohms' : 'Volts'}\n`;
        }
        return resultado;
    }
}
//creo un objeto de circuito para trabajar.
const circuito = new Circuito();

function menuPrincipal() {
    let opcion;
    do {
        opcion = prompt(
            "Simulador de Circuitos Eléctricos\n" +
            "1. Agregar Resistor\n" +
            "2. Agregar Batería\n" +
            "3. Calcular Resistencia Total\n" +
            "4. Calcular Voltaje Total\n" +
            "5. Calcular Corriente Total\n" +
            "6. Mostrar Componentes\n" +
            "0. Salir\n" +
            "Seleccione una opción:"
        );

        switch (opcion) {
            case '1':
                agregarResistor();
                break;
            case '2':
                agregarBateria();
                break;
            case '3':
                calcularResistenciaTotal();
                break;
            case '4':
                calcularVoltajeTotal();
                break;
            case '5':
                calcularCorriente();
                break;
            case '6':
                mostrarComponentes();
                break;
            case '0':
                alert("Saliendo del simulador...");
                break;
            default:
                alert("Opción inválida. Por favor, intente de nuevo.");
        }
    } while (opcion !== '0');
}
//funciones para agregar componentes al circuito--------------
function agregarResistor() {
    const valor = parseFloat(prompt("Ingrese el valor del resistor en Ohms:"));
    if (!isNaN(valor) &&  valor>0) {
        circuito.agregarComponente(new Componente('resistor', valor));
        alert("Resistor agregado.");
    } else {
        alert("Valor inválido.");
    }
}

function agregarBateria() {
    const valor = parseFloat(prompt("Ingrese el valor de la batería en Volts:"));
    if (!isNaN(valor) && valor>0) {
        circuito.agregarComponente(new Componente('bateria', valor));
        alert("Batería agregada.");
    } else {
        alert("Valor inválido.");
    }
}
//--------------------------------------------
//estas funciones son para llamar a las funciones que hacen su debido calculo, y mostrar el valor que devuelvan en pantalla.----
function calcularResistenciaTotal() {
    const resistenciaTotal = circuito.calcularResistenciaTotal();
    alert(`La resistencia total del circuito es: ${resistenciaTotal} Ohms`);
}

function calcularVoltajeTotal() {
    const voltajeTotal = circuito.calcularVoltajeTotal();
    alert(`El voltaje total del circuito es: ${voltajeTotal} Volts`);
}

function calcularCorriente() {
    const corriente = circuito.calcularCorriente();
    alert(`La corriente total del circuito es: ${corriente} Amperios`);
}

function mostrarComponentes() {
    const componentes = circuito.mostrarComponentes();
    alert(componentes);
}
//--------------------------------------------
menuPrincipal();
