const cors = require("cors");
const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();

app.use(cors());

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:1337/api/coordinators");
    // console.log(response.);

    const coordinators = response.data.data;
    res.render("index", { coordinators });
  } catch (error) {
    console.log(error);
    res.render("index", { coordinators: [] });
  }
});

app.get("/appdev", (req, res) => {
  res.render("pages/appdev/appdev");
});

app.get("/webdev", (req, res) => {
  res.render("pages/webdev/webdev");
});

app.get("/activities", async (req, res) => {
  try {
    const response = await axios.get(
      "http://localhost:1337/api/events?populate=*"
    );
    const events = response.data.data;
    // console.log(events[0].image.url);
    events.forEach((event) => {
      event.image.url = `http://localhost:1337${event.image.url}`;
    });

    res.render("pages/activities/activities", { events });
  } catch (error) {
    console.log(error);
    res.render("pages/activities/activities", { events: [] });
  }
});

app.get("/contact", (req, res) => {
  res.render("pages/contact-us/contact-us");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
