
let price = document.querySelector("#price")
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

updatePrice()

function updatePrice() {

  fetch(url)
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    let currentprice = data.bpi.USD.rate_float
    price.textContent = `The current price of one bitcoin is $${currentprice} in USD`
  })
  .catch((err) => console.log(String(err)))

}
