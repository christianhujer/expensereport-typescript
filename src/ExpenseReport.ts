const message = 'Hello, World!\n';

const sumTwoValues = (a: number, b: number): number => a + b

const printHelloWorld = (): void => {
  process.stdout.write(message);
}

export {sumTwoValues, printHelloWorld}
