type TodoItemProps = {
    name:{
        date : string;
        work: string;
    }
}

export const TodoListItem = (props:TodoItemProps) => {
    return(
        <>
        <div>{props.name.date}</div>
        <div>{props.name.work}</div>
        </>
    )
}