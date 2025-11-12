import './App.css';
import soldTv from "./helpers/soldTv.js";
import boughtTv from "./helpers/boughtTv.js";
import toBeSold from "./helpers/toBeSold.js"

function App() {

    return (
      <>
          <h1>Tech it easy dashboard</h1>

          <h2>Verkoopoverzicht</h2>
          <article className="sold">
              <h3>Aantal verkochte producten</h3>
              <p>{soldTv()}</p>
          </article>
          <article className="bought">
              <h3>Aantal ingekochte producten</h3>
              <p>{boughtTv()}</p>
          </article>
          <article className="to-be-sold">
              <h3>Aantal te verkopen producten</h3>
              <p>{toBeSold()}</p>
          </article>

          <h2>Best verkochte tv</h2>
          
      </>
  )
}

export default App
