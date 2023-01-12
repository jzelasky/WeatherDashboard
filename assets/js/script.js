// To Do:
// -create search history to local storage 
// -populate weather icon

$('#currentDay').text(' ' + dayjs().format('M/D/YYYY'));
$('#day1').text(dayjs().add(1,'day').format('M/D/YYYY'));
$('#day2').text(dayjs().add(2,'day').format('M/D/YYYY'));
$('#day3').text(dayjs().add(3,'day').format('M/D/YYYY'));
$('#day4').text(dayjs().add(4,'day').format('M/D/YYYY'));
$('#day5').text(dayjs().add(5,'day').format('M/D/YYYY'));

var APIkey = '0bceea21a9bd0380f36836e68695355a';
var searchCityEl = document.getElementById('searchCity');
var searchCityBtn = document.getElementById('searchCityBtn');
var savedCities = JSON.parse(localStorage.getItem('savedCity')) || [];
var savedEl = $('#savedContainer');
    
function formSubmitHandler(event) {
    event.preventDefault();
    populateInfo();
}

function populateInfo (){
    var city = searchCityEl.value.trim();
    var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + APIkey
    $('#cityName').text(city);
    if (city !== ''){
        savedCities.unshift(city);
    }
    localStorage.setItem('savedCity', JSON.stringify(savedCities));
    searchHistory();
    fetch(geoURL)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            var lat = data[0].lat;
            var lon = data[0].lon;
            var weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + APIkey + '&units=imperial'
            fetch(weatherURL)
                .then(function (response){
                    return response.json();
                })
                .then(function (data){
                    $('#day0temp').text(data.list[0].main.temp + ' °F')
                    $('#day0wind').text(data.list[0].wind.speed + ' mph')
                    $('#day0humidity').text(data.list[0].main.humidity + '%')
                    $('#day1temp').text(data.list[6].main.temp + ' °F')
                    $('#day1wind').text(data.list[6].wind.speed + ' mph')
                    $('#day1humidity').text(data.list[6].main.humidity + '%')
                    $('#day2temp').text(data.list[14].main.temp + ' °F')
                    $('#day2wind').text(data.list[14].wind.speed + ' mph')
                    $('#day2humidity').text(data.list[14].main.humidity + '%')
                    $('#day3temp').text(data.list[22].main.temp + ' °F')
                    $('#day3wind').text(data.list[22].wind.speed + ' mph')
                    $('#day3humidity').text(data.list[22].main.humidity + '%')
                    $('#day4temp').text(data.list[30].main.temp + ' °F')
                    $('#day4wind').text(data.list[30].wind.speed + ' mph')
                    $('#day4humidity').text(data.list[30].main.humidity + '%')
                    $('#day5temp').text(data.list[38].main.temp + ' °F')
                    $('#day5wind').text(data.list[38].wind.speed + ' mph')
                    $('#day5humidity').text(data.list[38].main.humidity + '%')
                    
                    var iconURL = 'http://openweathermap.org/img/wn/'
                    $('#icon0').attr('src', iconURL + data.list[0].weather[0].icon + '@2x.png');
                    $('#icon1').attr('src', iconURL + data.list[6].weather[0].icon + '@2x.png');
                    $('#icon2').attr('src', iconURL + data.list[14].weather[0].icon + '@2x.png');
                    $('#icon3').attr('src', iconURL + data.list[22].weather[0].icon + '@2x.png');
                    $('#icon4').attr('src', iconURL + data.list[30].weather[0].icon + '@2x.png');
                    $('#icon5').attr('src', iconURL + data.list[38].weather[0].icon + '@2x.png');
                })
        })
}

function searchHistory () {
    savedEl.text('')
    for (let i = 0; i < savedCities.length; i++){
        var newBtn = document.createElement('button')
        newBtn.textContent = savedCities[i]
        savedEl.append(newBtn);
        newBtn.classList.add('btn', 'btn-secondary', 'm-2');
        newBtn.addEventListener('click', searchHistoryBtns);
    }
}

function searchHistoryBtns() {
    //function to take city name from buttons and run populate info function
}

function init () {
    if (localStorage.getItem('savedCity')){
        var city = JSON.parse(localStorage.getItem('savedCity')).slice(0, 1).toString();
    } else {
        var city = 'London'
    }
    var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + APIkey
    $('#cityName').text(city);
    if (city !== ''){
        savedCities.unshift(city);
    }
    fetch(geoURL)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            var lat = data[0].lat;
            var lon = data[0].lon;
            var weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + APIkey + '&units=imperial'
            fetch(weatherURL)
                .then(function (response){
                    return response.json();
                })
                .then(function (data){
                    $('#day0temp').text(data.list[0].main.temp + ' °F')
                    $('#day0wind').text(data.list[0].wind.speed + ' mph')
                    $('#day0humidity').text(data.list[0].main.humidity + '%')
                    $('#day1temp').text(data.list[6].main.temp + ' °F')
                    $('#day1wind').text(data.list[6].wind.speed + ' mph')
                    $('#day1humidity').text(data.list[6].main.humidity + '%')
                    $('#day2temp').text(data.list[14].main.temp + ' °F')
                    $('#day2wind').text(data.list[14].wind.speed + ' mph')
                    $('#day2humidity').text(data.list[14].main.humidity + '%')
                    $('#day3temp').text(data.list[22].main.temp + ' °F')
                    $('#day3wind').text(data.list[22].wind.speed + ' mph')
                    $('#day3humidity').text(data.list[22].main.humidity + '%')
                    $('#day4temp').text(data.list[30].main.temp + ' °F')
                    $('#day4wind').text(data.list[30].wind.speed + ' mph')
                    $('#day4humidity').text(data.list[30].main.humidity + '%')
                    $('#day5temp').text(data.list[38].main.temp + ' °F')
                    $('#day5wind').text(data.list[38].wind.speed + ' mph')
                    $('#day5humidity').text(data.list[38].main.humidity + '%')
                    
                    var iconURL = 'http://openweathermap.org/img/wn/'
                    $('#icon0').attr('src', iconURL + data.list[0].weather[0].icon + '@2x.png');
                    $('#icon1').attr('src', iconURL + data.list[6].weather[0].icon + '@2x.png');
                    $('#icon2').attr('src', iconURL + data.list[14].weather[0].icon + '@2x.png');
                    $('#icon3').attr('src', iconURL + data.list[22].weather[0].icon + '@2x.png');
                    $('#icon4').attr('src', iconURL + data.list[30].weather[0].icon + '@2x.png');
                    $('#icon5').attr('src', iconURL + data.list[38].weather[0].icon + '@2x.png');
                })
        })
    
}

searchCityBtn.addEventListener('click', formSubmitHandler);
searchHistory();
init();