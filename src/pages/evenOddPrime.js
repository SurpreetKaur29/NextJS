import { useState } from "react";

export default function evenOddPrime() {
  const [input, setInput] = useState(0);
  const handleSubmit = (e) => {
    setInput(e.target.value);
  };

  const result = [];
  for (var i = 0; i <= input; i++) {
    result.push(i);
    console.log("input", input);
    console.log("i", i);
  }
  console.log("result", result);

  const evenNumber = result.filter((item) => item % 2 === 0);
  console.log("evenNumber", evenNumber);

  const oddNumber = result.filter((item) => item % 2 !== 0);
  console.log("oddNumber", oddNumber);

  return (
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
          </ul>
        </div>
      </div>
    </div>
  );
}
