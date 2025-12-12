import React from 'react';

export default function ErrorBox({message}){
  return(
    <div className='bg-red-600 text-white px-4 py-3 mt-4 rounded'>
      {message}
    </div>
  );
}