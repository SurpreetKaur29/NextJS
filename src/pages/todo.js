import { useState } from "react";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";

const Todo = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [result, setResult] = useState([]);

  // Input value
  const handleInput = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const indexMatch = result.findIndex((item) => item.email === input.email);
  console.log("indexMatch", indexMatch);

  // Form Submit
  const handleSubmit = () => {
    if (!input.name && !input.email) {
      alert("All fields are required.");
    } else if (!input.name) {
      alert("Name is required.");
    } else if (!input.email) {
      alert("Email is required.");
    } else if (indexMatch !== -1){
      alert("Email is already used.");
    } else {
      setResult([input, ...result]);
      console.log("result", result);
    }
  };

  // Edit Data
  const editData = () => {
    console.log("Edit");
  };

  // Delete Data
  const deleteData = () => {
    console.log("Delete");
  };

  return (
    <>
      <div className="shadow my-8 bg-white p-10 max-w-md mx-auto">
        <label className="block mb-6">
          <span className="block">Name</span>
          <input
            type="text"
            onChange={(e) => handleInput("name", e.target.value)}
            className="bg-[#f5f5f5] w-full h-[40px] p-2 focus-visible:outline-none"
          />
        </label>
        <label className="block mb-6">
          <span className="block">Email</span>
           <input
            type="email"
            onChange={(e) => handleInput("email", e.target.value)}   
            className="bg-[#f5f5f5] w-full h-[40px] p-2 focus-visible:outline-none"
          />
        </label>
        <input
          type="submit"
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2"
        />
      </div>
      <table className="shadow my-8 bg-white p-10 mx-auto w-[800px]">
        <tbody>
          <tr>
            <th className="text-left bg-[#c7c7c7] p-2 w-[10%]">Sr. No.</th>
            <th className="text-left bg-[#c7c7c7] p-2 w-[40%]">Name</th>
            <th className="text-left bg-[#c7c7c7] p-2 w-[40%]">Email</th>
            <th className="text-left bg-[#c7c7c7] p-2 w-[10%]">Actions</th>
          </tr>
          {result.map((item, idx) => {
            return(
              <tr key={idx}>
              <td className="p-2 w-[10%]">{idx + 1}</td>
              <td className="p-2 w-[40%]">{item.name}</td>
              <td className="p-2 w-[40%]">{item.email}</td>
              <td className="p-2 w-[10%]">
                <button className="text-[green] mr-2" onClick={editData}>
                  <MdOutlineModeEditOutline size={25} />
                </button>
                <button className="text-[red]" onClick={deleteData}>
                  <MdDeleteOutline size={25} />
                </button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
};

export default Todo;
