const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click", function (){

    let randomColor=getRandom();
    document.body.style.backgroundColor=randomColor;
    color.textContent=randomColor;
})

//#1f4a55 6 random characters from hex array
function getRandom() {
    
    let randomColor="#";

    for(let i=0; i<6; i++){
        let randomIdx=Math.trunc(Math.random()*hex.length);
        randomColor+=hex[randomIdx];
    }

    return randomColor;
}