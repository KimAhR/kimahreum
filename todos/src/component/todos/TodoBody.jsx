import styled from "styled-components";
import { useTodoDispatch } from "../../context/todos";
import TodoItem from "./TodoItem";

function TodoBody() {
  const todos = useTodoDispatch();

  return (
    <Container>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;
export default TodoBody;
