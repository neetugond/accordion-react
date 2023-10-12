import { useEffect, useState } from "react"

const FunctionBased = (props) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('useEffect') //2nd call
        return () => {
            console.log('clean up - componentWillUnmount')
    //    to perform clean up componentWillUnmount
        }
    },[]);
   
    function handleChange() {
        setCount(count + 1)
    }
    console.log('render') //1st call
  
    return (
        <div>
            <h1>Function Based Component</h1>
            <p>{props.lname}</p>
            <p>{ count}</p>
            <button onClick={handleChange}>
                +
            </button>
        </div>
    )
}

export default FunctionBased