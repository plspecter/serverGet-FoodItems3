//Grab dependencies 

var express = require("express");
var handlebars = require("express-handlebars")

//Create an app for express to be used in 

var app = express();

//app now contains express

//Set the port 
var PORT = process.env.PORT || 8096

//Set handlebars as the default templating engine for html 
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//data

var breakfast = [
    {
        breakfast: "maple syrup"
    },
    {
        breakfast: "thick pancake stack"
    },
    {
        breakfast: "berry bowl"
    }
]

var lunch = [
    {
        lunch: "steamed hams"
    },
    {
        lunch: "steamed hams"
    },
    {
        lunch: "steamed hams"
    }
]

var dinner = [
    {
        dinner: "waluigi primivera"
    },
    {
        dinner: "skidaddle skinoodle"
    },
    {
        dinner: "noodle"
    }

]

//ROUTES

//this is /breakfast in the URL
app.get("/breakfast", function (req, res) {
    //this is looking to render the breakfast.handlebars
    res.render("breakfast", {
        foods: breakfast,
        eater: "Squ"
    })
})

//this is /lunch in the URL
app.get("/lunch", function (req, res) {
    //this is looking to render the lunch.handlebars 
    res.render("lunch", {
        foods: lunch,
        eater: "Danny Devito"
    });
})

//this is /dinner in the URL
app.get("/dinner", function (req, res) {
     //this is looking to render the dinner.handlebars 
    res.render("dinner", {
        foods: dinner,
        eater: "mike"
    });
})

//START our server so that it can begin listening to client requests 
app.listen(PORT, function() {
    console.log("server is listening on: http://localhost:" + PORT);
});