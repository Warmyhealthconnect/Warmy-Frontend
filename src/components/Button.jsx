import {useState} from 'react'

function Button({title}) {

  const [hover, setHover]=useState(false)

    const buttonstyle={
        backgroundColor: hover ? "white" : "var(--main-color)",
        borderRadius: "50px",
        width:"200px",
        height:"50px",
        color: hover ? "var(--main-color)" : "white",
        border:"none",
        fontWeight:700
    }


  return (
   <>
   
   <button onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={buttonstyle}>{title}</button>
   
   </>
  )
}

export default Button