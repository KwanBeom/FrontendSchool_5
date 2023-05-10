import MyList from "./components/MyList";
import { useState } from "react";
import Counter from "./components/Counter";
import NavBar from "./components/Shop";

function Hello({ name }) {
    if (name) {
        return (
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
    return <NoName />;
}

function NoName() {
    return (
        <div>
            <h1>값이 입력되지 않았습니다</h1>
        </div>
    );
}

function App() {
    const [datas, setDatas] = useState([
        {
            title: "개발자 무릎 담요",
            price: 17500,
            id: 101,
        },
        {
            title: "Hack Your Life 개발자 노트북 파우치",
            price: 29000,
            id: 102,
        },
        {
            title: "우당탕탕 라이켓의 실험실 스티커북",
            price: 29000,
            id: 103,
        },
        {
            title: "버그를 Java라 버그잡는 개리씨 키링",
            price: 29000,
            id: 104,
        },
    ]);
    // React는 state 함수의 호출의 일관성을 유지하기 위해
    // 내부적으로 동일한 내용의 state 함수 호출이 여러번 반복되면
    // 하나의 업데이트로 취급하여 처리된다.
    function handleClick(id) {
        // setDatas(datas.filter(item => id !== item.id))

        // 함수형 업데이트
        // 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을
        // React가 이전 state 값으로 보장한다.
        // 때문에 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값(가상 돔)을 비교하여 처리할 수 있다.
        setDatas((prevDatas) => {
            return prevDatas.filter((item) => {
                return id !== item.id;
            });
        });
    }

    return (
        <div>
            <MyList />
            {datas.map((item, idx) => (
                <li key={item.id}>
                    <h2>
                        {idx + 1} {item.title}
                    </h2>
                    <span>{`${item.price}원`}</span>
                    <button
                        onClick={() => {
                            handleClick(item.id);
                        }}
                    >
                        삭제
                    </button>
                </li>
            ))}
            <Counter />
            <Hello name="bk" />
            <NavBar/>
        </div>
    );
}

export default App;
