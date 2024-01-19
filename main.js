const targetDate = new Date(2024, 0, 19, 9, 30).getTime()

const countdownTimerHtml = document.getElementById("countdownTimer")


const pippo = setInterval(function(){
    let currentTime = new Date().getTime()

    let timeDifference = targetDate - currentTime
    // console.log(timeDifference)

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((timeDifference % (1000 *  60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeDifference % (1000 *  60)) / 1000)

    console.log(days, hours, minutes, seconds)
    
    countdownTimerHtml.innerHTML = `Mancano ${days} giorni,  ${hours} ore ${minutes} minuti e ${seconds} secondi alla lezione di domani `
    
    if (timeDifference <= 0){
        clearInterval(pippo)
    } else{

    }

}, 1000)





