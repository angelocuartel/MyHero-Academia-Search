# MyHero-Academia-Search
A website where you can now search your favorite heroes and discover their quirks with just a few types and clicks 

**SETUP API**

Open apiRequest.js and place your api key here at "X-RapidAPI-Key" property.

> You can get your RAPIDAPI-Key at https://rapidapi.com/syphersamurai-FHP6TQBo_cu/api/my-hero-academia-characters

```javascript
const options = {
  method: 'GET',
  url: 'https://my-hero-academia-characters.p.rapidapi.com/c',
  headers: {
    'X-RapidAPI-Key': 'YOUR API KEY HERE',
    'X-RapidAPI-Host': 'my-hero-academia-characters.p.rapidapi.com'
  }
};

```
