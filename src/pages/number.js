import { useState } from "react";

export default function Number() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [find, setFind] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState("");

  const handleStart = (e) => {
    setStart(parseInt(e.target.value));
  };
  const handleEnd = (e) => {
    setEnd(parseInt(e.target.value));
  };
  const handleFind = (e) => {
    setFind(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    var result = [];
    if (end > start && start >= 0) {
      for (var i = start; i <= end; i++) {
        result.push(i);
        console.log("result", result);
      }
      setError("");
    } else if (start <= 0) {
      setError("Start value should be positive number.");
      alert(error);
    } else if (start == end) {
      setError("Start value should not be same as End value.");
      alert(error);
    } else {
      setError("End value should be greater than Start value");
      alert(error);
    }

    const filterData = result.filter((item) =>
      item.toString().includes(find.toString())
    );
    setFiltered(filterData.toString());
  };
  console.log("filtered", filtered);
  const x = filtered.split("");
  console.log("x", x);
  const y = x.filter((item) => item.toString().includes(find.toString()));
  console.log("y", y.length);

  return (
    <>
      <div className="p-20 flex gap-5 items-end">
        <label>
          <span className="block">Start Value</span>
          <input
            type="number"
            onChange={(e) => handleStart(e)}
            value={start}
            className="bg-grey h-10 w-[500px] p-5"
          />
        </label>
        <label>
          <span className="block">End Value</span>
          <input
            type="number"
            onChange={(e) => handleEnd(e)}
            value={end}
            className="bg-grey h-10 w-[500px] p-5"
          />
        </label>
        <label>
          <span className="block">Find Value</span>
          <input
            type="number"
            onChange={(e) => handleFind(e)}
            value={find}
            className="bg-grey h-10 w-[500px] p-5"
          />
        </label>
        <button
          className="bg-black p-2 text-white"
          onClick={(e) => handleSubmit(e)}
        >
          Show Value
        </button>
      </div>
      <h1 className="text-center text-2xl">
        From {start} to {end}, <b>{find}</b> comes {y.length} times.
      </h1>
    </>
  );
}
