const options = {
  method: 'GET',
  url: 'https://my-hero-academia-characters.p.rapidapi.com/c',
  headers: {
    'X-RapidAPI-Key': 'YOUR API KEY HERE',
    'X-RapidAPI-Host': 'my-hero-academia-characters.p.rapidapi.com'
  }
};

const requestApi = () => {
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
