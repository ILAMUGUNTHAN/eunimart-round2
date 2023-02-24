import { tweetModel } from "../Schema/TweetSchema.js";

export const addtweet = (req, res) => {
  const body = req.body;
    const tweet = new tweetModel({
      tweet: body.tweet,
      tweetId : Math.floor(1000 + Math.random() * 9000)
    });
    tweet.save((err, data) => {
      if (err) {
        return res.send(err);
      } else {
        return res.status(200).send({
          message: "tweet added successfully!!",
        });
      }
    });
};

