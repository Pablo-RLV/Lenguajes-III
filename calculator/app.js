let continuePlaying = true;

while (continuePlaying) {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: es necesario ingresar sólo números.");
    } else {
        let operation = prompt("Ingrese la operación a realizar: +, -, *, /");
        if (operation === "+") {
            alert("Resultado: " + (num1 + num2));
        } else if (operation === "-") {
            alert("Resultado: " + (num1 - num2));
        } else if (operation === "*") {
            alert("Resultado: " + (num1 * num2));
        } else if (operation === "/") {
            if (num2 !== 0) {
                alert("Resultado: " + (num1 / num2));
            } else {
                alert("Error: No se puede dividir por cero.");
            }
        } else {
            alert("Operación no válida.");
        }
    }

    let response = prompt("¿Desea realizar otra operación? (sí/no)").toLowerCase();
    if (response !== "sí") {
        continuePlaying = false;
        alert("Gracias por usar la calculadora.");
    }
}
