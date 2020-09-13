var UFO = data;

var button = d3.select("#filter-btn");

var form = d3.select("#form");

var tbody = d3.select("tbody");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(UFO);

    var filteredData = UFO.filter(date => date.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(sightingReport) {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });

};