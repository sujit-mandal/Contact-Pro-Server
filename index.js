const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w7djr5h.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const contactsCollection = client.db("contactDB").collection("contacts");

    app.post("/add-contact", async (req, res) => {
      const contact = req.body;
      const result = await contactsCollection.insertOne(contact);
      console.log(contact);
      console.log(result);
      res.send(result);
    });

    app.get("/contacts", async (req, res) => {
      const result = await contactsCollection.find().toArray();
      res.send(result);
    });
    app.delete("/delete/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await contactsCollection.deleteOne(query);
      console.log(result);
      res.send(result);
    });
    app.patch("/update/:id", async (req, res) => {
      const id = req.params.id;
      const contact = req.body;
      const query = { _id: new ObjectId(id) };
      const updatedContact = {
        $set: {
          name: contact.name,
          email: contact.email,
          phoneNumber: contact.phoneNumber,
          address: contact.address,
          photo: contact.photo,
        },
      };
      const result = await contactsCollection.updateOne(query, updatedContact);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Contact Pro is available");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
