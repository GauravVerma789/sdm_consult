const mongoose = require("mongoose");
const dotenv=require("./dotenv/lib/main");
dotenv.config();
const MONGO_URL=process.env.MONGO_URL;
mongoose.connect(MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)


.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

const detailSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  service: String,
  message: String,
});

const Detail = mongoose.model("Detail", detailSchema);

module.exports = { Detail };
