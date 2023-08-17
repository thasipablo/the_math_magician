import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('Quote');

  useEffect(() => {
    setQuote('Quote');
  }, []);

  return <div className="quotes">{quote}</div>;
};

export default Quote;
