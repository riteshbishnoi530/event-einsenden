import React from 'react';

function NumbersAdd() {
    function addNumbers() {
        return num1 + num2;
      }
  const num1 = 5;
  const num2 = 10;
  const result = addNumbers(num1, num2);
  
  return (
    <div className='py-5 max-md:py-4 max-sm:py-3'>
      <h1 className='text-center text-4xl max-md:text-3xl max-sm:text-2xl mb-2 font-bold'>Add Numbers</h1>
      <p className='text-center mt-2'>The result of {num1} + {num2} = {result}</p>
    </div>
  );
}

export default NumbersAdd;