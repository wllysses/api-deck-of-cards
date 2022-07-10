import { baseUrl } from '/src/scripts/variables.js'

async function drawACard(deck_id) {
    const url = `${baseUrl}/${deck_id}/draw/?count=1`
    const response = await fetch(url)
    return await response.json()
}

export { drawACard }