import { useState } from "react";
import Detail from "./Detail";
import Question from "./Question";
import Review from "./Review";

const ContentsContainer = ({ listName }) => {
    if (listName === "detail") {
        return <Detail />;
    } else if (listName === "qa") {
        return <Question />;
    } else if (listName === "review") {
        return <Review />;
    }
};

export default function NavBar() {
    const [listName, setListName] = useState("detail");
    const checkId = (e) => {
        setListName(e.target.id);
    };

    return (
        <>
            <nav>
                <ul>
                    <li
                        id="detail"
                        onClick={checkId}
                        style={
                            listName === "detail"
                                ? { color: "red" }
                                : { color: "black" }
                        }
                    >
                        상세정보
                    </li>
                    <li
                        id="qa"
                        onClick={checkId}
                        style={
                            listName === "qa"
                                ? { color: "red" }
                                : { color: "black" }
                        }
                    >
                        Q&A
                    </li>
                    <li
                        id="review"
                        onClick={checkId}
                        style={
                            listName === "review"
                                ? { color: "red" }
                                : { color: "black" }
                        }
                    >
                        리뷰
                    </li>
                </ul>
            </nav>
            <ContentsContainer listName={listName} />
        </>
    );
}
