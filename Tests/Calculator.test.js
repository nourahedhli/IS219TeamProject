
const Calculator = require('/Calculator/Calculator');

test('Calculator divide 2 by  2 to equal 1', () => {
    let Calc = new Calculator();
    expect(Calc.Divide(2, 2)).toBe(1);
    expect(Calc.Result).toBe(1);

});
test('Calculator Add 2 by  2 to equal 4', () => {
    let Calc = new Calculator();
    expect(Calc.Add(2, 2)).toBe(4);
    expect(Calc.Result).toBe(4);

});
test('Calculator Multiply 2 by  2 has a result equal to 4', () => {
    let Calc = new Calculator();
    expect(Calc.Multiply(2, 2)).toBe(4);
    expect(Calc.Result).toBe(4);

});

test('Calculator add array of 1,2,3,4 and get result 10', () => {
    let Calc = new Calculator();
    let myArray = [1,2,3,4]
    expect(Calc.Add(myArray)).toBe(10);
    expect(Calc.Result).toBe(10);

});

test('Calculator Square of 2  has a result equal to 4', () => {
    let Calc = new Calculator();
    expect(Calc.square(2)).toBe(4);
    expect(Calc.Result).toBe(4);

});

test('Calculator Squareroot of 4 has a result equal to 2', () => {
    let Calc = new Calculator();
    expect(Calc.squareRoot(4)).toBe(2);
    expect(Calc.Result).toBe(2);

});

test('Calculator Subtract 3 from 2 has a result equal to 1', () => {
    let Calc = new Calculator();
    expect(Calc.Subtract(3,2)).toBe(1);
    expect(Calc.Result).toBe(1);

});