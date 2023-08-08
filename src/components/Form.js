import React from 'react'
import { useState } from 'react'

export default function Form(props) {
    const handleUpCase = ()=>{

        let newText = text.toUpperCase()
        setText  (newText)
    }
    const handleOncchang = (event) => {
        setText (event.target.value)
        let newcount = text.length +1
        setCount (newcount)
    }
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [style1, myStyle1] = useState({
      color: 'white',
      backgroundcolor: 'black'
    })
    const [style2, myStyle2] = useState({
      color: 'black',
      backgroundcolor: 'white'
    })
  return (
    <>
    <div className= {`container- ${props.mode === 'light' ? 'dark': 'light'} `}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control"  value = {text} onChange={handleOncchang} id="exampleInputEmail1"  rows = "8"></textarea>
  </div>

<button className = "btn btn-primary"  onClick={handleUpCase}>Convert to Upper case</button>
    </div>
    <div className='container'>
        <h1> Total characters</h1>
        <p> You have total {count} characters</p>
    </div>
    </>
  )
}
