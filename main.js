const capitalizeSentences = function(str){
  let result ='';
  for(let i=0; i<str.length; i++){
    if(i===0){result+=str[0].toUpperCase();}//Uppercase the first letter.
    else if(str[i-1]===' '&&str[i-2]==='.'){result += str[i].toUpperCase();}
    //uppercase the letter follow`. `
    else{result += str[i].toLowerCase();}
  }
  return result
}

const isValidPassword = function(str){
  let result = str.length>=12;//valid password length greater than or equal to 12.
  for (let i=0; i<str.length; i++){
    result = result && (str[i] !==' ')
  }
  return result
}

const makeHalfSquares = function(arr){
  let result =[];
  for(let i=0; i< arr.length; i++){
    result.push((arr[i]**2)/2)
  }
  return result;
}

const countAs = function(arr){
  let result =0;
  for(let i=0; i<arr.length; i++){
    if(arr[i]>=90){result++}
  }
  return result;
}

const deleteMiddleLetters = function(str){
  let result = '';
  const oe = str.length % 2;
  for(let i=0; i<str.length; i++){
    if(oe ===1 && i !==(str.length-1)/2){
      result += str[i]}
    if(oe ===0&&i!==str.length/2-1&&i !== str.length/2){
      result += str[i]}
  }
  return result;
}

const lastIndexOfSpace = function(str){
  let results =[];
  for(let i=0; i<str.length; i++){
    if(str[i]===' '){results.push(i)}
  }
  if(results.length ===0){return -1;}//return -1 if no space in the string.
  return results[results.length-1];
}

const hyphenateName = function(str){
  let result = '';
  let results =[]
  for(let i=0; i<str.length;i++){
    if(str[i]===' '){results.push(i)}
  }
  result = str.slice(0,results[results.length-1])+'-'+
  str.slice(results[results.length-1]+1)//slice the str into 2 parts,base on the 
  //index of the last space. Connect two parts with'-'.
  return result;
}


if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
