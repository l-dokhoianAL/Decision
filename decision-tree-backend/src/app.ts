import express from "express";
import bodyParser from 'body-parser';
import treeRouter from "./routes/treeRouter";

const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use('/', treeRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
