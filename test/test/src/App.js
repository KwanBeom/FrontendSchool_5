import { useState } from "react";

function App() {
    const [list, setList] = useState([
        {
            title: "1번째 요소",
            id: 101,
        },
        {
            title: "2번째 요소",
            id: 102,
        },
        {
            title: "3번째 요소",
            id: 103,
        },
    ]);
    function deleteOne() {
      setList(list.filter(item => item.id !== 101))
      console.log(list)
    }
    return (<>
    <button onClick={deleteOne}>첫번째 요소 삭제</button>
        <ul>
            {list.map((item) => {
                return <li>{item.title}</li>;
            })}
        </ul>
    </>);
}
export default App;
