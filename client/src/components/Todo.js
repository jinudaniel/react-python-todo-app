import { useContext } from "react";
import { Grid, Button, Icon } from "semantic-ui-react";

import TodoContext from "../context/context";
const Todo = ({ id, title, status }) => {
  const { todos, setTodos } = useContext(TodoContext);
  return (
    <>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column
            className={status === "complete" ? "completed-todo" : ""}
          >
            {title}
          </Grid.Column>
          <Grid.Column floated="right">
            {status === "active" ? (
              <Button
                size="small"
                color="green"
                onClick={async () => {
                  const response = await fetch(`/update_status/${id}/complete`);
                  if (response.ok) {
                    const updatedTodos = todos.map((todo) => {
                      if (todo.id === id) {
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
                  const response = await fetch(`/update_status/${id}/active`);
                  if (response.ok) {
                    const updatedTodos = todos.map((todo) => {
                      if (todo.id === id) {
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
                const response = await fetch(`/delete_todo/${id}`);
                if (response.ok) {
                  const newTodos = todos.filter((todo) => todo.id !== id);
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
