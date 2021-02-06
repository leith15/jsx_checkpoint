import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import imageInSrc from "./imageInSrc.jpg";
import myVideo from "./myVideo.mp4";

function App() {
  return (
    <div className="App">
      <div
        style={{ border: "solid 1px black", maxWidth: "100vw" }}
        className="container"
      >
        <h1 className="title red">React JSX</h1>
        <hr class="brace" />

        <div className="photos">
          <img src={imageInSrc} />
          <img src="/imageInPublic.jpg" />
        </div>
      </div>

      <video width="640" height="500" controls>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
