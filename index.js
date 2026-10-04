let homeScore = 0
let guestScore = 0
let homeScoreMarker = document.getElementById("homeScoreBoard")
let guestScoreMarker = document.getElementById("guestScoreBoard")

//HOME
function right1Add(){
    homeScore += 1
    homeScoreMarker.textContent = homeScore
}

function right2Add(){
    homeScore += 2
    homeScoreMarker.textContent = homeScore
}

function right3Add(){
    homeScore += 3
    homeScoreMarker.textContent = homeScore
}

//GUEST
function guest1Add(){
    guestScore += 1
    guestScoreMarker.textContent = guestScore
}

function guest2Add(){
    guestScore += 2
    guestScoreMarker.textContent = guestScore
}

function guest3Add(){
    guestScore += 3
    guestScoreMarker.textContent = guestScore
}