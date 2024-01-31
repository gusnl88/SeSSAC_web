//모듈만들기 export 이용
//따로 내보내기


export const animals=['pig','dog']
export function showAnimals(){
    animals.forEach((el)=>{console.log(el)})
}