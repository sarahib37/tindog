// import files here

import {dogs} from './data.js';
import {heart, reject} from './utils.js'

// declare variables here

let dogList = ["Rex", "Bella", "Teddy"]

// event listener here 

document.addEventListener('click', function(e){
    

    if(e.target.id == 'heart'){
        heart()
        setTimeout(function(){
            renderSelectedDog()
        }, 3000)
    }

    if(e.target.id == 'reject'){
        reject()
        setTimeout(function(){
            renderSelectedDog()
        }, 3000)
    }
})

// functions

function getMainDogHtml(){
    let selectedDog = dogList.shift()
    let mainDogHtml = ''
    dogs.filter(function(dog){
        if (selectedDog == dog.name){
            const {name, avatar, age, bio} = dog
            
            
            mainDogHtml = `
                <section class="main-dog">
                    <img src="${avatar}" class="main-dog-image">
                    <img src="images/badge-like.png" class="like-badge hidden" id="like-badge">
                    <img src="images/badge-nope.png" class="nope-badge hidden" id="nope-badge">

                        <div class="intro">
                            <h2 class="dog-name">${name}, ${age}</h2>
                            <p class="dog-info">${bio}</p> 
                        </div>  
                </section>`            
        }
        
    })
    return mainDogHtml
}

function renderSelectedDog(){
    document.getElementById('main-dog').innerHTML = getMainDogHtml()

}

renderSelectedDog()

