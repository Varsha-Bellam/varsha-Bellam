function reverseWordsAndSortDescending(sentence) {
    function reverseWord(word) {
        let reversed = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        return reversed;
    }

    const words = sentence.split(' ');

    let reversedSentence = '';
    for (let i = 0; i < words.length; i++) {
        reversedSentence += reverseWord(words[i]);
        if (i < words.length - 1) {
            reversedSentence += ' ';
        }
    }
    console.log("Reversed Sentence: " + reversedSentence);
}

const inputSentence = "This is a sunny day";
reverseWordsAndSortDescending(inputSentence);
