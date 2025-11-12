// Opdracht 2c: Maak een helperfunctie die een string genereert voor alle beschikbare schermgroottes van één tv.
// De functie geeft dit terug in het format:
// [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes
// heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Rond altijd af op
// hele centimeters. Test goed of dit werkt met verschillende tv's!



import inchesToCm from "./inchToCm.js";

function bestSoldTvSize(product) {
    return `${product.availableSizes[0]} inch (${inchesToCm(product.availableSizes[0])} cm) |
    ${product.availableSizes[1]} inch (${inchesToCm(product.availableSizes[1])} cm) |
    ${product.availableSizes[2]} inch (${inchesToCm(product.availableSizes[2])} cm) |
    ${product.availableSizes[3]} inch (${inchesToCm(product.availableSizes[3])} cm)`;
}

export default bestSoldTvSize;

