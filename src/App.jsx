// not working properly , need some improvements

import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  const wei = (e) => setWeight(e.target.value);
  const hei = (e) => setHeight(e.target.value);

  const collect = (e) => {
    e.preventDefault();

    if (height == 0 || weight == 0) setMessage("Please enter a valid details");
    else {
      setBmi((weight / (height * height)) * 703);

      if (bmi < 25) setMessage("You are underweight");
      else if (bmi > 30) setMessage("You are overweight");
      else setMessage("You are healthy");
    }
  };

  const reload = (e) => {
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <h1>BMI Calculator</h1>
        <form action="" onSubmit={collect}>
          <label htmlFor="">Weight</label>
          <input type="text" placeholder="Enter your Weight" onChange={wei} />
          <label htmlFor="">Height</label>
          <input type="text" placeholder="Enter your Height" onChange={hei} />
          <button type="submit">Submit</button>
          <button onClick={reload}>Reload</button>
          <h3>Your BMI is {bmi}</h3>
          <p> {message} </p>
        </form>
      </div>
    </>
  );
}

export default App;
