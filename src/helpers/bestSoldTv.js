// Opdracht 2a: Maak een helperfunctie die een string genereert voor de naam van één tv en deze teruggeeft in het format
// [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.



function bestSoldTv(product) {
    return `${product.brand} ${product.type} - ${product.name}`;
    // brand
    // type
    // name
}


export default bestSoldTv;
