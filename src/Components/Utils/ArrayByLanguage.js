const __lang__ = localStorage.getItem('forlanso_language');
export const ArrayByLanguage = (arr) => {
    if(__lang__ === "en" || __lang__ === undefined){
       return arr
   }else{
       const newArray = [];
       for(let i = arr.length - 1;i >= 0;i--){
            newArray.push(arr[i])
       }
       return newArray;
   }
}