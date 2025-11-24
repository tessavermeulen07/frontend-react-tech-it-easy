// Opdracht 1a: Hoeveel tv's zijn er al verkocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.
// Opdracht 1b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// Tel bestSellingTv.sold en inventory.length.sold bij elkaar op

import {bestSellingTv} from "../constants/inventory.js";

function soldTv(productArray) {
    let sumSold = 0;

    for (let i = 0; i < productArray.length; i++) {
        sumSold += productArray[i].sold;
    }

        sumSold += bestSellingTv.sold;

        return sumSold;
    }

 export default soldTv;