import { Gtodo } from "../../types/interface";

interface Props<T> {
  todos: Gtodo<T>[];
  toggle: (id: number) => void;
}

export default function GenericItem<T>({ todos, toggle }: Props<T>) {
  return (
    <ul>
      {todos?.map((todo) => {
        return (
          <li>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              {String(todo.text)}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
