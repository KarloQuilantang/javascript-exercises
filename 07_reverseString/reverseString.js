const reverseString = function(words) {
const stringLength = words.length;
text = ""

for (let i = stringLength - 1; i >= 0; i--){
    text += words[i]
}
return text;
};

// Do not edit below this line
module.exports = reverseString;
