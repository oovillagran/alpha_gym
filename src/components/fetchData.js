export const exerciseOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': '8f4b54b091mshfbc10ac8c94948fp122df2jsn6cbd66cf727f',
    'X-RapidAPI-Key': 'bb8231909dmshd22cd5d83f37392p1bbf04jsne640bea3f7dc',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
