import express from "express";
import authRoutes from "./Routes/auth.js";
import userRoutes from "./Routes/users.js";
import postRoutes from "./Routes/posts.js";
import {db} from "./db.js"
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());


app.get("/get", function (req, res) {
  res.status(200).json({msg:"success"});
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(3001, () => {
db.connect((err) => {
    if (err)console.log(err)
    console.log('Database connected')
  })
});
