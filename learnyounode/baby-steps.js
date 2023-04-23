let result = 0
    
for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]) // Number() converts a string to a number; 也可以用 +process.argv[i]
}

console.log(result)