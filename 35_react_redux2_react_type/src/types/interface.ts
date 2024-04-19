
export interface TodoState{
    list:{id:number,text:string,done:boolean}[],
    nextId?:number
}

export interface RootState {
    todo: TodoState;
  }