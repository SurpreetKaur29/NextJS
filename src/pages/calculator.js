import { useState } from "react";

const Calc = () => {
  const [result, setResult] = useState("");

  const handleInput = (e) => {
    if (result === "0" || result === "Error") {
      setResult(e.target.value);
    } else {
      setResult((prev) => prev + e.target.value);
    }
  };

  const allClear = () => {
    console.log("result allclear", typeof result, result);
    setResult("0");
  };

  const clear = () => {
    if (result && result.length <= 1 || result === "Error" || result === "Infinity") {
      setResult("0");
    } else {
      console.log("result", typeof result, result);
      const duplicateResult = result && result.toString().slice(0, -1);
      setResult(duplicateResult);
    }
  };

  const equalsTo = () => {
    try {
      const equal = eval(result);
      setResult(equal.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="max-w-[400px] mx-auto shadow p-10 my-5 bg-[#f5f5f5]">
        <form>
          <div className="mb-4">
            <input
              type="text"
              value={result}
              className="bg-[#fff] shadow focus-visible:outline-none p-4 w-full h-10 text-right text-lg font-semibold"
              readOnly
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="button"
              value="AC"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm mb-4"
              onClick={allClear}
            />
            <input
              type="button"
              value="C"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm mb-4"
              onClick={clear}
            />
          </div>
          <div className="grid grid-cols-4 gap-5">
            <input
              type="button"
              value="7"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="8"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="9"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="/"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="4"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="5"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="6"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="*"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="1"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="2"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="3"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="-"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="0"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="."
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
            <input
              type="button"
              value="="
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={equalsTo}
            />
            <input
              type="button"
              value="+"
              className="bg-[#d4d4d4] shadow py-2 font-semibold text-sm"
              onClick={handleInput}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Calc;
