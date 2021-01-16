import { useEffect, useState } from "react";
import { Container, Card } from "semantic-ui-react";

import "./App.css";
import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";
import BucketForm from "./components/BucketForm";
import TodoContext from "./context/context";

function App() {
  const [buckets, setBuckets] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/buckets");
      const result = await response.json();
      setBuckets(result.buckets);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/todos");
      const result = await response.json();
      setTodos(result.todos);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <TodoContext.Provider value={{ todos, setTodos }}>
        <Container>
          <h1>TODO App</h1>
          <BucketForm />
          <TodoForm buckets={buckets} />
          <Card.Group centered>
            {todos &&
              buckets.map((bucket) => {
                return <TodoCard key={bucket.title} bucket={bucket.title} />;
              })}
          </Card.Group>
        </Container>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
