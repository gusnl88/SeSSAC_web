console.log(document.querySelector('#li'));




function createNode(){
    let li=document.createElement('li')
    li.innerText='새로 추가된 리스트'

    let ul =document.querySelector('ul')

    ul.append(li)
    console.log(li)
}

function appendNode(){
    let li=document.createElement('li')
    li.innerText='새로 추가된 리스트'
    let ul =document.querySelector('ul')

    ul.append(li)
}

function appendChildNoe(){
    let li=document.createElement('li')
    li.innerText='새로 추가된 리스트'

    let ul =document.querySelector('ul')
    ul.appendChild(li)
}

function prependNode(){
    let li=document.createElement('li')
    li.innerText='새로 추가된 리스트'

    let ul =document.querySelector('ul')
    ul.prepend(li)

}

function before(){
    let standard=document.getElementById('li')
    let li=document.createElement('li')

    li.innerText='before'
    standard.before(li)
}

function after(){
    let standard=document.getElementById('li')
    let li=document.createElement('li')

    li.innerText='after'
    standard.after(li)   
}

function removeNode(){
    let standard=document.getElementById('li')

    standard.remove();
}

function removeChildNode(){
    let ul=document.querySelector('ul')
    let standard=document.getElementById('li')

    console.log(ul.removeChild(standard))
}