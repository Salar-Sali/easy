import { useState } from "react";
import { styled } from "styled-components";

export type Todo = {
  id: number;
  text: string;
};

type TodoAppProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoApp({ todos, setTodos }: TodoAppProps) {
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Header>Wir werden anbieten</Header>
      <InputSection>
        <TodoInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Dienst hinzufügen."
        />
        <AddButton onClick={addTodo}>Hinzufügen</AddButton>
      </InputSection>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <TodoText>{todo.text}</TodoText>
            <DeleteButton onClick={() => removeTodo(todo.id)}>
              Löschen
            </DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </div>
  );
}

// Styled-components
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
  background-color: #f4f4f4;
  border-radius: 8px;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

const InputSection = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const TodoInput = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4caf50;
  }
`;

const AddButton = styled.button`
  margin-left: 10px;
  padding: 12px 20px;
  font-size: 1rem;
  background-color: #f17e01;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f17e01;
    transform: scale(1.05);
  }

  &:active {
    background-color: #f17e01;
  }
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TodoText = styled.span`
  flex: 1;
  color: #333;
  font-weight: 500;
`;

const DeleteButton = styled.button`
  padding: 6px 12px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #e53935;
    transform: scale(1.05);
  }

  &:active {
    background-color: #c62828;
  }
`;
