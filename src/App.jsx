//import Header from "./assets/Header"
import{useState} from "react" 
import Clock from "./Clock"

function App() {
  // eslint-disable-next-line no-unused-vars
  // default value set krne ke liye state ka use krte h or kuch v color use krr skte h
  const[color,setColor] = useState('pink') 
  return (
    <>
    
    <h1>Digital Clock in React js</h1>
    <select onChange ={(event)=>setColor(event.target.value)}>
    
      <option value ={"red"}>Red</option>
      <option value ={"blue"}>Blue</option>
      <option value ={"green"}>Green</option>
      <option value ={"orange"}>Orange</option>
      <option value ={"pink"}>Pink</option>
      <option value ={"black"}>Black</option>
      <option value ={"purple"}>Purple</option>
      <option value ={"Indigo"}>Indigo</option>
    </select>
    {/* props declare in component */}
    <Clock color ={color} />
      
       
    

    </>
  )
}

export default App
