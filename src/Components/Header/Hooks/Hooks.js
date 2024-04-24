import React, { useState,useEffect } from "react";


function Hooks() {
  //   console.log(useState("ETenesH"));
  //u can't use useState inside if /for loop but u can use the variable u intialized only
const [name,setName] = useState("evangadi")
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("banana");
  const [age,setAge] = useState(0);
// useEffect syntax
//useEffect(<function>,<dependency>)
//independency u can just put only [](empty array) to work only one times unless it do many times
  useEffect(() => {
    document.title = `Count: ${count}`;
  },[count]);

  const [car,setCar] = useState({
    brand:"Ford",
    model:"Mustang",
    year: "1995",
    color: "red",

  }) 
  const updateColor = () => {
    setCar((prevState) => {
    return { ...prevState,color:"blue"};
  })
  }
  
  console.log(car)


  
//   () => 
//         setCount((count) => count + 10)}>
//         count: {count}
  const changeName = () => { setName((prevState) => (prevState === "evangadi" ? "june,Batch" : "evaye"));}
  //setCount is a function that can do what we wanna do
  return <div className="App">
      <button onClick={() => setCount(count => count + 10)}>
        count: {count}
      </button>
      <button onClick={() => setAge(age => age + 2)}>
        Age: {age}
      </button>
      <h1>
        {car.brand}
      </h1>
      <button onClick={() => setFruit("me")}>
        fruit: {fruit}
      </button>
      <button onClick={updateColor}>Update color</button>
      <button onClick={changeName}>Update Name</button>
    </div>;
}

export default Hooks;
