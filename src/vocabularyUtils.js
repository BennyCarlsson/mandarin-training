import vocabulary from "./vocabulary"

export const getWordsRandomized = (chapters = ["chapter1"]) => {
  let wordList = vocabulary
  let words = []
  chapters.forEach(chapter => (words = words.concat(wordList[chapter])))
  return shuffle(words.slice())
}

const shuffle = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export const scrambleOptions = rightOptionWord => {
  const gameWords = getAllWords()
  let scrambledOptions = []

  while (scrambledOptions.length < 4 && gameWords.length > 4) {
    const randomNumber = Math.floor(Math.random() * gameWords.length)
    if (
      gameWords[randomNumber] !== rightOptionWord &&
      !scrambledOptions.includes(gameWords[randomNumber])
    ) {
      scrambledOptions.push(gameWords[randomNumber])
    }
  }

  const nr = Math.floor(Math.random() * 4)
  scrambledOptions[nr] = rightOptionWord
  return scrambledOptions
}

//Todo this should be done once at the start, saved and reused
const getAllWords = () => {
  let wordList = []
  Object.values(vocabulary).forEach(chapter =>
    chapter.forEach(word => wordList.push(word))
  )
  return wordList
}
