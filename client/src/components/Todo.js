import { useContext } from "react";
import { Grid, Button, Icon } from "semantic-ui-react";

import TodoContext from "../context/context";
const Todo = ({ title, status }) => {
  const { todos, setTodos } = useContext(TodoContext);
  return (
    <>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column className={status === "complete" && "completed-todo"}>
            {title}
          </Grid.Column>
          <Grid.Column floated="right">
            {status === "active" ? (
              <Button
                size="small"
                color="green"
                onClick={async () => {
                  const response = await fetch(
                    `/update_status/${title}/complete`
                  );
                  if (response.ok) {
                    const updatedTodos = todos.map((todo) => {
                      if (todo.title === title) {
                        todo.status = "complete";
                      }
                      return todo;
                    });
                    setTodos(updatedTodos);
                  }
                }}
              >
                Done
              </Button>
            ) : (
              <Button
                size="small"
                primary
                onClick={async () => {
                  const response = await fetch(
                    `/update_status/${title}/active`
                  );
                  if (response.ok) {
                    const updatedTodos = todos.map((todo) => {
                      if (todo.title === title) {
                        todo.status = "active";
                      }
                      return todo;
                    });
                    setTodos(updatedTodos);
                  }
                }}
              >
                Active
              </Button>
            )}
          </Grid.Column>
          <Grid.Column floated="left">
            <Button
              icon
              onClick={async () => {
                const response = await fetch(`/delete_todo/${title}`);
                if (response.ok) {
                  const newTodos = todos.filter((todo) => todo.title !== title);
                  setTodos(newTodos);
                }
              }}
            >
              <Icon name="delete" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Todo;
