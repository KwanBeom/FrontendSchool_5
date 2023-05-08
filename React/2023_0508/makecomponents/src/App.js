import Hello from "./Components/Hello";
import Time from "./Components/Time";
import Resume from "./Components/Resume"
import ColorText from "./Components/ColorText";

function App() {
  return (
    <div>
      <Hello name="범관"/>
      <Time />
      <Resume hello="안녕하세요" name="범관" hobby="게임" food="고기" color="blue"/>
      <ColorText color="rgba(0,255,0)" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </div>
  );
}

export default App;