import express from "express";
import * as db from "./db";

const app = express();

app.get("/", (req, res) => res.status(200).send(db.getTodoList()));
app.post("/", express.json(), (req, res) =>
  res.status(200).send(db.addTodo(req.body))
);
app.put("/:priority", express.json(), (req, res) => {
  db.editTodo(+req.params.priority, req.body);
  res.sendStatus(200);
});
app.delete("/:priority", express.json(), (req, res) => {
  db.removeTodo(+req.params.priority);
  res.sendStatus(200);
});

app.listen(process.env.PORT, () =>
  console.log("App listening on port ", process.env.PORT)
);
