const express = require("express");
const connectDB = require("./DB/conn");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000'}));
app.use(cookieParser());

app.use(bodyParser.json({ limit: '100mb' }));


const PORT = process.env.PORT || 5000;
(
    async () => {
        try {
            await connectDB();
        } catch (err) {
            console.log(err);
        }

        app.use(require("./Routes/UserRoutes"));
        app.use(require("./Routes/BlogRoutes"));
        app.listen(PORT, () => console.log(`${process.env.DOMAIN}${PORT}`));
    }
)();