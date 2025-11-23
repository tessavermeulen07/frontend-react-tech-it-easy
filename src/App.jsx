import './App.css';
import soldTv from "./helpers/soldTv.js";
import boughtTv from "./helpers/boughtTv.js";
import toBeSold from "./helpers/toBeSold.js";
import bestSoldTv from "./helpers/bestSoldTv.js";
import bestSoldTvPrice from "./helpers/bestSoldTvPrice.js";
import bestSoldTvSize from "./helpers/bestSoldTvSize.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";



function App() {


    function sortingLists(sortingList) {
        const copyInventory = [...inventory]
        if (sortingList === "mostSold") {
            return copyInventory.sort((a, b) => b.sold - a.sold);
        } else if (sortingList === "price") {
            return copyInventory.sort((a, b) => a.price - b.price);
        } else if (sortingList === "sport") {
            return copyInventory.sort((a, b) => b.refreshRate - a.refreshRate);
        }
    }


    function handleClick(sort) {
        console.log(sort);
    }


// Deel 2 van Tech it Easy
//     {
//         showOutcomeInConsole();
//
//     }

    // const tvOptions = inventory.map((tvOption) => {
    //    );
    // });
    // console.log(tvOptions);

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
                <div className="container-sold most-sold">
                    <div className="image-most-sold">
                        <img src={bestSellingTv.sourceImg} alt="Samsung TV bestverkocht"/>
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
                            <img src={minus} alt="minus icon" className="icon"/> ambilight
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button type="button" onClick={() => handleClick(sortingLists("mostSold"))}>Meest verkocht eerst
                    </button>
                    <button type="button" onClick={() => handleClick(sortingLists("price"))}>Goedkoopste eerst</button>
                    <button type="button" onClick={() => handleClick(sortingLists("sport"))}>
                        Meest geschikt voor sport eerst
                    </button>
                </div>

                <div className="container-sold">
                    <ul>
                        {inventory.map((tv) => {
                            return <li key={tv.type} className="most-sold image-most-sold">
                                <img src={tv.sourceImg} alt={`Afbeelding van ${tv.name}`}/>
                                <div className="most-sold-info">
                                <h3>{bestSoldTv(tv)}</h3>
                                <p className="numbers">{bestSoldTvPrice(tv)}</p>
                                <p>{bestSoldTvSize(tv)}</p>

                                <ol className="list-box">
                                    {tv.options.map((option) => {
                                            if (option.applicable === true) {
                                                return <li key={option.name}><img src={check} alt="check icon"
                                                                                  className="icon"/> {option.name}</li>
                                            } else {
                                                return <li key={option.name}><img src={minus} alt="check icon"
                                                                                  className="icon"/> {option.name}</li>
                                            }
                                        }
                                    )}
                                </ol>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>


        </>
    )
}

export default App
