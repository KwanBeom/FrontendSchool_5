import { useState } from "react"
import DisplayMood from "./Components/DisplayMood/DisplayMood"
import MenuList from "./Components/MenuList/MenuList"
// const feels = ["좋아요! :)", "정말 좋아요! :)", "최고에요!! :)", "미쳤어요!! >_<"]



function App() {
const [currentMood, setCurrentMood] = useState("")

  return (
    <div>
      <MenuList mood={currentMood} onItemClick={setCurrentMood}/>
      <DisplayMood mood={currentMood}/>
    </div>
  );
}

// function Display(){
//   const [txt, renderTxt] = useState("")

//   function pushBtn(e){
//     renderTxt(e.target.textContent.replace(":", ""))

//     e.target.parentNode.querySelectorAll("button").forEach(item => {
//       item.classList.remove("active")
//     })
//     e.target.classList.add("active")
//   }

//   const btns = feels.map((item,idx) => {
//     return <button key={idx} onClick={pushBtn}>기분이: {item}</button> 
//   })

//   return (<>
//     {btns}
//     <div className="display">{txt}</div>
//   </>)
// }

export default App;
