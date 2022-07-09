import {NEWS_API_KEY, newsApiBaseUrl, newsApiProxy} from './consts';

const getArticles = async(querry) => {
  const currDate = new Date();
  const pastDate = new Date(currDate.getTime() - (60*60*24*7*1000));
  const currDateList = [currDate.getFullYear(), currDate.getMonth()+1, currDate.getDate()];
  const pastDateList = [pastDate.getFullYear(), pastDate.getMonth()+1, pastDate.getDate()];
  const url = `${newsApiBaseUrl}q=${querry}&from=${pastDateList.join('-')}&to=${currDateList.join('-')}&pageSize=100&apiKey=${NEWS_API_KEY}`;
  const res = await fetch(
    url
  );
  if(res.ok) {
    const data = await res.json();
    return data
  } else {
    return Promise.reject(res);
  }
} 

export default getArticles;