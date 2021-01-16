import { useContext } from "react";
import { Card } from "semantic-ui-react";
import Todo from "./Todo";
import TodoContext from "../context/context";

const TodoCard = ({ bucket }) => {
  const { todos, _ } = useContext(TodoContext);
  const filteredTodos = todos.filter((todo) => todo.bucket === bucket);

  return (
    <Card className="bucket-card">
      <Card.Header>
        <h3>{bucket}</h3>
      </Card.Header>
      <Card.Content>
        {filteredTodos.map((todo) => {
          return (
            <Todo
              key={todo.title}
              id={todo.id}
              title={todo.title}
              status={todo.status}
            />
          );
        })}
      </Card.Content>
    </Card>
  );
};

export default TodoCard;
