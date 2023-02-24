import { NewUserModel } from "../Schema/SignupSchema.js";

export const login = async (req, res) => {
  const body = req.body;
  const data = await NewUserModel.findOne({ userEmail: body.userEmail });

  if (data) {
    const validPassword = await compare(
      body.Password,
      data.Password
    );
    if (validPassword) {
      res.status(200).send({ message: "Login success"});
    } else {
      res.status(400).send({ error: "Invalid Credentials" });
    }
  } else {
    res.status(401).send({ error: "User does not exist" });
  }
};
