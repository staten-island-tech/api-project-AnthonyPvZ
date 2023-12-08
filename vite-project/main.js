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
        document.querySelector("h1").textContent = data.content;
        document.querySelector("h2").textContent = data.author;
    } catch (error){
        document.querySelector("h1").textContent = `sorry I cannot find ${pokemon}`
    }

}
getData(URL);

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
// create(memes)