
const section = document.querySelector("section");

const icecreams = [
  "내가 아인슈페너?!",
  "엄마는 외계인",
  "민트 초콜릿 칩",
  "뉴욕 치즈케이크",
  "아이스 초당옥수수",
  "초콜릿 무스",
  "체리쥬빌레",
  "뮤! 넌 내거야",
  "오레오 쿠키 앤 크림",
]; 

function icecreamEl(icecream,index){
return `<article class="article-box">
<img src="../img/icecream${index+1}.png" class="img-box">
<h3 class="text-center">Top ${index+1}</h3>
<div class="text-center">${icecream}</div>
</article>
`}

icecreams.forEach((icecream,index)=>{
    section.innerHTML+=icecreamEl(icecream,index)
}) 

// icecreams.forEach((icecream,index)=>{
//     let article=document.createElement('article')
//     article.classList.add('article-box')
//     section.append(article)

//     let img=document.createElement('img');
//     img.classList.add('img-box')
//     img.src=`../img/icecream${index+1}.png`
//     img.alt=`아이스크림${index+1}`

//     article.append(img)

//     let ranking=document.createElement('h3');
//     ranking.classList.add('text-center');
//     ranking.innerText=`Top${index+1}`
//     article.append(ranking)

//     let icereamName=document.createElement('div')
//     icereamName.classList.add('text-center')
//     icereamName.innerText=`${icecream}`
//     article.append(icereamName)
// }
// )