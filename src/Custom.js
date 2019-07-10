import {useState} from "react";
const useCustom=()=>{
const [count,setCount]=useState(0);

const handelzain=()=>{
    setCount(count+1);
};
    return{
        count,
        handelzain
    };

}
export default useCustom;