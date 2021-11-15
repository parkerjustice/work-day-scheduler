var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var items = [];

var hour = moment().hours();

var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' ' + momentNow.format('dddd').substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

// Save button

// Not Finished Need Help
  var saveItems = function() {
    localStorage.setItem("items", JSON.stringify(items));
  }
  var loadItems = function() {
    var savedItems = localStorage.getItem("items");
  
    if (!savedItems) {
      return false;
    }
  
    savedItems = JSON.parse(savedItems);
    
for (var i = 0; i < savedItems.length; i++) {

  }
  }

  $("#5,  .row").val(localStorage.getItem("5"));
  $("#6 .row").val(localStorage.getItem("6"));
  $("#7 .row").val(localStorage.getItem("7"));
  $("#8 .row").val(localStorage.getItem("8"));
  $("#9 .row").val(localStorage.getItem("9"));
  $("#10 .row").val(localStorage.getItem("10"));
  $("#11 .row").val(localStorage.getItem("11"));
  $("#12 .row").val(localStorage.getItem("12"));
  $("#1 .row").val(localStorage.getItem("1"));
  $("#2 .row").val(localStorage.getItem("2"));
  $("#3 .row").val(localStorage.getItem("3"));
  $("#4 .row").val(localStorage.getItem("4"));
  $("#5.0 .row").val(localStorage.getItem("5"));
  $("#6.0 .row").val(localStorage.getItem("6"));
  $("#7.0 .row").val(localStorage.getItem("7"));
  $("#8.0 .row").val(localStorage.getItem("8"));

  function colorChanging(){
      var currentHour = moment().hour(); 
      
  }
  timeChange();
  var timeInterval = setInterval(timeChange, 1000);
