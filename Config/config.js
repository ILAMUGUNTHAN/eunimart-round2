import morgan from "morgan";

const logger = morgan("combined");

const mongoUrl = `mongodb+srv://ilamugunthan:Ilamugunthan123@cluster0.dafyl32.mongodb.net/?retryWrites=true&w=majority`;

export { logger, mongoUrl };
