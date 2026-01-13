import express from "express";
import connectDB from "./db/conection";
import routes from "./routes/userRoutes";

const app = express();

//middleware para conectar a la base de datos
connectDB();

app.use(routes);

app.get("/", (_req, res) => {
	res.send("Hello World!");
});

export default app;
