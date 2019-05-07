const testDom = document.getElementById("test");
const dpr = window.devicePixelRatio;

let test = "client width: " + document.documentElement.clientWidth;
test += "dpr: " + dpr;
testDom.textContent = test;

// scale 1/dpr
document
  .getElementByName("viewport")[0]
  .setAttribute("content", "width=device-width,initail-scale=" + 1 / dpr);
