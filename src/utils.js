export const scrambleOptions = (gameWords, questionIndex) => {
  let scrambledOptions = []

  while (scrambledOptions.length < 4 && gameWords.length > 4) {
    const randomNumber = Math.floor(Math.random() * gameWords.length)
    if (
      randomNumber !== questionIndex &&
      !scrambledOptions.includes(randomNumber)
    ) {
      scrambledOptions.push(randomNumber)
    }
  }

  const nr = Math.floor(Math.random() * 4)
  scrambledOptions[nr] = questionIndex
  return scrambledOptions
}
