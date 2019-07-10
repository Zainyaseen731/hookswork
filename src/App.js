import React,{useState,useEffect} from "react";
import useCustom from "./Custom";
const App =()=>{
    const data=useCustom();
/*const [count,setCount]=useState(0);
const [count1,setCount1]=useState(50);

const clickhendle=()=>{
    setCount(count + 1);
}

const clickhendle1=()=>{
    setCount(count - 1);
}

useEffect(()=>{
    console.log("useEffect is use");
},[count1]);
return(
    <div>
        <h1>      {count}</h1>
     
        <button type="button" onClick={clickhendle}>increment</button>
        <button type="button" onClick={clickhendle1}>decrement</button>
    </div>
);*/
return(
    <div>
        <h1>countup:{data.count}</h1>
     
        <button type="button" onClick={data.handelzain}>increment</button>
       
    </div>
);
}
export default App;