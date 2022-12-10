// Setting up variables
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

finalScore.innerHTML = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.score
})


highScores = e => {
    e.preventDefault()

    const score = { 
        score: mostRecentScore,
        name: username.score
    }
    
    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
 })
// Displays latest user score
   document.getElementById("finalScore").value = finalScore
}


