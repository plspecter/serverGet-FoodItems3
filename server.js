//Grab dependencies 

var express = require("express");
var handlebars = require("handlebars")

//Create an app for express to be used in 

var app = express();

//app now contains express

//Set the port 
var PORT = process.env.PORT || 8096

//Set handlebars as the default templating engine for html 
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//data

var breakfeast = [
    {
        breakfeast: "maple syrup"
    },
    {
        breakfeast: "thick pancake stack"
    },
    {
        breakfeast: "berry bowl"
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

app.get