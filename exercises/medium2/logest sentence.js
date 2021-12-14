/*
P:
Input:
  string
Output:
  longest sentence among the string (long = number of words)

E:

D:
input as string
split into sentence strings?
process into array to count words?




A:
set array = break into sentence array
set index = findmaxsentenceindex(array)
return array[index]


break into sentence array
set array = []
while (true)
  find first punction
  if first punctuation = -1 break
  array.push(string.slice(0, first punctation + 1))
  string = array.slice(first puncation + 1).trim();



return arrar[find max index]


findmaxsentenceindex(array)
set sentence length = []
for i = 0, i < array length, i + 1
  sentence length = array[i].split(' ').length

set index = 0
set max length = 0
for i for i = 0, i < sentence array length, i + 1
  if sentencearray[i] > maxlength
    maxlength = sentenceArray[i]
    index = i;


return index

find first punctation index 
  set index = -1;
  set array of punctuation
  for (punctation of punctuation) 

    if (index punctuation > index)
      index = index punctuation

  return index
*/


function longestSentence(text) {
let sentenceArray = breakIntoSentenceArray(text);
let index = findMaxSentenceIndex(sentenceArray);
return array[index];
}

function breakIntoSentenceArray(text) {
  debugger;
  let array = [];
  while (true) {
    debugger;
    let firstPunctuation = findFirstPunctuationIndex(text)
    if (firstPunctuation < 0) break;
    array.push(text.slice(0, firstPunctuation + 1));
    debugger;
    string = text.slice(firstPunctuation + 1).trim();
  }
  return array;
}

function findFirstPunctuationIndex(text) {
  const PUNCTUATION = ['.', '!', '?'];
  let punctuationIndex = []
  for (let i = 0; i < PUNCTUATION.length; i += 1) {
    punctuationIndex[i] = text.indexOf(PUNCTUATION[i]);
  }
  punctuationIndex.sort((a, b) => b - a);
  return punctuationIndex[0];
}


function findMaxSentenceIndex(sentenceArray) {
  let sentenceLengthArray = []
  for (let i = 0; i < sentenceArray.length; i += 1) {
    sentenceLengthArray[i] = sentenceArray[i].split(' ').length;
  };
  let index = 0;
  let maxLength = 0;
  for (let i = 0; i < sentenceLengthArray.length; i += 1) {
    if (sentenceLengthArray[i] > maxLength) {
      maxLength = sentenceLengthArray[i];
      index = i;
    }
  }
  return index;
}

debugger;

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");