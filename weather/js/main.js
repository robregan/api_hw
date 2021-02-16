
document.querySelector('button').addEventListener('click', getWeather)

const key = 'hidden'

function getWeather(){
let spot = document.querySelector('input').value


const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${spot}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let tempF = data.current.temp_f
        let condition = data.current.condition.text

        document.getElementById('temp').innerText = `The current weather for "${spot}" is ${tempF}°F and ${condition}`
      })


      .catch(err => {
          console.log(`error ${err}`)
      });
}
