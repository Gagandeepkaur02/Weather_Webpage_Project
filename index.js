// var inputvalue = document.querySelector('cityinput')
// var btn = document.querySelector('#add');
// var city = document.querySelector('#cityoutput')
// var descrip = document.querySelector('#description')
// var temp = document.querySelector('#temp')
// var wind = document.querySelector('#wind')
// apik = "dcef1bda6721e8084bb7e8fe388f7414"
// function convertion(val)
// {
//     return (val - 273).toFixed(3)
// }
// btn.addEventListener('click', function()
// {
//   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
//   .then(res => res.json())

//   .then(data => 
//   {
//     var nameval = data['name']
//     var descrip = data['weather']['0']['description']
//     var tempature = data['main']['temp']
//     var wndspeed = data['wind']['speed']


//     city.innerHTML=`Weather of <span>${nameval}<span>`
//     temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
//     description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
//     wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h<span>`

//   })

//   .catch(err => alert('You entered Wrong city name'))
// })

// // btn.addEventListener('click', function()
// // {
// //     //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// //     fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputvalue.value+'&appid='+apik)
// //      .then(res => res.json())

// //      .then(data=>
// //      {
// //         var nameval = data['name']
// //         var descrip = data['weather']['0']['description']
// //         var temperature = data['weather']['temp']
// //         var windspeed = data['wind']['speed']

// //         city.innerHTML=`Weather of <span>${nameval}<span>`
// //         temp.innerHTML=`Temperature: <span>${temperature}<span>`
// //         description.innerHTML=`Sky Conditions: <span>${descrip}<span>`
// //         wind.innerHTML=`Wind Speed: <span>${windspeed}<span>`
// //      })

// //      .catch(err=> alert('You entered Wrong city name'))
// // })

var input = document.querySelector('#cityInput');
var submitButton = document.querySelector('#submitButton');
var cityOutput = document.querySelector('#cityOutput');
var weatherDescription = document.querySelector('#weatherDescription');
var temperature = document.querySelector('#temperature');
var windSpeed = document.querySelector('#windSpeed');

var apiKey = "dcef1bda6721e8084bb7e8fe388f7414"; // Replace with your API key

function convertKelvinToCelsius(val) {
    return (val - 273).toFixed(2); // Rounded to two decimal places
}

submitButton.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            var cityName = data['name'];
            var description = data['weather'][0]['description'];
            var temp = data['main']['temp'];
            var wind = data['wind']['speed'];

            cityOutput.innerHTML = `Weather of <span>${cityName}</span>`;
            temperature.innerHTML = `Temperature: <span>${convertKelvinToCelsius(temp)} °C</span>`;
            weatherDescription.innerHTML = `Sky Conditions: <span>${description}</span>`;
            windSpeed.innerHTML = `Wind Speed: <span>${wind} km/h</span>`;
        })
        .catch(err => alert('Please enter a valid city name.'));
});
