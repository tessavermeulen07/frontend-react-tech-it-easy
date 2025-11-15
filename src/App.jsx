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
            <div className="main-container">
                <div className="header-container">
                    <h1>Tech it easy dashboard</h1>
                </div>
                <h2>Verkoopoverzicht</h2>
                <div className="tv-container">
                    <article className="sold article-container">
                        <h3>Aantal verkochte producten</h3>
                        <p className="numbers">{soldTv(inventory)}</p>
                    </article>
                    <article className="bought article-container">
                        <h3>Aantal ingekochte producten</h3>
                        <p className="numbers">{boughtTv(inventory)}</p>
                    </article>
                    <article className="to-be-sold article-container">
                        <h3>Aantal te verkopen producten</h3>
                        <p className="numbers">{toBeSold(inventory)}</p>
                    </article>
                </div>

                <h2>Best verkochte tv</h2>
                <div className="most-sold">
                    <div className="image-most-sold">
                        <img src={samsung} alt="Samsung TV bestverkocht"/>
                    </div>
                    <div className="most-sold-info">
                        <h3>{bestSoldTv(bestSellingTv)}</h3>
                        <p className="numbers">{bestSoldTvPrice(bestSellingTv)}</p>
                        <p>{bestSoldTvSize(bestSellingTv)}</p>
                        <div className="extras-best-sold-tv">
                            <img src={check} alt="check icon" className="icon"/> wifi
                            <img src={check} alt="check icon" className="icon"/> speech
                            <img src={check} alt="check icon" className="icon"/> hdr
                            <img src={check} alt="check icon" className="icon"/> bluetooth
                            <img src={minus} alt="check icon" className="icon"/> ambilight
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button type="button" onClick={() => handleClick("Meest verkocht eerst")}>Meest verkocht eerst
                    </button>
                    <button type="button" onClick={() => handleClick("Goedkoopste eerst")}>Goedkoopste eerst</button>
                    <button type="button" onClick={() => handleClick("Meest geschikt voor sport eerst")}>
                        Meest geschikt voor sport eerst </button>
                </div>
            </div>
        </>
    )
}

export default App
