const {app} = require('rohit-node-app');
const requireDir = require('require-dir');
require('dotenv').config();
const {HOST , PORT} = process.env;




requireDir('controllers' , {recurse: true});
// Routing



// SideBar Routing--------Start----
app.get("/", (req, res) => {
    res.render("login")
})
app.get("/add", (req, res) => {
    res.render("add")
})
app.get("/list", (req, res) => {
    res.render("list")
})
app.get("/search", (req, res) => {
    res.render("search")
})
app.get("/update", (req, res) => {
    res.render("update")
})
app.get("/update", (req, res) => {
    res.render("index")
})
app.get("/delete", (req, res) => {
    res.render("index")
})
app.get("/see", (req, res) => {
    res.render("index")
})
// SideBar Routing--------End----

// Nabar Routing-----start-----
app.get("/staff", (req, res) => {
    res.render("staff")
})
app.get("/home", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/service", (req, res) => {
    res.render("service")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})

// Nabar Routing-----End-----

app.listen(PORT , () => {
    console.log("Server is running on http://" + HOST+':'+PORT )
})