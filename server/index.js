const config = require('./config');
const mongoose = require('mongoose');
mongoose.connect(config.DB_HOST, { useUnifiedTopology: true, useNewUrlParser: true });

const express = require('express');
const app = express();
const cors = require('cors');

const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use(cors({ origin: ['https://mern-stack-nqt.herokuapp.com', 'http://localhost:3000'] }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`))
