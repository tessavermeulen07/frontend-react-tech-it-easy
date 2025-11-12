// Opdracht 1a: Hoeveel tv's zijn er al verkocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.
// Tel bestSellingTv.sold en inventory.length.sold bij elkaar op

import {bestSellingTv, inventory} from "../constants/inventory.js";

function soldTV() {
    let sumSold = 0;

    for (let i = 0; i < inventory.length; i++) {
        sumSold += inventory[i].sold + bestSellingTv.sold;
    }

        return sumSold;
    }

console.log(soldTV());

