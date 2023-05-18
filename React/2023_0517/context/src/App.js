import { createContext } from "react";
import HelloLicat from "./Components/HelloLicat";

const UserInfo = createContext({name: "gary", id: "garyIsFree"})

const App = () => {
    return (
        <HelloLicat />
    );
};

export {App, UserInfo};
