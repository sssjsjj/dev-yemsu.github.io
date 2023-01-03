export const randomRgba = (min, max, opacity = 1) => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const randomByte = () => randomNumber(min, max)
  const randomCssRgba = `rgba(${[randomByte(), randomByte(), randomByte(), opacity].join(',')})`
  return randomCssRgba
}

export const isDarkMode = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;