const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const mongoDBURI = 'mongodb+srv://dinesh103:dinesh103DINESH103@cluster0.3pvw9hk.mongodb.net/shopping-site?retryWrites=true&w=majority';
const cors = require("cors");
const productsRouter = require("./routes/products.routes");

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

//router

app.use("/product", productsRouter)

mongoose.connect(mongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
