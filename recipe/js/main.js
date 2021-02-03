
document.querySelector('button').addEventListener('click', getRecipe)

// API Key: ef96caddbb7d4c80aee278813c47e163

function getRecipe(){
const inputVal = document.querySelector('input').value
const url = `https://api.spoonacular.com/recipes/complexSearch?=${inputVal}&apiKey=ef96caddbb7d4c80aee278813c47e163`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
