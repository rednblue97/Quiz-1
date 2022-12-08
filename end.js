const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.getElementById('#finalScore')
const mostRecentScore = localStorage.getItem('#mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

finalScore.innerText = mostRecentScore

highScores = e => {
    e.preventDefault()

    const score = { 
        score: mostRecentScore,
        name: username.value
    }
    
    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })


    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('end.html')

}
