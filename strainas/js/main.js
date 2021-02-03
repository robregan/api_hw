
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

//
// function getFetch(){
//   const poke1 = document.querySelector('#poke1').value
//   const poke2 = document.querySelector('#poke2').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
//   const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
//   let pokeStore = []
//   let pokeImg = []
//
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//
//         pokeStore.push(data.types[0].type.name)
//         pokeImg.push(data.sprites.front_shiny)
//
//         fetch(url2)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//
//           pokeStore.push(data.types[0].type.name)
//           pokeImg.push(data.sprites.front_shiny)
//
//           if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
//             document.querySelector('#pokeImg1').src = pokeImg[0]
//             document.querySelector('#pokeImg2').src = pokeImg[1]
//             document.querySelector('h2').innerText = " 2x > "
//           }
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
//
//
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
//
//
//
//
// }

//
// function makeLi(name, imgURL, imgText, type, desc) {
//   return `<li>
//     <h2>${name}</h2>
//     <img src=${imgURL} alt=${imgText}
//     <span>${type ?? "Type not available"}</span>
//     <p>${desc ?? "No description available"}</p>
//   </li>`;
// }
//
// document.querySelector("button").addEventListener("click", getName);
//
// function getName(inputVal) {
//   const url = `http://strainapi.evanbusse.com/ifxBSG6/strains/search/name/${inputVal}`;
//   fetch(url)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       // forEach((data, i) => {
//       //   console.log([data.desc]);
//       // });
//
//       console.log(data);
//       data = data.filter((strain) => strain.desc);
//       let list = "";
//       for (let i = 0; i < 10; i++) {
//         const strain = data[i];
//         if (strain) {
//           list += makeLi(strain.name, strain.race, strain.desc);
//         }
//       }
//       console.log(list || "Sorry, we can't find information on that strain.");
//       document.getElementById("list").insertAdjacentHTML("beforeend", list);
//     })
//     .catch((err) => {
//       console.log(error`${err}`);
//       console.log("Sorry, we can't find information on that strain.");
//     });
// }
//
