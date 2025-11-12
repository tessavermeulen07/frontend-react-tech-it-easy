// Opdracht 1e: Schrijf een helperfunctie die berekent hoeveel tv's er nog verkocht moeten worden. Geef de uitkomst in het rood weer op de pagina. Tip: je kunt een helperfunctie gebruiken in een andere helperfunctie.
// Dus ik moet boughtTv - soldTv doen, want dan weet ik hoeveel er nog verkocht moeten worden.

import boughtTv from "./boughtTv.js";
import soldTv from "./soldTv.js";

function toBeSold(a, b) {
    return boughtTv() - soldTv();
}

export default toBeSold;