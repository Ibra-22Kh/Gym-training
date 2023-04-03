export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '4f0d826849mshd97458251c29b76p14766cjsn52ed904cca49',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '4f0d826849mshd97458251c29b76p14766cjsn52ed904cca49',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
