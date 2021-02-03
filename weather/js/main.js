
document.querySelector('button').addEventListener('click', getWeather)



function getWeather(){
let spot = document.querySelector('input').value
// key for  weatherapi.com ba151991832f4d089fe202428212901

const url = `http://api.weatherapi.com/v1/current.json?key=ba151991832f4d089fe202428212901&q=${spot}`
const url2 = `https://maps.googleapis.com/maps/api/place/findplacefromtext/output?${spot}`
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
