let container=document.querySelector('.container')
let greenBox=document.querySelector('#green')
let redBox=document.querySelector('#red')

// parentNode:부모 요소를 가져온다.
function getParent(){
    console.log(greenBox.parentNode);
}
function pElimtSibling(){
    console.log(redBox.previousElementSibling)
}
function pNodeSibling(){
    console.log(redBox.previousSibling)
}

function nElimtSibling(){
    console.log(redBox.nextElementSibling)
}
function nNodeSibling(){
    console.log(redBox.nextSibling)

}