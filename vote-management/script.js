let votes = {
    'Party A': 0,
    'Party B': 0,
    'Party C': 0,
    'Party D': 0
};

function castVote(party) {
    votes[party]++;
    alert(`Vote cast for ${party}!`);
}

function showResult() {
    let maxVotes = -1;
    let winners = [];

    for (const [party, count] of Object.entries(votes)) {
        if (count > maxVotes) {
            maxVotes = count;
            winners = [party];
        } else if (count === maxVotes) {
            winners.push(party);
        }
    }

    const resultBox = document.getElementById('resultBox');
    const winnerText = document.getElementById('winnerText');

    resultBox.style.display = 'block';

    if (maxVotes === 0) {
        winnerText.textContent = "No votes cast yet!";
    } else if (winners.length > 1) {
        winnerText.textContent = `Tie between ${winners.join(' & ')} with ${maxVotes} votes!`;
    } else {
        winnerText.textContent = `${winners[0]} with ${maxVotes} votes!`;
    }
}
