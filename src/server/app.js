const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/user");
const pizzaRouter = require("./routes/pizza");

app.use("/api/user", userRouter);
app.use("/api/pizza", pizzaRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
