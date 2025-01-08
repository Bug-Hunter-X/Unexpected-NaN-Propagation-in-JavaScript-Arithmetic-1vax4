# Unexpected NaN Propagation in JavaScript Arithmetic

This repository demonstrates a common, yet subtle, error in JavaScript related to the propagation of NaN (Not a Number) during arithmetic operations.  JavaScript's dynamic typing, while flexible, can lead to unexpected behavior if not handled carefully.

## The Bug

The `myFunction` subtracts two numbers.  While it works correctly for typical numeric inputs, the presence of NaN results in NaN being returned regardless of the other operand.  This is because any arithmetic operation involving NaN always results in NaN.

## The Solution

The solution involves adding input validation to explicitly check for NaN before performing the subtraction.  This ensures that the function handles unexpected inputs gracefully, either by returning a default value or throwing an error.