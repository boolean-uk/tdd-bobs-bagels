const dolphinScore = [99, 98, 97]
const koalaScore = [100, 101, 99]

function calcAverage (scoresArray) {
    let sum = 0
    let averageScore = 0
    for ( let i = 0; i < scoresArray.length; i++ ){
        sum += scoresArray[i];
        averageScore = sum / scoresArray.length
    }
    return averageScore
}

function checkWinner (dolphinScore, koalaScore) {
    if ( calcAverage(dolphinScore) > calcAverage(koalaScore) ) {
        return console.log("the Dolphins win with " + calcAverage(dolphinScore) + " vs the Koala's score of " + calcAverage(koalaScore))
    }
    if ( calcAverage(dolphinScore) < calcAverage(koalaScore) ) {
        return console.log("the Koalas win with " + calcAverage(koalaScore) + " vs the Dolphin's score of " + calcAverage(dolphinScore))
    }
    return "scores are equal"
}

const winner = checkWinner (dolphinScore, koalaScore)