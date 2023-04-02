
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'c8ddc5dbecmsh4762e6b5c2c9497p192d06jsnd58872bd3a1b',
    }
};

export const fetchData = async(url,option)=>{
    const response = await fetch(url,option);
    const data = await response.json();

    return data;
}