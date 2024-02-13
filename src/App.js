import logo from "./logo.svg";
import "./App.css";
import bg from "./image/lastOne.mp4";
import fi from "./image/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";
import GIFPlayer from "react-gif-player";
import fa from "./image/bear-kiss-bear-kisses.gif";
import { useState } from "react";
import Confettti from "./components/confetti";

function App() {
  const [textC, setText] = useState(1);
  const [widthH, setWidth] = useState(10);
  const [heightH, setheight] = useState(0);
  const [font, setFont] = useState(15);
  const [yes, setYes] = useState(false);

  const textContent = [
    { id: 1, content: "No" },

    { id: 2, content: "Are you sure?", width: "90" },

    { id: 3, content: "Really sure?" },
    { id: 4, content: "Are you positive????" },
    { id: 5, content: "Pookie please" },
    { id: 6, content: "Just think about it" },
    { id: 7, content: "If you say no, i'll be very sad" },
    { id: 8, content: "If you say no, i'll be very very sad" },
    { id: 9, content: "If you say no, i'll be very very very sad" },
    { id: 10, content: "If you say no, i'll be very very very very sad" },
    { id: 11, content: "Ok fine, I'll stop asking..." },
    { id: 12, content: "Just kidding, PLEASE SAY YES" },
    { id: 13, content: "I'll be very very very very very sad" },
    { id: 14, content: "You're breaking my heart ;" },
  ];
  const handle = () => {
    if (textC < textContent.length) {
      setWidth((wh) => wh + 50);
      setText((text) => text + 1);
      setheight((wh) => wh + 20);
      setFont((wh) => wh + 10);
    } else {
      setText(1);
      setWidth((wh) => wh + 50);
      setheight((wh) => wh + 20);
      setFont((wh) => wh + 10);
    }
  };
  const handleYes = () => {
    setYes(true);
    setInterval(createHeart, 300);
  };

  return (
    <div
      className="App"
      style={{ overflow: "hidden", width: "100%", maxHeight: 1359 }}
    >
      {yes ? <Confettti /> : ""}
      <div>
        <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
          <div style={{ display: "flex", position: "relative" }}>
            <video
              autoPlay={true}
              loop={true}
              src={bg}
              alt="cute"
              muted
              width="100%"
              height="100%"
            />
            <div className="big" style={{ position: "absolute" }}>
              {yes ? (
                <GIFPlayer autoplay={true} gif={fa} />
              ) : (
                <GIFPlayer autoplay={true} gif={fi} />
              )}

              <p id="text" style={{ color: "ActiveBorder", padding: "0 20" }}>
                {!yes ? "Will you be my Valentine?" : "Yeahhhhhhh"}
              </p>
              {/* <button className="button-33">Yes</button> */}
              <div
                className="bt"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <button
                  className="button-33"
                  onClick={() => handleYes()}
                  style={{
                    padding: `${yes ? 50 : heightH}px ${
                      yes ? 50 : widthH + 20
                    }px`,
                    zIndex: 999999999990000,
                    fontSize: `${font}px`,
                    marginBottom: 50,
                  }}
                >
                  Yes
                </button>

                {yes ? (
                  ""
                ) : (
                  <div className="bt">
                    <button
                      // style={{ maxHeight: 50, maxWidth: 90 }}
                      className="button-34"
                      onClick={() => handle()}
                      style={{ maxWidth: 200, maxHeight: 300 }}
                    >
                      {yes
                        ? "Loveeeee"
                        : textContent.map(
                            (item) => item.id == textC && item.content
                          )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💗";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
