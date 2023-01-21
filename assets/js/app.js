const sliceInfo = ()=>{
    
    const sliceDiv = document.querySelector('#slice') 
    const gridX = 4
    const gridH = 10

    const w = sliceDiv.offsetWidth
    const h = sliceDiv.offsetHeight
    const imgSrc = document.querySelector('#slice img').src
    const delay = .5

    // console.log([w , h ]);
    // createSlice()

    for (let x = 0; x < gridX; x++) {
        const width = x * w / gridX + "px" 
        const div = document.createElement('div')
        sliceDiv.appendChild(div)

        div.style.left = width
        div.style.top = 0
        div.style.width = w / gridX + "px";
        // div.style.height = h + "px";
        // div.style.height = h / gridH + "px";
        div.style.height = "100%";

        // div.style.backgroundImage = 'url('+imgSrc+')';
        div.style.backgroundPosition = "-" + width;
        div.style.backgroundSize = w + "px";
        div.style.animationDelay = x * delay + 's' 
    }

 

 

}

const createSlice = ()=>{

}

sliceInfo()
