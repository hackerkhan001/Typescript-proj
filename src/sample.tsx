import { useState } from "react"

function Sample(){
    const [value, setValue] = useState<any>();
    const handleClick =()=>{
        setValue("kalai")
    }
    return(
        <>
        <p>{value}</p>
        <p> Hello World</p>
        <p>kalai</p>
        <button onClick={handleClick}>click</button>
        </>
    )
}
export default Sample;
