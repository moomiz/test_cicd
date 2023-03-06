import { TodoListItem } from "./TodoListItem"

type TodoListProps = {
    names: {
        date : string;
        work: string;
    }[];
}

export const TodoList = (props: TodoListProps) => {
    return (
        <div>
            {props.names.map((name) => {
                return (
                    <TodoListItem name={name}/>
                )
            })}
        </div>
    )
}