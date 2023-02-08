import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./redux/modules/todos";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }) => todos.todos);

  const [todo, setTodo] = useState({
    id: "",
    title: "",
  });

  return (
    <>
      <div>
        <label>제목</label>
        <input
          type="text"
          value={todo.title}
          onChange={({ target: { value: title } }) => {
            setTodo((pre) => ({
              ...pre,
              id: new Date().toString(),
              title,
            }));
          }}
        />
        <button
          onClick={() => {
            dispatch(addTodo(todo));
          }}
        >
          Todo 추가하기
        </button>

        <br />
        <br />
        <h1>Todos!</h1>
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              style={{ display: "flex", alignItems: "center", gap: "15px" }}
            >
              <div key={todo.id}>{todo.title}</div>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
