import { useState } from "react";
import EventForm from "./components/EventForm";
import FormItem from "./components/FormItem";

function App() {
  const [datas, setDatas] = useState([])
  const addData = (data) => {
    setDatas([...datas, data]);
  }
  console.log(datas)
  return (
    <div>
      <EventForm addData={addData}/>
      <FormItem datas={datas}/>
    </div>
  );
}
export default App;
