import express from "express";
import cors from "cors";

import usersRouter from "./routes/users";
import notesRouter from "./routes/notes";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// end point de teste
app.get("/", (request, response) => {
  response.status(200).send("Bem vindo a aplicação!");
});

app.use("/users", usersRouter);
app.use("/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
