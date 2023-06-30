import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [result, setResult] = useState([]);
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);
  const [row, setRow] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  // Input value
  const handleInput = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const Index = result.findIndex((item) => item.email === input.email);
  console.log("Index", Index);

  // On submit
  const handleSubmit = () => {
    console.log("Form Submit");
    if (!input.name && !input.email) {
      alert("All Fields are required.");
    } else if (!input.name) {
      alert("Name is required.");
    } else if (!input.email) {
      alert("Email is required.");
    } else if (Index !== -1 && Index !== active) {
      alert("Email is already used.");
    } else {
      if (edit) {
        let newArr = [...result];
        newArr[active] = input;
        console.log("newArr[active] = input", (newArr[active] = input));
        console.log("newArr", newArr);
        setResult(newArr);
        setEdit(false);
        setActive(null);
        console.log("active", active);
      } else {
        setResult([input, ...result]);
        console.log("result", result);
      }
      setInput({
        name: "",
        email: "",
      });
    }
  };

  // Delete Data
  const deleteData = (i) => {
    console.log("delete", i);
    setResult(result.filter((item, idx) => i !== idx));
  };

  // checkbox checked
  const checkBoxChecked = (idx) => {
    if (row.indexOf(idx) > -1) {
      setRow(row.filter((r) => r !== idx));
      document.getElementById("deleteButton").style.backgroundColor = "gray";
    } else {
      setRow([...row, idx]);
      document.getElementById("deleteButton").style.backgroundColor = "red";
    }
  };

  console.log("row", row);

  // Select All
  const selectAll = () => {
    console.log("select all");
    if (row.length === result.length) {
      setRow([]);
      document.getElementById("deleteButton").style.backgroundColor = "gray";
      setIsChecked(false);
    } else {
      const allIndexes = result.map((item, idx) => idx);
      setRow(allIndexes);
      console.log("allIndexes", allIndexes);
      document.getElementById("deleteButton").style.backgroundColor = "red";
      setIsChecked(true);
    }
  };

  // Delete Selected
  const deleteSelected = () => {
    console.log("delete all");
    const updatedResult = result.filter((item, idx) => !row.includes(idx));
    setResult(updatedResult);
    setRow([]);
    setIsChecked(false);
    document.getElementById("deleteButton").style.backgroundColor = "gray";
  };
  
  // Edit Data
  const editData = (item, idx) => {
    console.log("edit");
    setEdit(true);
    setInput(item);
    setActive(idx);
  };

  return (
    <div className="flex gap-10 max-w-[1200px] mx-auto my-5 items-start">
      <div className="w-[400px] shadow-2xl p-10">
        <div>
          <label className="block mb-5">
            <span className="block">Name</span>
            <input
              className="shadow-lg border border-[#b2b2b2] w-full p-3"
              value={input.name}
              onChange={(e) => handleInput("name", e.target.value)}
              type="text"
              name="name"
            />
          </label>
          <label className="block mb-5">
            <span className="block">Email</span>
            <input
              className="shadow-lg border border-[#b2b2b2] w-full p-3"
              value={input.email}
              onChange={(e) => handleInput("email", e.target.value)}
              type="email"
              name="email"
            />
          </label>
          <button
            onClick={handleSubmit}
            type="submit"
            className="shadow-lg border border-[#b2b2b2] bg-black text-white py-3 max-w-[200px] block mx-auto rounded px-5"
          >
            {edit ? "Update" : "Submit"}
          </button>
        </div>
      </div>
      <div className="shadow-2xl w-[800px]">
        <table className="w-full">
          <tbody>
            <tr className="bg-[#dfdfdf]">
              <th className="py-3 px-2 text-left w-[2%]">
                <input type="checkbox" onChange={selectAll} checked={isChecked} />
              </th>
              <th className="py-3 px-2 text-left w-[10%]">Sr. No.</th>
              <th className="py-3 px-2 text-left w-[25%]">Name</th>
              <th className="py-3 px-2 text-left w-[25%]">Email</th>
              <th className="py-3 px-2 text-left flex gap-3 items-center">
                Actions
                <button
                  className="bg-[gray] text-white py-2 px-4 rounded" id="deleteButton"
                  onClick={deleteSelected}
                >
                  Delete Selected
                </button>
              </th>
            </tr>
            {result.map((item, idx) => {
              return (
                <tr className="border-b border-[#d9d9d9] w-full" key={idx}>
                  <td className="py-3 px-2 w-[2%]">
                    <input
                      type="checkbox"
                      checked={row.includes(idx)}
                      onChange={() => checkBoxChecked(idx)}
                    />
                  </td>
                  <td className="py-3 px-2 w-[10%]">{idx + 1}.</td>
                  <td className="py-3 px-2 w-[25%]">{item.name}</td>
                  <td className="py-3 px-2 w-[25%]">{item.email}</td>
                  <td className="py-3 px-2 w-[38%]">
                    <button
                      className="bg-[green] text-white py-2 px-6 rounded mr-2"
                      onClick={() => editData(item, idx)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-[red] text-white py-2 px-4 rounded"
                      onClick={() => deleteData(idx)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Form;
