import React from "react";

const Home = () => {
  return (
    <div>
      <h1>이건 홈이야</h1>
      <button
        onClick={() => {
          console.log("hello");
        }}
      >
        hello
      </button>
    </div>
  );
};

export default Home;
