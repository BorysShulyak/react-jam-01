import { useQuery } from '@tanstack/react-query';

const ARTICLES_COUNT = 9;

const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

async function fetchArticles() {
  const ids = await fetchData('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
  const fetchPromises = ids
    .slice(0, ARTICLES_COUNT)
    .map((id) => fetchData(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`));
  return Promise.all(fetchPromises);
}

const useArticles = () => {
  return useQuery({
    queryKey: ['articlesData'],
    queryFn: () => fetchArticles()
  });
};

export default useArticles;
