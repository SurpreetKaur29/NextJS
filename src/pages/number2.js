import { useState } from "react";

export default function NumberTwo() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [find, setFind] = useState(0);
  const [conclusion, setConclusion] = useState(0);

  const handleStart = (e) => {
    setStart(parseInt(e.target.value));
  };
  const handleEnd = (e) => {
    setEnd(parseInt(e.target.value));
  };
  const handleFind = (e) => {
    setFind(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    var resultArr = [];
    for (var i = start; i <= end; i++) {
      resultArr.push(i);
    }
    const x = resultArr.toString().split("");
    const y = x.filter((item) => item.toString().includes(find.toString()));
    setConclusion(y?.length);
  };

  return (
    <>
      <div className="p-20 flex gap-5 items-end">
        <label>
          <span className="block">Start Value</span>
          <input
            type="number"
            onChange={(e) => handleStart(e)}
            value={start ? start : 0}
            min="0"
            max="100"
            className="bg-grey h-10 w-[500px] p-5"
          />
        </label>
        <label>
          <span className="block">End Value</span>
          <input
            type="number"
            onChange={(e) => handleEnd(e)}
            value={end ? end : 0}
            min="0"
            max="100"
            className="bg-grey h-10 w-[500px] p-5"
          />
        </label>
        <label>
          <span className="block">Find Value</span>
          <input
            type="number"
            onChange={(e) => handleFind(e)}
            value={find ? find : 0}
            min="0"
            max="9"
            className="bg-grey h-10 w-[500px] p-5"
          />
        </label>
        <button className="bg-black p-2 text-white" onClick={handleSubmit}>
          Show Value
        </button>
      </div>
      <h1 className="text-center text-2xl">
        From {start} to {end}, {find} comes {conclusion} times.
      </h1>
    </>
  );
}
