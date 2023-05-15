const clapAudioElement=document.getElementById("clapAudio")
const playClapAudio=()=>{
    clapAudioElement.play()

}

const hiHatAudioElement=document.getElementById("hiHatAudio")
const playHiHatAudio=()=>{
    hiHatAudioElement.play()

}

const kickAudioElement=document.getElementById("kickAudio")
const playKickAudio=()=>{
    kickAudioElement.play()
}    

const openHatAudioElement=document.getElementById("openHatAudio")
const playOpenHatAudio=()=>{
    openHatAudioElement.play()
}

const boomAudioElement=document.getElementById("boomAudio")
const playBoomAudio=()=>{
    boomAudioElement.play()
}

const rideAudioElement=document.getElementById("rideAudio")
const playRideAudio=()=>{
    rideAudioElement.play()
}

const snareAudioElement=document.getElementById("snareAudio")
const playSnareAudio=()=>{
    snareAudioElement.play()
}

const tomAudioElement=document.getElementById("tomAudio")
const playTomAudio=()=>{
    tomAudioElement.play()
}

const tinkAudioElement=document.getElementById("tinkAudio")
const playTinkAudio=()=>{
    tinkAudioElement.play()
}


addEventListener("keydown", (event) => {
    switch (event.key) {
        case "A":
            //console.log("A")
playClapAudio();
            break; 
            case "S":
                //console.log("S")
    playHiHatAudio();
                break;
            case "D": 
                //console.log("D")
    playKickAudio();
                break;
            case "F":   
               //console.log("F")
    playOpenHatAudio();
                break;
            case "G":
               //console.log("G")
    playBoomAudio();
                break; 
            case "H":
               //console.log("H") 
    playRideAudio();
                break;
            case "J": 
               //console.log("J")
    playSnareAudio();
                break; 
            case "K":
               //console.log("K")
    playTomAudio();
                break; 
            case "L":
            //console.log("L")  
    playTinkAudio();        

        default:
            break;
    }
});