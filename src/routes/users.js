import express from "express";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

import {
  validateUserRegistration,
  validadeUserLogin,
} from "../middlewares/validation";

const router = express.Router();

export const users = [];

router.post("/signup", validateUserRegistration, async (request, response) => {
  const { name, email, password } = request.body;

  const emailJaCadastrado = users.find((user) => user.email === email);

  if (emailJaCadastrado) {
    return response.status(400).json({
      message: "E-mail já cadastrado, insira outro.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 11);

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  response.status(201).json({
    message: `Seja bem vindo(a) ${name}! Pessoa usuária registrada com sucesso!`,
    user: newUser,
  });
});

router.post("/login", validadeUserLogin, async (request, response) => {
  try {
    const { email, password } = request.body;

    const user = users.find((user) => user.email === email);

    if (!user) {
      return response.status(404).json({
        message:
          "E-mail não encontrado no sistema, verifique ou crie uma conta.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return response.status(400).json({
        message: "Senha inválida, tente novamente!",
      });
    }

    return response.status(200).json({
      message: `Seja bem vindo(a) ${user.name}! Pessoa usuária logada com sucesso!`,
    });
  } catch (error) {
    response.status(500).json({
      message: "Erro ao fazer login",
      erro: error,
    });
  }
});

export default router;
