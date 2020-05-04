let newBall = () => {
  const pEnd = document.getElementById("hitStrikezone");
  const pBall = document.getElementById("ball");
  let x = 0;
  let y = 0;
  let z = 0;
  // console.log(pEnd);
  // console.log("nieuwe pitch");
  // Waar eindigt de bal
  x = getInteger(-0.2, 0.2);
  y = getInteger(0, 2);
  //   z = getInteger(0.1, 1);
  pEnd.setAttribute("position", {
    x,
    y,
    z,
  });
  // pEnd.object3D.position.set(1, 2, 3);
  // console.log(pEnd);
  document.getElementById("posXTxt").setAttribute("text", {
    value: "x: " + x,
  });
  document.getElementById("posYTxt").setAttribute("text", {
    value: "y:  " + y,
  });
  document.getElementById("posZTxt").setAttribute("text", {
    value: "z: " + z,
  });
  pEnd.flushToDOM();
  //   console.log(pBall);
  //   pBall.setAttribute("visible", true);
  // pBall.components["alongpath"].reset();
  // console.log("einde nieuwe pitch");
};

let getInteger = (min, max) => {
  return Math.random() * (max - min) + min;
};
