

document.querySelector('button').addEventListener('click', getName)

function getName(){

  let inputVal = document.querySelector('input').value
  const url = `http://strainapi.evanbusse.com/ifxBSG6/strains/search/name/${inputVal}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      

        console.log(data)
        if(data.length === 0) alert('try again..')
       
        let name = data[0].name 
        
        let type = data[0].race
        let info = data[0].desc
          if(name === null) name = data[1].name
          if(info === null) info = data[1].desc


          document.getElementById('name').innerText = name
          document.getElementById('type').innerText = type
          document.querySelector('h3').innerText = info
      })
      .catch(err => {
          console.log(`error ${err}`)
      })

}
