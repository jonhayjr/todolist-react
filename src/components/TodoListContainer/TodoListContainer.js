const TodoListContainer = ({children}) => {
    return (
        <div className="grid mt-5 gap-5 w-2/3 mx-auto sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-auto w-1/2">
            {children}
        </div>
    )
}

export default TodoListContainer
