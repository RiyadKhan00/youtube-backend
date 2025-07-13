import "dotenv/config";
import connectDb from "./db/index.js";
import { app } from "./app.js";

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(` Server is running at port : ${process.env.PORT}`);
    });

    app.on("error", (error) => {
      console.log("ERR", error);
    });
  })
  .catch((err) => {
    console.log("MOngo db connection failed !!!", err);
  });
