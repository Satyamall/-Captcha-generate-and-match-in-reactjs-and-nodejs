
import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";

function App() {

  const [code, setCode] = useState("");
  const [text, setText]=useState("");
  const [inputCode, setInputCode]=useState("");
  const [hash, setHash]= useState("");

  const getCode=()=>{
    axios.get("http://localhost:5000/code")
    .then((res)=>{
      setCode(res.data.code);
      setHash(res.data.hash);
    })
  }

  useEffect(()=>{
    getCode();
  },[])


  const handlePost =()=>{
      return axios.post("http://localhost:5000",{
          text: text,
          code: inputCode,
          hash: hash
      })
  }

  return (
    <div className="App">
        <div>
          <input type="text" placeholder="Type text here" onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div>
          <input type="text" placeholder="Type code here" onChange={(e)=>setInputCode(e.target.value)}/>
        </div>
        <div>
          <input type="text" placeholder="Type code here" value={code}/>
        </div>
        <div>
          <button onClick = {handlePost}>Submit</button>
        </div>
    </div>
  );
}

export default App;
