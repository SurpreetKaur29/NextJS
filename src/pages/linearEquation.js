export default function linearEquation() {
  const equation = (a, b) => {
    if (a === 0) {
      alert("a should not be zero");
    }
    const x = -b / a;
    return x;
  };
  console.log("equation", equation(10, 8));

  return <></>;
}
