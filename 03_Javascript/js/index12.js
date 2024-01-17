let input=document.querySelector('.input')

input.addEventListener("keydown",(e)=>{
    console.log(e.target)
    console.log(e.key)
    console.log(e.target.value)
})
document.addEventListener("scroll",()=>{
    console.log("스크롤")
})