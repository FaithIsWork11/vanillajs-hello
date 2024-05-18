/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("hello");
  console.log("this is me");
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peep", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * who.length)];
  const excuse =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  document.querySelector("#excuse").innerHTML = excuse;
};
