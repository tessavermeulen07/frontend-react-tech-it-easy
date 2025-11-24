// Opdracht 1c: Hoeveel tv's heeft Tech It Easy in totaal ingekocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.
// Opdracht 1d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

import {bestSellingTv, inventory} from "../constants/inventory.js";

function boughtTv(productArray) {
    let sumBought = 0;

    for (let i = 0; i < productArray.length; i++) {
        sumBought += productArray[i].originalStock;
    }
     sumBought += bestSellingTv.originalStock;

    return sumBought;
}

export default boughtTv;