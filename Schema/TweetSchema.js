import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    tweet: {
      type: String,
      required: true
    },
    tweetId: {
      type: String
    }
  },
  { timestamps: true }
);
export const tweetModel = new mongoose.model("tweet", tweetSchema);
