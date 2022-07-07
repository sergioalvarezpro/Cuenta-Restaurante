let platoPrincipal = prompt('¿Qué desea cenar: carne o pescado?');
platoPrincipal = platoPrincipal.toLowerCase();
let platoElegido = (platoPrincipal === 'carne') ? 23 : 15;

let postre = prompt('¿Desea tomar postre casero: Si o No?');
postre = postre.toLowerCase();
let postrElegido = (postre === 'si') ? 3 : 0;

const PORCENTAJE_PROPINA = 6;

function importeCena(pplatoElegido, ppostrElegido) {
    let importeCena = pplatoElegido + ppostrElegido;
    return importeCena;
}

function importePropina(pcena, pPORCENTAJE_PROPINA) {
    let importePropina = (pcena * pPORCENTAJE_PROPINA) / 100;
    return importePropina;
}

function importeTotal(pcena, ppropina) {
    let importeTotal = pcena + ppropina;
    return importeTotal;
}

function imprimirFactura(pplatoPrincipal, ppostre, ppropina, ptotal) {

    if (pplatoPrincipal === "" || ppostre === "") {
        document.write('Introduce los datos solicitados, ¡ No me vale que lo dejes en blanco !');
    } else {
        document.write(`<p>Cena de ${platoPrincipal}: ${platoElegido}€</p><br> 
                        <p>Postre "${postre}": ${postrElegido}€</p><br>
                        <p>Propina del ${PORCENTAJE_PROPINA}%: ${ppropina}€</p><br>
                        <p>Importe total: ${ptotal}€</p><br>`);
    }
}

let cena = importeCena(platoElegido, postrElegido);
let propina = importePropina(cena, PORCENTAJE_PROPINA);
let total = importeTotal(cena, propina);
imprimirFactura(platoPrincipal, postre, propina, total);