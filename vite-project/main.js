import './style.css'

const URL = `https://api.imgflip.com/get_memes`;
async function getData(URL){
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        if (response.status != 200) {
            throw new Error(response.statusText)
        }
        console.log(response);
        document.getElementById("#h1s").textcontent = data.memes[2].name
    }
    catch (error){
        console.log(error)
    }
}
console.log(getData(URL));


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