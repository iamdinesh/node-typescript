import app from "./server";
import config from "./config";

const {port} = config;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
