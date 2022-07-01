//solução 1
function palindromo(string) {
    if (!string) return "String vazia: adicione uma string.";
    if (string === " ") return "Adicione uma string.";

    return string.split("").reverse().join("") === string;
}

console.log(palindromo("reviver"));

// solução 2
function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("gato"));
