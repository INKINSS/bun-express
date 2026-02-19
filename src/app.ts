import express from "express";
import connectDB from "./db/conection";
import postRoutes from "./routes/postRoutes";
import userRroutes from "./routes/userRoutes";

const app = express();

//middleware para conectar a la base de datos
connectDB();

app.use(express.json());

app.use("/api/v1/user", userRroutes);
app.use("/api/v1/post", postRoutes);

app.get("/hello", (_req, res) => {
	res.send("Hello World!");
});

export default app;
