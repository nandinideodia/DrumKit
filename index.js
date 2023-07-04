
for(let i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handeClicks)
}

function handeClicks(){
    let sound = new Audio("sounds/tom-1.mp3")
    sound.play()
}
