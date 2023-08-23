function heart(){
    document.getElementById('like-badge').classList.remove('hidden')
    document.getElementById('nope-badge').classList.add('hidden')
}


function reject(){
    document.getElementById('nope-badge').classList.remove('hidden')
    document.getElementById('like-badge').classList.add('hidden')
}



export {heart, reject}