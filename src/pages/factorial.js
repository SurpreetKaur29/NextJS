export default function factorial() {
  const fact = (num) => {
    var result = 1;
    for(var i = 1; i <= num; i++){
      result *= i;
    }
    return result;
  }
  console.log("fact", fact(5));

  return <></>;
}
