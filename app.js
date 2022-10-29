const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

document.getElementById("btn").addEventListener("click", function () {

    let colorIdx = getRandom();

    document.body.style.backgroundColor = colors[colorIdx];

    document.querySelector(".color").textContent = colors[colorIdx];
});

//0-3
function getRandom() {

    return Math.floor(Math.random() * colors.length);
}