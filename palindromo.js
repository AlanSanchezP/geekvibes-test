function esPalindromo(palabra) {
    return palabra.replace(/\s/g, '').split('').reverse().join('') === palabra.replace(/\s/g, '');
}