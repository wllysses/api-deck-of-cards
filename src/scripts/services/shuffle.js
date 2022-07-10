import { baseUrl } from '/src/scripts/variables.js'

async function shuffleDeck() {
    const url = `${baseUrl}/new/shuffle/?deck_count=1`
    const response = await fetch(url)
    return await response.json()
}

export { shuffleDeck }