// oefenbestand.js
import {inventory} from './inventory.js';

function showOutcomeInConsole() {
    // Opdracht 1a: Gebruik een array-methode om een array te maken met daarin alle tv-type namen.
    // Log de uitkomst in de console.
    console.log('uitkomst opdracht 1a');
    const tvTypes = inventory.map((inventory) => {
        return inventory.type;
    });
    console.log(tvTypes);

    // Opdracht 1b: Gebruik een array-methode om alle informatie te verzamelen van de tv's die volledig uitverkocht zijn.
    // Log de uitkomst in de console.
    console.log('uitkomst opdracht 1b');
    const soldOut = inventory.filter((inventory) => {
        return inventory.originalStock === inventory.sold;
    });
    console.log(soldOut);

    // Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen.
    console.log('Opdracht 1c');
    const oneType = inventory.find((inventory) => {
        return inventory.type === 'NH3216SMART';
    });
    console.log(oneType);

    // Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt
    // of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger).
    // Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.
    console.log('Opdracht 1d');
    const sportWatch = inventory.map((inventory) => {
        if (inventory.refreshRate >= 100) {
            return `name: ${inventory.brand} ${inventory.name}, suitable: true`;
        } else {
            return `name: ${inventory.brand} ${inventory.name}, suitable: false`;
        }

    });
    console.log(sportWatch);

    // Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn
    // in schermgroottes van 65 inch en groter.
    console.log('Opdracht 1e');
    // filteren op 65 inch
    // en alle informatie verzamelen van deze tv's

    const bigTV = inventory.filter((inventory) => {
        for (let i = 0; i < inventory.availableSizes.length; i++) {
           if (inventory.availableSizes[i] >= 65)
               return inventory;
           }
    });
    console.log(bigTV);

    console.log('Opdracht 1f')
    // Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight
    // beschikken. Log de uitkomst in de console.
    const hasAmbilightFilter = inventory.filter((tv) => {
       const hasAmbilight = tv.options.some(option => option.name === 'ambiLight' && option.applicable === true);
       return hasAmbilight
    });
console.log(hasAmbilightFilter);
}



export default showOutcomeInConsole;




