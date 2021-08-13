 function typeWriter(elemento){
        const textoArray = elemento.innerHTML.split("")
       elemento.innerHTML = ""
        for(let i=0;i<textoArray.length;i++){
            setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i)
        }
    }


function background(){
    const res = document.querySelector(`#res`)
    const github = document.querySelector(`github`)
    const linkein = document.querySelector(`linkedin`)
    const gmail = document.querySelector(`gmail`)
    const instagram = document.querySelector(`instagram`)
    const facebook = document.querySelector(`facebook`)
    const twitter = document.querySelector(`twitter`)
    const youtube = document.querySelector(`youtube`)
    const twitch = document.querySelector(`twitch`)
        if(onmousemove.github){
            background.github="blue"
        }
}

