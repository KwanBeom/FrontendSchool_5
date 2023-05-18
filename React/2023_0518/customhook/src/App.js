import React, { useEffect } from "react";
import { useState } from "react";
import MouseBox from "./components/MouseBox";
import ImageList from "./components/ImageList";
import useIsBottom from "./hooks/useIsBottom";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            {/* <MouseBox/> */}
            <ImageList setLoad={setIsLoading}/>
            {isLoading && <Loading/>}
        </>
    );
}
export default App;
