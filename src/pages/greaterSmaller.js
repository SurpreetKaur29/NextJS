export default function greaterSmaller() {
  let arr = [45, 798, 4565, 44, 625, 77, 12, 54454, 3699, 4646, 200, 0];
  const greater = Math.max(...arr);
  console.log("greater", greater);
  const smaller = Math.min(...arr);
  console.log("smaller", smaller);

  const forAsc = (a, b) => a - b;
  const asc = arr.sort(forAsc);
  console.log("asc", asc);

  const forDec = (a, b) => b - a;
  const dec = arr.sort(forDec);
  console.log("dec", dec);

  let newArray = [
    {
      name: "Ram",
      age: 65,
    },
    {
      name: "Sham",
      age: 94,
    },
    {
      name: "Ghanshyam",
      age: 35,
    },
    {
      name: "Rohan",
      age: 21,
    },
    {
      name: "Mohan",
      age: 56,
    },
    {
      name: "Sohan",
      age: 20,
    },
  ];
  console.log("newArray.sort((a, b) => a.age - b.age)", newArray.sort((a, b) => a.age - b.age));

  var elder = newArray[0].age;
  var elderName = newArray[0].name;
  for (var i = 1; i < newArray.length; i++) {
    if (newArray[i].age > elder) {
      elder = newArray[i].age;
      elderName = newArray[i].name;
    }
  }
  console.log("elder", elder);
  console.log("elderName", elderName);
  console.log(`${elderName} is elder, he is ${elder} years old.`);

  var younger = newArray[0].age;
  var youngerName = newArray[0].name;
  for (var i = 1; i < newArray.length; i++) {
    if (newArray[i].age < younger) {
      younger = newArray[i].age;
      youngerName = newArray[i].name;
    }
  }
  console.log("younger", younger);
  console.log("youngerName", youngerName);
  console.log(`${youngerName} is younger, he is ${younger} years old.`);

  return <></>;
}
