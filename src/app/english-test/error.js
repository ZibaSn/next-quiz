'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="">
      {/* {error} */}
      <h1>This above Error Happens!</h1>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default Error;
