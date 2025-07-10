const errorMessages = {
  en: {
    nameRequired: "Name is required",
    nameTooShort: "Name must be at least 2 characters long",
    emailRequired: "Email is required",
    emailInvalid: "Email is invalid",
    emailIsMine: "Hey, that's my email!",
    messageRequired: "Message is required",
    messageTooShort: "Message must be at least 10 characters long",
  },
  es: {
    nameRequired: "El nombre es requerido",
    nameTooShort: "El nombre debe tener al menos 2 caracteres",
    emailRequired: "El correo electrónico es requerido",
    emailInvalid: "El correo electrónico no es válido",
    emailIsMine: "¡Ey, ese es mi correo!",
    messageRequired: "El mensaje es requerido",
    messageTooShort: "El mensaje debe tener al menos 10 caracteres",
  },
};

const validateContactForm = (
  formData: {
    name?: string;
    email?: string;
    message?: string;
  },
  language: string
) => {
  const name = formData.name?.toString().trim();
  const email = formData.email?.toString().trim();
  const message = formData.message?.toString().trim();

  const errors: { [key: string]: string } = {};

  const messages =
    errorMessages[language as keyof typeof errorMessages] || errorMessages.en;

  if (!name) {
    errors.name = messages.nameRequired;
  } else if (name.length < 2) {
    errors.name = messages.nameTooShort;
  }

  if (!email) {
    errors.email = messages.emailRequired;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = messages.emailInvalid;
  } else if (email === "martutavella@gmail.com") {
    errors.email = messages.emailIsMine;
  }

  if (!message) {
    errors.message = messages.messageRequired;
  } else if (message.length < 10) {
    errors.message = messages.messageTooShort;
  }

  return errors;
};

export default validateContactForm;
