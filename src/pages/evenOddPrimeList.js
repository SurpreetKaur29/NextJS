import { useState } from "react";

export default function EvenOddPrimeList() {
  const [input, setInput] = useState(0);

  const handleChange = (e) => {
    setInput(parseInt(e.target.value));
  };

  const evenNumber = [];
  const oddNumber = [];
  const primeNumber = [];

  if (input && input === 1) {
    oddNumber.push(1);
  }
  for (var i = 2; i <= input; i++) {
    let isPrime = true;
    if (i % 2 === 0) {
      evenNumber.push(i);
    } else {
      oddNumber.push(i);
    }
    for (var x = 2; x < i; x++) {
      if (i % x === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumber.push(i);
    }
  }
  console.log("primeNumber", primeNumber)

  return (
    <>
      <div className="p-40">
        <input
          type="number"
          onChange={(e) => handleChange(e)}
          max="500"
          value={input ? input : 0}
          className="bg-grey h-10 w-[500px] mb-10 p-5"
        /> 
        <div className="flex gap-5">
          <div className="w-1/3">
            <h2>Even Numbers ({evenNumber.length})</h2>
            <ul>
              {evenNumber.map((item, idx) => (
                <li key={idx}>{item}</li>      
              ))}
            </ul>
          </div>
          <div className="w-1/3">
            <h2>Odd Numbers ({oddNumber.length})</h2>
            <ul>
              {oddNumber.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/3">
            <h2>Prime Numbers ({primeNumber.length})</h2>
            <ul>
              {primeNumber.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
