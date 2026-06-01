// Fibonacci-sekvensen: 1, 1, 2, 3, 5, 8, 13, 21, ...
// Hvert tall er summen av de to foregående: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
// Bruker iterativ tilnærming (løkke) i stedet for rekursjon for å unngå
// eksponensiell tidsbruk ved store n-verdier.
export function fibonacci(n) {
    if (n <= 2) return 1;
    let a = 1, b = 1;
    for (let i = 2; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
