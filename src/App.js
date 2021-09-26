import "./App.css";
import TypedWord from "./Components/TypedWord";
import questions from "./Data/data";

function App() {
  return (
    <div className="App">
      {/* <TypedWord/> */}
        {questions.map((question) => {
          return <TypedWord key={question.id} {...question} />;
        })}
    </div>
  );
}

export default App;
