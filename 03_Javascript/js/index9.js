let dom1=document.getElementById('green');

console.log(dom1);

let dom2=document.getElementsByClassName('box')

console.log(dom2)

for(let dom of dom2){
    console.log(dom);
}

let dom4= document.getElementsByName('userName')
console.log(dom4)

let dom5= document.querySelector('#red')
console.log(dom5)

let dom6=document.querySelectorAll('div');
console.log(dom6)

let two= document.getElementById('two');

// two.innerHTML='<strong>강조</strong>'
// two.textContent='        textContent<strong>강조</strong>.!@#'
let a=document.createElement('p')
let parents=document.querySelector('.parent')
let parentChildren=parents.children;
let parentChildNodes=parents.childNodes;


console.log('children',parentChildren)
console.log('childNodes',parentChildNodes)

let child1=document.createElement('div')
child1.innerText='div 네번째 text'

parents.append(child1)
function eventClass(){
    if(dom1.className ==='box box1'){
        dom1.classList.remove('box1')
        dom1.style.backgroundColor='green';

    }else{
        dom1.classList.add('box1')
        dom1.style.backgroundColor='white';

    }
}
