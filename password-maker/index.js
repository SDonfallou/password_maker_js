const dataLowercase ="azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^,;:!*ù=)\"&é'(-è_çà";
 

function generatePassword() {
   let data = [];
    
   if (lowercase.checked) data.push(...dataLowercase);
   if (uppercase.checked) data.push(...dataUppercase);
   if (numbers.checked) data.push(...dataNumbers);
   if (Symbols.checked) data.push(...dataSymbols);

   console.log(data[Math.random() * data.length]);
   

}

generateButton.addEventListener("click", generatePassword);