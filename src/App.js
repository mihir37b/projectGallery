import "./App.css";
import Cards from "./Cards";
function App() {
  return (
    <div className="App">
      <a className="github title is-6" href="https://github.com/mihir37b">
        GitHub
      </a>
      <a
        className="linkedin title is-6"
        href="https://www.linkedin.com/in/mihir-bommakanti/"
      >
        LinkedIn
      </a>
      <h1 className="title is-3">Project Challange By Mihir Bommakanti</h1>
      <div className="cards">
        <Cards
          title="Card Title"
          image="image.jpg"
          body="random randomndainvo;fsaino;"
        />
      </div>
    </div>
  );
}

export default App;
