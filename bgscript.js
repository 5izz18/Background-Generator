var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bodyid");

// to change style of element we use syntax--> element.style.background=(); here we can use anything that we want to change in the place of background
function rightcolor() {
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    // the above is the standard syntax
    css.textContent = body.style.background + ";";
    // textContent adds a contenttext, here its adding the background values. It is similar to innerHTML and createTextNode
}

// input --> this is the event that is used for any input data
color1.addEventListener("input", rightcolor);
// we dont use () for function rightcolor(),inside the(), because it wil be a parameter not a function and it will be run automatically with event mentioned before in this case "input" is the event.
color2.addEventListener("input", rightcolor);