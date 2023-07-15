function isSandwich(string){
    const vowels = ['a','e','i','o','u'];
    const consonants = 'bcdfghjklmnpqrstvwxyz';

    if(string.length != 3){
        return false;
    }
    const firstCharacter = string[0].toLowerCase();
    const middleCharacter = string[1].toLowerCase();
    const lastCharacter = string[2].toLowerCase();

    if(consonants.includes(firstCharacter) && vowels.includes(middleCharacter) && consonants.includes(lastCharacter)){
        return true;
    }
    return false;

}


console.log(isSandwich("car"));  
console.log(isSandwich("aba"));  
console.log(isSandwich("xyx")); 