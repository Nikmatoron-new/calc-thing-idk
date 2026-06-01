// Fakultet (n!) = produktet av alle heltall fra 1 til n
// Eksempel: 5! = 5 × 4 × 3 × 2 × 1 = 120
// Spesialtilfeller: 0! = 1, negative tall = 1 (udefinert matematisk)
export function fakultet(tall) {
    if (tall <= 0) return 1;
    let resultat = 1;
    for (let i = 1; i <= tall; i++) {
        resultat *= i;
    }
    return resultat;
}