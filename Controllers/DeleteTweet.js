import { tweetModel } from "../Schema/TweetSchema.js"

export const Delete = (req, res) => {

    tweetModel.deleteOne({
        tweetId: req.params.tweetId
    }, (err, data) => {
        return res.send({
            status: 200,
            message: "Data deleted",
            data: data
        });
    })
}
