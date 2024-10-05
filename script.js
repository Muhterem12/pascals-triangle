"use strict";

let inputNum = document.querySelector(".input-num");

inputNum.addEventListener("keypress", function (e) {
  if (e.key === "Enter") pascalConverter();
});

const pascalConverter = function () {
  console.log("test");
};
