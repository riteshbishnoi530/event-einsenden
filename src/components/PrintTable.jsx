import React from 'react';

function PrintTable() {
  let rows = [];
  for (let i = 1; i <= 10; i++) {
    rows.push(
      <div className='flex gap-1 justify-center' key={i}>
        <p>{`2 * ${i}`}</p>
        <p>= {2 * i}</p>
      </div>
    );
  }
  return (
    <div className='py-5 max-md:py-4 max-sm:py-3'>
      <h1 className='text-center text-4xl max-md:text-3xl max-sm:text-2xl mb-2 font-bold'>Print Table</h1>
     <p>{rows}</p>
    </div>
  );
}

export default PrintTable;