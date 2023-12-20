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

fetch(URL).then((response)=>{if(response.ok){return response.json()}}).then(data=>{console.log(data);showmeme(data)})

function showmeme(data){
    const meme = data.memes[1]
    const memediv = document.getElementById("#h1")
    const memename = meme.name
    const title = document.createElement("h1")
    title.innerHTML = memename
}

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