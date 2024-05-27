/** @format */
import joi from "joi";

export const schema = joi.object({
  email: joi.string().required().email().lowercase(),
  fullname: joi.string().required().lowercase(),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{5,30}$")),
  username: joi.string().required().min(5).lowercase(),
  image: joi.string(),
});
