export const UpperCaseFirstLetter = word =>{
   const wordInArray = word.split("")
   const firstLetter = wordInArray[0].toUpperCase();
   wordInArray.splice(0,1);
   const newWord = `${firstLetter}${wordInArray.join("")}`;
   return newWord
}