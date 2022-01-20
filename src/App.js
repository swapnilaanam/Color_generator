import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState();
  const [colorList, setColorList] = useState(new Values('#f15025').all(10));
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color);
      setColorList(colors.all(10));
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <main>
      <section id="colorInput" className="container">
        <h3>Color Genarator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            className={isError ? 'error' : null}
          />
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
      <section id="colorOutput" className="colors">
        {colorList.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hex={color.hex}/>
        })}
      </section>
    </main>
  );
}

export default App;
