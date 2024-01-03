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
        const TwoBtns = x.filter(function(b){
            return b.name.includes("Two Buttons")
        })
        console.log(TwoBtns)
        for(let i=0;i<x.length; i++){

            // console.log(x[i]);              
        } 
        console.log(response);
    }
    catch (error){
        console.log(error)
    }
}
console.log(getData(URL));

const searchmemes = async(name)=>{
    const response = await fetch(URL)
    const data = await response.json();
    console.log(data)
    return data
}

const whenclicked = async()=>{
    let name = document.getElementById("meme").value
    console.log(name)
    let result = await searchmemes(name)
    let memes = result.data.memes.length > 0 ? result.data[0] : null
    console.log(memes)
    if (memes){
        document.getElementById("name").innerText = `Meme: ${memes["name"]}`
        document.getElementById("image").innerHTML = `URL: ${memes["url"]}`
}
}
document.getElementById("query").onclick = whenclicked
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