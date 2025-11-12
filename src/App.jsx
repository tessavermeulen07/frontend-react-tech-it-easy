import './App.css';
import soldTv from "./helpers/soldTv.js";
import boughtTv from "./helpers/boughtTv.js";
import toBeSold from "./helpers/toBeSold.js";
import bestSoldTv from "./helpers/bestSoldTv.js";
import bestSoldTvPrice from "./helpers/bestSoldTvPrice.js";
import bestSoldTvSize from "./helpers/bestSoldTvSize.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import samsung from "./assets/samsung.jpeg";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function App() {

    function handleClick(message) {
        console.log(message);
    }

    return (

        <>
            <h1>Tech it easy dashboard</h1>

            <h2>Verkoopoverzicht</h2>
            <article className="sold">
                <h3>Aantal verkochte producten</h3>
                <p>{soldTv(inventory)}</p>
            </article>
            <article className="bought">
                <h3>Aantal ingekochte producten</h3>
                <p>{boughtTv(inventory)}</p>
            </article>
            <article className="to-be-sold">
                <h3>Aantal te verkopen producten</h3>
                <p>{toBeSold(inventory)}</p>
            </article>

            <h2>Best verkochte tv</h2>
            <img src={samsung} alt="Samsung TV bestverkocht" />
            <h3>{bestSoldTv(bestSellingTv)}</h3>
            <p>{bestSoldTvPrice()}</p>
            <p>{bestSoldTvSize(bestSellingTv)}</p>
            <p><img src={check} alt="check icon" className="icon" /> wifi
                <img src={check} alt="check icon" className="icon" />  speech
                <img src={check} alt="check icon" className="icon" /> hdr
                <img src={check} alt="check icon" className="icon" /> bluetooth
                <img src={minus} alt="check icon" className="icon" /> ambilight</p>

            <button type="button" onClick={() => handleClick("Meest verkocht eerst")}>Meest verkocht eerst</button>
            <button type="button" onClick={() => handleClick("Goedkoopste eerst")}>Goedkoopste eerst</button>
            <button type="button" onClick={() => handleClick("Meest geschikt voor sport eerst")}>Meest geschikt voor sport eerst</button>
        </>
    )
}

export default App
