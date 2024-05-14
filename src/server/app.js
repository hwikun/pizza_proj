const express = require("express");
const cors = require("cors");
const app = express();
const port = 8082;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/user");
const pizzaRouter = require("./routes/pizza");
const eventRouter = require("./routes/event");

app.use("/api/user", userRouter);
app.use("/api/pizza", pizzaRouter);
app.use("/api/event", eventRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
