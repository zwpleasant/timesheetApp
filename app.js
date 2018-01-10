var config = {
    apiKey: "AIzaSyDnzm32Tdr74dQ8jclUegVq0XZzKyVwMC8",
    authDomain: "timesheet-62069.firebaseapp.com",
    databaseURL: "https://timesheet-62069.firebaseio.com",
    projectId: "timesheet-62069",
    storageBucket: "timesheet-62069.appspot.com",
    messagingSenderId: "804270347117"
};

firebase.initializeApp(config);


var database = firebase.database();

// Initial variables 
var name = "";
var role = "";
var start = "";
var rate = "";

// Click Button changes what is stored in firebase
$("#click-button").on("click", function() {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get inputs
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    start = $("#start-input").val().trim();
    rate = $("#rate-input").val().trim();

    // Change what is saved in firebase
    database.ref().push({
        name: name,
        role: role,
        start: start,
        rate: rate
    });


// calculate months worked
// use moment from start date


// calculate total pay
// multiply months worked by monthly pay