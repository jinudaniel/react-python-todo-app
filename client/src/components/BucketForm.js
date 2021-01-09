import { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

const BucketForm = () => {
  const [title, setTitle] = useState("");

  return (
    <>
      <Form className="todo-form">
        <Form.Group>
          <Form.Field>
            <Input
              placeholder="Add Bucket..."
              value={title}
              width={10}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Button
              onClick={async () => {
                const bucket = { title };
                const response = await fetch("/add_bucket", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(bucket),
                });

                if (response.ok) {
                  setTitle("");
                }
              }}
            >
              Create Bucket
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </>
  );
};

export default BucketForm;
