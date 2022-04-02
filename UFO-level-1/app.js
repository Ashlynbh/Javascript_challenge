// from data.js
var tableData = data;

// Get a reference to the table body
var ufo_table = d3.select("ufo-table");

// Console.log the data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(function(uforeport) {
console.log(uforeport);
});

data.forEach((uforeport) => {
  var row = ufo_table.append("tr");
  Object.entries(uforeport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value)  });
  });

// Select the button
var button = d3.select("filter-btn");
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufo_table);

  var filteredData = tableData.filter(item => tableData.datetime === inputValue);

  console.log(filteredData);
  

  // append filtered data to the table 
  filteredData.forEach(function(item) {
    var row = tbody.append("tr");
    Object.entries(item).forEach(function([key,value]) {
      var cell = row.append("td");
      cell.text(value)  });
    })};