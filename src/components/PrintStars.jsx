import React from 'react';

function StarPattern() {
  let rows = [];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 4; j++) {
      row.push(<span key={j}>*</span>);
    }
    rows.push(<div className='flex gap-3 justify-center' key={i}>{row}</div>);
  }
  return (
    <div className='py-5 max-md:py-4 max-sm:py-3'>
      <h1 className='text-center text-4xl max-md:text-3xl max-sm:text-2xl mb-2 font-bold'>Print Star</h1>
      {rows}
    </div>
  );
}

export default StarPattern;