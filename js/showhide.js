const block = document.getElementById("moodchecksec");

const block1 = document.getElementById("moodchecksec1");

let moodword = document.getElementById("moodexplain");

let mooddummy = document.getElementById("invisiblenum");

block1.style.visibility = "hidden";
block1.style.opacity = "0";

// block1.style.visibility = "hidden";
// block1.style.opacity = "0";

function movetodesc() {
    mooddummy.innerText = moodword.innerText;
    // block.style.display = "none";
    block.style.visibility = "hidden";
    block.style.opacity = "0";
    block1.style.visibility = "visible";
    block1.style.opacity = "1";
    // block.style.width = "0";
    //     block.style.height = "0";
    //     block.style.scale = "(0.1)"
    // setTimeout(function() {
        
    //     // block.style.top = "0";
    //     // block.style.bottom = "0";
    //     // block.style.left = "0";
    //     // block.style.right = "0";
    //   }, 300)

    block.classList.add("hide");
    block.classList.remove("show");
    block1.classList.add("show");
    block1.classList.remove("hide");

}

function movetorate() {
    // block1.style.visibility = "hidden";
    // block1.style.opacity = "0";
    block1.style.visibility = "hidden";
    block1.style.opacity = "0";
    block.style.visibility = "visible";
    block.style.opacity = "1";


    block1.classList.add("hide");
    block1.classList.remove("show");
    block.classList.add("show");
    block.classList.remove("hide");
}