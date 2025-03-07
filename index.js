import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
})

app.post("/submit", (req, res) => {
  const name = req.body["userName"];
  const email = req.body["email"];
  const password = req.body["password"];
  const confirmPassword = req.body["confirmPassword"];
  console.log(name);
  console.log(email);
  console.log(password);
  console.log(confirmPassword);


  
  res.render("home.ejs", { inputedName: name });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
