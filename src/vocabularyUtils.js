import vocabulary from "./vocabulary"

export const getWordsRandomized = (chapters = ["chapter1"]) => {
  if (chapters[0] === "quickplay") {
    return quickPlay()
  }
  let wordList = vocabulary
  let words = []
  chapters.forEach(chapter => (words = words.concat(wordList[chapter])))
  return shuffle(words.slice())
}
const quickPlay = () => {
  let wordList = vocabulary
  let words = []
  for (let chapter in wordList) {
    words = words.concat(wordList[chapter])
  }
  return getRandomFromArray(words, 10)
}
const getRandomFromArray = (arr, n) => {
  let result = new Array(arr)
  let len = arr.length
  let taken = []
  if (n > len) return []
  while (n--) {
    var x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
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
  if (!rightOptionWord) return []
  const gameWords = getAllWords()
  let scrambledOptions = []

  //Todo fix problem if to few of a word with that length
  const relevantWords = gameWords.filter(
    word => word.chinese.length === rightOptionWord.chinese.length
  )
  while (scrambledOptions.length < 4 && relevantWords.length > 4) {
    const randomNumber = Math.floor(Math.random() * relevantWords.length)
    const currentWord = relevantWords[randomNumber]
    if (
      currentWord !== rightOptionWord &&
      !scrambledOptions.includes(currentWord) &&
      currentWord.pinyin !== rightOptionWord.pinyin
    ) {
      scrambledOptions.push(currentWord)
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
