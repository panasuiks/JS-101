function neutralize(sentence) {
  let words = sentence.split(" ");

  let result = words.filter(word => !isNegative(word));
  return result.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.