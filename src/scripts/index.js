import { shuffleDeck }  from '/src/scripts/services/shuffle.js'
import { drawACard } from '/src/scripts/services/draw.js'

async function draw() {
    const deck = await shuffleDeck()
    const card = await drawACard(deck.deck_id)
    const viewCard = card.cards[0].image
    document.getElementById('card').src = viewCard
}

document.getElementById('btn-draw').addEventListener('click', () => {
    draw()
})