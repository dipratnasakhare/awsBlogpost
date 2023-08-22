import express from "express";
import authRoutes from "./Routes/auth.js";
import userRoutes from "./Routes/users.js";
import postRoutes from "./Routes/posts.js";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());


app.get("/api/get", function (req, res) {
  res.status(200).json({msg:"welcome to backend"});
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(3001, () => {
    console.log('Database connected')
});
