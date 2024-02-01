export function spongeMeme(input){
    let result = "";

    for(let i = 0; i < input.length; i++){
        result += i % 2 == 0 ? input[i].toUpperCase() : input[i].toLowerCase(); 
    }

    return result;
}