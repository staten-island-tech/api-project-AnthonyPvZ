import './style.css'

const URL = `https://api.imgflip.com/get_memes`;
async function getData(URL){
    try{
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText)
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
    }
    catch (error){
        console.log(error)
    }
}
getData(URL);
const memes = fetch(URL)
console.log(memes);
fetch(URL)
    .then((res)=>res.json())
    .then((data)=>{console.log(data)})
    .then



// generate a card
// const container = document.querySelector("#container")

// function create(blah){
//   blah.foreach((result)=>{
//     const card = document.createElement('div');
//     card.classlist = 'card'
//     const desc = `<img src="${result.url}">`
//     container.innerHTML = desc;
//     })
// }
// create()