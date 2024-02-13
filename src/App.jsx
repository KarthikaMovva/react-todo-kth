import {useState} from "react";
import "./App.css";

function App(){
    const[value,setvalue]=useState("")
    const[list,setlist]=useState([])


const recordchange=(e)=>{
    setvalue(e.target.value)
}
const save=()=> {
    const inputlist = [...list, value];
    setlist(inputlist);
    setvalue("")
}

const Done=(i)=>{
    let deleteitems=list.filter((a,index)=>{return(i!=index)})
    setlist(deleteitems)
}

const addtask = ()=>{
let array=["Breaking your promises undermines trust and integrity😔.",
"Changing your commitments without valid reasons shows a lack of reliability😥.",
"Promises are not meant to be broken or altered at whim🥹.",
"Your word should be your bond; don't make promises lightly😭.",
"When you break or attempt to change your promises, you're showing disregard for others' expectations😖.",
"Consistency in keeping promises is essential for building strong relationships🥲.",
"Remember, your promises reflect your character and credibility😟.",
"Breaking or attempting to change promises without valid justification is disrespectful😓.",
"Think before you promise, and honor your commitments☹️.",
"Your actions speak louder than words; don't make promises you can't keep or don't intend to keep🥹."]

let random=array[Math.floor(Math.random()*array.length)]
 alert(random)
}
return(
    <div>
    <div className="background"></div>
    <div className="total">
    <input type="text" placeholder='Enter you Promise...' onChange={recordchange} value={value} className='inp'/>
    <button onClick={save} className='add'>Promise</button>
    <br />
    <div className="container">
    {list.map((ele,index)=>{
      return(
        <div  className="line" key={index}>
          <h1>{ele}</h1>
          <div className="row">
          <button onClick={()=>{Done(index)}} className='Button'>👍</button>
          <button onClick={()=>{addtask()}} className='Button'>👎</button>
          </div>
        </div>
      )
    })}
  </div> 

  </div> 
  </div>
)
}
export default App;