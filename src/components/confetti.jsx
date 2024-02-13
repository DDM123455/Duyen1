import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
function Confettti() {
  const [windowDe, setWin] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detect = () => {
    setWin(
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      [windowDe]
    );
  };
  useEffect(() => {
    window.addEventListener("resize", detect);
    return () => {
      window.removeEventListener("resize", detect);
    };
  });

  return (
    <>
      <ReactConfetti width={windowDe.width} height={windowDe.height} />
    </>
  );
}

export default Confettti;
