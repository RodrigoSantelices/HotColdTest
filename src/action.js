export const GUESS = "GUESS";
export const guess = number =>({
    type: GUESS,
    number
})

export const NEW_GAME = "NEW_GAME";
export const newGame = ()=>({
    type: NEW_GAME
})

export const HELP = "HELP";
export const help = ()=>({
    type: HELP
})