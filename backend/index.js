const express = require("express");
const mongoose = require("mongoose");
const { validateInput } = require("./zod");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:Ei5u3PLbXvDhBvSa@cluster0.3deicl3.mongodb.net/")
  .then(() => {
    app.listen(3000, () => console.log("App is listening on port 3000"));
  })
  .catch(() => {
    console.error("Unable to connect to the database");
  });

const Intern = mongoose.model("Intern", {
  username: {
    type: String,
    required : true,
    unique : true
  },
  refferalCode: {
    type: String,
    required : true
  },
  amountRaised: {
    type: Number,
    required : true
  },
});

async function addToDb(username, refferalCode, amountRaised) {
  try {
    const intern = new Intern({ username, refferalCode, amountRaised });
    return await intern.save();
  } catch (err) {
    console.error("Error saving to DB:", err);
    return null;
  }
}

app.post("/", async (req, res) => {
  const { username, refferalCode, amountRaised } = req.body;

  const result = validateInput.safeParse({ username, refferalCode, amountRaised });

  if (!result.success) {
    return res.status(400).json({ message: "Invalid input", errors: result.error.format() });
  }

  const added = await addToDb(username, refferalCode, amountRaised);

  if (!added) {
    return res.status(500).json({ message: "Unable to add to the database" });
  }

  return res.status(201).json({ message: "Added to database successfully", data: added });
});

app.get("/", async (req, res) => {
  try {
    const data = await Intern.find();
    return res.status(200).json({ message: "Fetched data successfully", data });
  } catch (err) {
    console.error("Error fetching data:", err);
    return res.status(500).json({ message: "Unable to fetch data from the database" });
  }
});
