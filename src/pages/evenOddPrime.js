import { useState } from "react";

export default function EvenOddPrime() {
  const [input, setInput] = useState(0);

  const handleSubmit = (e) => {
    setInput(e.target.value);
  };

  const result = [];
  const evenNumber = [];
  const oddNumber = [];

  for (var i = 2; i < input; i++) {
    if(input % i === 0){
      
    }
    if (i % 2 === 0) {
      evenNumber.push(i);
    } else {
      oddNumber.push(i);
    }
  }
  console.log("result", result);
  console.log("evenNumber", evenNumber);
  console.log("oddNumber", oddNumber);

  var primeNumber = [];
  var primeList = result.map((item) => {
    var isPrime = true;
    for (var x = 2; x <= Math.sqrt(item); x++) {
      if (item % x === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      if (item > 1) {
        primeNumber.push(item);
        console.log("primeNumber", primeNumber);
        console.log("Prime", item);
      }
    } else {
      console.log("Not Prime", item);
    }
  });
  return (
    <>
      <div className="p-40">
        <input
          type="number"
          onChange={(e) => handleSubmit(e)}
          value={input}
          className="bg-grey h-10 w-[500px] mb-10 p-5"
        />
        <div className="flex gap-5">
          <div className="w-1/3">
            <h2>Even Numbers</h2>
            <ul>
              {evenNumber.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/3">
            <h2>Odd Numbers</h2>
            <ul>
              {oddNumber.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/3">
            <h2>Prime Numbers</h2>
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
