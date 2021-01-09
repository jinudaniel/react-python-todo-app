import { useState, useContext } from "react";
import { Form, Input, Button, Dropdown } from "semantic-ui-react";

import TodoContext from "../context/context";

const TodoForm = ({ buckets }) => {
  const [title, setTitle] = useState("");
  const [bucket, setBucket] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const bucketOptions = buckets.map((bucket) => {
    return {
      key: bucket.id,
      text: bucket.title,
      value: bucket.title,
    };
  });

  return (
    <>
      <Form className="todo-form">
        <Form.Group>
          <Form.Field>
            <Input
              placeholder="Add Todo..."
              value={title}
              width={10}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Dropdown
              placeholder="Select Bucket"
              fluid
              selection
              options={bucketOptions}
              onChange={(e, { value }) => setBucket(value)}
            />
          </Form.Field>
          <Form.Field>
            <Button
              onClick={async () => {
                console.log(bucket);
                const todo = { title, bucket, status: "active" };
                const response = await fetch("/add_todo", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(todo),
                });

                if (response.ok) {
                  setTitle("");
                  const newTodos = [
                    ...todos,
                    { title, bucket, status: "active" },
                  ];
                  setTodos(newTodos);
                }
              }}
            >
              Submit
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </>
  );
};

export default TodoForm;
