import "./App.css";
import Comment from "./components/Comment";
import { comment } from "./data/data";

function App() {
  return (
    <div className="app">
      {comment.map((el) => (
        <Comment author={el.author} text={el.text} date={el.date} />
      ))}
    </div>
  );
}

export default App;
