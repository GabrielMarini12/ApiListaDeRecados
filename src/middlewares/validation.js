export function validateUserRegistration(request, response, next) {
  const { name, email, password } = request.body;

  if (!name) {
    return response.status(400).json({
      message: "Por favor, verifique se passou o nome.",
    });
  }

  if (!email) {
    return response.status(400).json({
      message: "Por favor, verifique se passou o e-mail.",
    });
  }

  if (!password) {
    return response.status(400).json({
      message: "Por favor, verifique se passou a senha.",
    });
  }

  next();
}

export function validadeUserLogin(request, response, next) {
  const { email, password } = request.body;

  if (!email) {
    return response.status(400).json({
      message: "Insira um e-mail válido.",
    });
  }

  if (!password) {
    return response.status(400).json({
      message: "Insira uma senha válida.",
    });
  }

  next();
}
