import { useState } from "react";
import "./styles.css";

export default function App()
{
  const [bDayTotal, setBDayTotal] = useState(0);
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [resultOption, setResultOption] = useState(-1);

  const onBirthdayChange = (event) =>
  {
    let total = 0;
    const date = event.target.value.replaceAll("-", "");
    for (let digit of date)
    {
      total = total + Number(digit);
    }

    setBDayTotal(total);
  };
  const onLuckyNumberChange = (event) =>
  {
    event.target.value = Math.round(event.target.value);
    setLuckyNumber(event.target.value);
  };

  const setResultStyle = () =>
  {
    if (isNaN(bDayTotal) || isNaN(luckyNumber) || bDayTotal === 0)
    {
      return {
        backgroundColor: "#CAE1ED"
      }
    }
    else
    {
      if (Number(bDayTotal) % Number(luckyNumber) === 0) 
      {
        return {
          backgroundColor: "#98FCA4"
        }
      }
      else 
      {
        return {
          backgroundColor: "#FCA998"
        }
      }
    }
  }
  const onCheck = () =>
  {
    setError("");
    setResult("");
    if (isNaN(bDayTotal) || isNaN(luckyNumber) || bDayTotal === 0)
    {
      setError("Please fill correct numerical values in both fields");
    } else
    {
      if (Number(bDayTotal) % Number(luckyNumber) === 0) setResult("Yes, you're birthday is lucky!");
      else setResult("Unlucky :( Try another lucky number?");
    }
  };

  return (
    <div className="App">
      <section>
        <h1> Is your birthday lucky?</h1>
        <h3> Enter your birth date and a number in the fields below:</h3>
      </section>
      <section className="calc-body">
        <label>your date of birth: </label>
        <input type="date" onChange={onBirthdayChange}></input>
        <label>lucky number </label>
        <input type="number" onChange={onLuckyNumberChange}></input>
        <button onClick={() => onCheck()}>Check</button>
      </section>
      <section className="result" style={setResultStyle()}>
        {error.length > 0 && <p>{error}</p>}
        {result.length > 0 && <p>{result}</p>}
      </section>
    </div>
  );
}
