import { tweetModel } from "../Schema/TweetSchema.js";

export const tweets = (req, res) => {
    tweetModel.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            return res.send({
                status: 200,
                message: "Data found",
                data: data,
            });
        }
    });
};
