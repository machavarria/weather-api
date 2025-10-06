//Allow user to be able to enter in city and country and return the temperature in F//

document.querySelector('button').addEventListener('click', getTheWeather);


function getTheWeather(){
    const inputs = document.querySelectorAll('input')
    const cityName = inputs[0].value;
    const countryCode = inputs[1].value;
    const apikey = 'e363f1d1feaea35f05ffa105f9fb5fe5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apikey}&units=imperial`;


    fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data)


            const fahrenheit = data.main.temp


            document.querySelector('h2').innerText = `The weather in ${data.name}, ${data.sys.country}`
            document.querySelector('h3').innerText = `Temperature: ${fahrenheit.toFixed(1)} °F`
        })


    .catch(err => {
        console.log(`error ${err}`)
    })
}