import { body } from "express-validator";

export const registerValidator = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Напиши корректный пароль (от 6 до 12 символов)").isLength({
    min: 6,
    max: 12,
  }),
  body(
    "fullName",
    "Напишите корректное имя (От 2 до 15 символов) У кого больше идите нахуй пидорасы"
  ).isLength({ min: 2, max: 15 }),
  body("avatarURL", "Аватар не найден, посмешище").optional().isURL(),
];
