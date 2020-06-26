const APIKEY: Readonly<string> = 'U0kqqSE6F1u8cJ3fS55r0TuBHP7pncBP';

const getNews = async section => {
  const result = await fetch(
    `https://api.nytimes.com/svc/news/v3/content/all/${section}.json?api-key=${APIKEY}`
  );
  const data = await result.json();

  return data;
};
export { getNews };
