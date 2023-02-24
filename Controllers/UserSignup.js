import { NewUserModel } from "../Schema/SignupSchema.js";

export const register = async (req, res) => {
    const user = new NewUserModel({
      Firstname: req.body.Firstname,
      Middlename: req.body.Middlename,
      Lastname: req.body.Lastname,
      Age: req.body.Age,
      UserID: req.body.UserID,
      email: req.body.email,
      Mobile: req.body.Mobile,
      Password: req.body.Password,
    });
    user.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "User Created",
        })
    });
  }