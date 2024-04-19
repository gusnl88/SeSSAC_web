interface Todo {
    id: number;
    text: string;
    done: boolean;
  }

  export interface Gtodo<T>{
    id:number,
    text:T,
    done:boolean
  }

  export interface Post {
    id: number;
    title: string;
    body: string;
  }
  export interface MatzipForm{
    imgSrc:string,
    title:string,
    desc:string,
    idx:number,
}