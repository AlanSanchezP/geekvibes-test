function esPalindromo(palabra) {
    return palabra.split('').reverse().join('') === palabra;
}