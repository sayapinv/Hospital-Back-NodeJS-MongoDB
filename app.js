const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8000;

const cors = require('cors');
const mongose = require('mongoose');
const app = express();

const apiRoutes = require("./src/modules/routes/routes")

app.use(cors());

const uri = "mongodb+srv://admin:7NCzpik0GbqWinpL@cluster0.kwcb8.mongodb.net/reactproject?retryWrites=true&w=majority";
mongose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());
app.use("/",apiRoutes);

app.listen(PORT, () => {
  console.log(`Start server on port ${PORT}`);
});
