// Set up the initial variables to call our data, the button, form, and body of the page
var UFO = data;

var button = d3.select("#filter-btn");

var form = d3.select("#form");

var tbody = d3.select("tbody");

// Tell the function to run if the button is clicked or enter is pressed on the form
button.on("click", runEnter);
form.on("submit", runEnter);

// Create run enter function
function runEnter() {
  // Prevent the page from refreshing
    d3.event.preventDefault();
    // Create variables to hold all of our searh terms
    var inputDate= d3.select("#datetime");

    var inputDateValue = inputDate.property("value");

    var inputState = d3.select("#state");

    var inputStateValue = inputState.property("value");

    var inputCity= d3.select("#city");

    var inputCityValue = inputCity.property("value");

    var inputCountry = d3.select("#country");

    var inputCountryValue = inputCountry.property("value");

    var inputShape = d3.select("#shape");

    var inputShapeValue = inputShape.property("value")

    // Console log to check our work
    console.log(inputValue);
    console.log(UFO);

    // Make sure all the values are strings and uppercase
    const getValue = value => (typeof value === 'string' ? value.toUpperCase() : value);
    // Create a filter to allow 1-5 different search values
    function filterPlainArray(array, filters) {
        const filterKeys = Object.keys(filters);
        return array.filter(item => {
          // Validate all filter criteria
          return filterKeys.every(key => {
            // Ignore an empty filter
            if (!filters[key][0].length) return true;
            return filters[key].find(filter => getValue(filter) === getValue(item[key]));
          });
        });
    };

    // Set up our filters to match with the input values
    const filters = {
        datetime: [inputDateValue],
        state: [inputStateValue],
        city: [inputCityValue],
        country: [inputCountryValue],
        shape: [inputShapeValue],
      };
    // Create a new variable to hold all the filtered data
    var filteredDataB = filterPlainArray(UFO,filters);

    console.log(filteredDataB);
    
    // Add each result from the filtered dataset to the table
    filteredDataB.forEach(function(sightingReport) {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });
};