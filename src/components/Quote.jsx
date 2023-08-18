import { useEffect, useState } from 'react';

const Quote = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const category = 'happiness';
  const apiKey = 'zgOqG2jb6JXvwwOsEaitFQ==jIP5PJcFtQmNOYQu';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': apiKey,
            },
          },
        );
        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="quote">Quote is loading...</div>;
  }
  if (error) {
    return <div className="quote">Sorry! We are enable to load the quote</div>;
  }
  return (
    <div className="quote">
      <blockquote>{quote.quote}</blockquote>
      <p className="author">{quote.author}</p>
    </div>
  );
};

export default Quote;
