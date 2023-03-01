const passwordRegex =
  /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/;

export const validationPassword = (password) => {
  if (!passwordRegex.test(password) && password !== "")
    return "La contraseña debe contener 8 caracteres mínimo, minúscula, mayúscula, número y signo especial";
  return "";
};
