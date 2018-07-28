// from data.js
var tableData = data;
var tbody = d3.select("tbody");

console.log(tableData);

// YOUR CODE HERE!
function showTable(data){
	tbody.text("");
	data.forEach(function(sightings) {
	var row = tbody.append("tr");
	Object.entries(sightings).forEach(function([key, value]){
    var cell = tbody.append("td");
    cell.text(value);
  });
})};

showTable(tableData)


var inputText = d3.select("#datetime")
var button = d3.select("#filter-btn")

// filter data with desired date
function updateTable(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var newTable = tableData.filter(sighting => sighting.datetime===inputText.property("value"));
    showTable(newTable);
};

// event listener to handle change and click

button.on("click", updateTable);