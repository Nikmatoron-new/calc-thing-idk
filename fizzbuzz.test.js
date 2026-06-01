import { fizzbuzz } from './fizzbuzz.js';
import test from 'node:test';
import * as assert from 'node:assert';

test('fizzbuzz(1) er "1"', () => {
    assert.strictEqual(fizzbuzz(1), "1");
});

test('fizzbuzz(3) er "Fizz"', () => {
    assert.strictEqual(fizzbuzz(3), "Fizz");
});

test('fizzbuzz(5) er "Buzz"', () => {
    assert.strictEqual(fizzbuzz(5), "Buzz");
});

test('fizzbuzz(15) er "FizzBuzz"', () => {
    assert.strictEqual(fizzbuzz(15), "FizzBuzz");
});

test('fizzbuzz(6) er "Fizz"', () => {
    assert.strictEqual(fizzbuzz(6), "Fizz");
});

test('fizzbuzz(10) er "Buzz"', () => {
    assert.strictEqual(fizzbuzz(10), "Buzz");
});
