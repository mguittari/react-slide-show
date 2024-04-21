import "./App.css";
import Slider from "./Components/Slide-show/Slider";
import pictures from "../src/Components/Slide-show/Datas.json";

export default function App() {
  return (
    <div className="text-green-700 text-3xl">
      <Slider pictures={pictures} />
    </div>
  );
}
