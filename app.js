const inputField = document.querySelector('.search-input');
const resultsDiv = document.querySelector('.search-results');

function inputEventListener() {
  document.querySelector('.search-button').addEventListener('click', () => {
    let searchQuery = inputField.value
    getResults(searchQuery)
  })
};

function getResults(searchQuery) {
  resultsDiv.innerHTML = ''
  const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
  axios
    ({
      method:'get',
      url: endpoint
    })
    .then(function (response) {
      console.log(response.data)
      let results = response.data.query.search
      results.forEach((item, index) => {
        let result = document.createElement('div')
        let snippet = document.createElement('div')
        result.classList.add('result-item-' + index)
        snippet.classList.add('snippet')
        snippet.innerHTML = item.snippet
        resultsDiv.appendChild(result)
        result.appendChild(snippet)
        turnIntoUrl(item.pageid, index)
      })
    });
};

function turnIntoUrl(value, index) {
  const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&prop=info&&format=json&pageids=${value}&inprop=url`
  axios
    ({
      method:'get',
      url: endpoint
    })
    .then(function (response) {
      let result = response.data.query.pages ? response.data.query.pages : '';
      if (result) {
        result = Object.keys(result).map(i => result[i])
        let button = document.createElement('a')
        button.classList.add('url-button')
        button.innerHTML = 'Смотреть в источнике'
        button.setAttribute('href', result[0].fullurl);
        button.setAttribute('target', '_blank');
        document.querySelector('.result-item-' + index).appendChild(button)
      }
    });
}

inputEventListener();
