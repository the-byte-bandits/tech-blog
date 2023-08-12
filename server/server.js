const express = require("express");
const connectDB = require("./DB/conn");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

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
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
    }
)();
