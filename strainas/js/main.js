
document.querySelector('button').addEventListener('click', getName)

function getName(){

  let inputVal = document.querySelector('input').value
  const url = `http://strainapi.evanbusse.com/ifxBSG6/strains/search/name/${inputVal}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // forEach((data, i) => {
        //   console.log([data.desc]);
        // });

        console.log(data)
        let info = data[0].desc


        document.querySelector('h3').innerText = info

      })
      .catch(err => {
          console.log(`error ${err}`)
      })

}
