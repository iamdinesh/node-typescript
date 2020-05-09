import express from "express";
import cors from "cors";

const app = express();

const allowedHosts = ["http://test.com"];

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedHosts.indexOf(origin) === -1) {
        cb(new Error("Not allowed by CORS"));
      } else {
        cb(null, true);
      }
    }
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/api/test/get-result", (req, res) => {
  const auth = req.headers.auth;
  return res.status(200).send(auth ? "It works !!" : "Auth not available :(");
});

export default app;
