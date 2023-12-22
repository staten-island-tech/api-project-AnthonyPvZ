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
        let x = Array.from(data.data.memes)
        for(let i=0;i<x.length; i++){
            console.log(x[i]);              
        } 
        console.log(response);
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