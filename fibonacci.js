function Fibonacci(n)
{
  let previous = 0;
  let current = 1;
  let sum;
  
  for (let i = 2; i < n; i++)
  {
    sum = previous + current;
    previous = previous;
    current = sum;
  }
  
  return current;
}

// n0, n1, n2, n3
// 0, 1, 1, 2, 3, 5, 8, 13, 21...
// 0 (0), 1 (1), 1 (2), 2 (3), 3 (4), 5 (5), 8 (6), 13 (7), 21 (8)...
/*
Fibonacci(0) = 0
Fibonacci(1) = 1
Fibonacci(2) = 1 (0 + 1)
Fibonacci(3) = 2 (1 + 1)
Fibonacci(4) = 3 (1 + 2)
Fibonacci(5) = 5 (2 + 3)
*/
console.log(Fibonacci(5));