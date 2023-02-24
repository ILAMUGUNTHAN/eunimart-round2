import express from "express";
import { register } from "../Controllers/UserSignup.js";
import { login } from "../Controllers/Login.js";
import { addtweet } from "../Controllers/PostTweet.js";
import { tweets } from "../Controllers/DisplayTweet.js";
import { Delete } from "../Controllers/DeleteTweet.js";

const Route = express.Router();

Route.post("/signup", register);
Route.post("/login", login);
Route.post("/tweet", addtweet);
Route.get("/tweetlist", tweets);
Route.delete("/deleteTweet", Delete);

export default Route;
