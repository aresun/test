const testDom = document.getElementById("test");
let test = "client width: " + document.documentElement.clientWidth;
test += "dpr: " + window.devicePixelRatio;
testDom.textContent = test;
