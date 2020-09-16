var UFO = data;

var button = d3.select("#filter-btn");

var form = d3.select("#form");

var tbody = d3.select("tbody");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();

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

    // console.log(inputValue);
    // console.log(UFO);

    // function filterArray(array, filters) {
    // var filteredDate = UFO.filter(date => date.datetime === inputDateValue);
    // var filteredState = UFO.filter(state => state.state === inputStateValue);
    // var filteredData = filteredData.filter(city => city.city === inputCityValue);
    // var filteredData = filteredData.filter(country => country.country === inputCountryValue);
    // var filteredData = filteredData.filter(shape => shape.shape === inputValueShape);

    const getValue = value => (typeof value === 'string' ? value.toUpperCase() : value);

    function filterPlainArray(array, filters) {
        const filterKeys = Object.keys(filters);
        return array.filter(item => {
          // validates all filter criteria
          return filterKeys.every(key => {
            // ignores an empty filter
            if (!filters[key].length) return true;
            return filters[key].find(filter => getValue(filter) === getValue(item[key]));
          });
        });
    };
    

    const filters = {
        datetime: [inputDateValue],
        state: [inputStateValue],
        city: [inputCityValue],
        country: [inputCountryValue],
        shape: [inputShapeValue],
      };

    var filteredDataB = filterPlainArray(UFO,filters);

    console.log(filteredDataB);

    filteredDataB.forEach(function(sightingReport) {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });

};