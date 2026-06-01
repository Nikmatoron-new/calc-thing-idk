// FizzBuzz: returnerer "Fizz" (delelig med 3), "Buzz" (delelig med 5),
// "FizzBuzz" (delelig med begge), eller tallet som streng ellers.
// Viktig: sjekk 15 FØR 3 og 5, ellers vil 15 matche "Fizz" først.
export function fizzbuzz(tall) {
    if (tall % 15 === 0) return "FizzBuzz";
    if (tall % 3 === 0) return "Fizz";
    if (tall % 5 === 0) return "Buzz";
    return tall.toString();
}
