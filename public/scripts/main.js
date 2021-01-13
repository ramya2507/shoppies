//variables to store data
let response;
let movies = [];
let nomiMovieList = [];

//to hide movies table and movies nominated column
$('.imageWidth').hide();
$('.side-navigation-col').hide();

//function to insert data into the table 
const loadTableData = function () {
    $('.imageWidth').show();
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';
    for(let movie of movies){
        if(nomiMovieList.some(nomMovie =>  nomMovie.imdbID === movie.imdbID)){
             dataHtml+= `<tr><td>${movie.Title}</td><td>${movie.Year}</td><td><button class="nomiBtn" disabled onclick="nominate('${movie.imdbID}')">Nominate</button></td></tr>`;
        }else{
            dataHtml+= `<tr><td>${movie.Title}</td><td>${movie.Year}</td><td><button class="nomiBtn" onclick="nominate('${movie.imdbID}')">Nominate</button></td></tr>`;
        }
    }
    tableBody.innerHTML = dataHtml;
}

//function to call api and send the params and get the required data
function search(data) {
  const xhr = new XMLHttpRequest();
  const apiKey = 'ce06f286';
  const url = `http://www.omdbapi.com/?${data}&type=movie&apikey=${apiKey}`;
  console.log(url);
  xhr.onload = function () {
      console.log(this.status)
    if (this.status == 200) {
        response = JSON.parse(this.responseText);
        console.log(response);
        if(response.Search){
            movies = response.Search;
                }else{
                    movies.push(response);
                }
                loadTableData();
            }
    };
    xhr.open("GET", url);
    xhr.setRequestHeader("Accept", "text/plain");
    xhr.send();
}

//function to validate the type of data
function validateForm(type) {
    let data;
    let search = document.getElementsByName("search")[0].value;
    let title = document.getElementsByName("title")[0].value;
    let imdbId = document.getElementsByName("imdbId")[0].value;
    let year = document.getElementsByName("year")[0].value;
    if(type === 'list'){
        if (search === undefined || search === '') {
        } else {
            data = 's='+search;
            this.search(data);
        }
    }else{
        let searchBy = document.getElementById('searchBy').value;
        reset();
        if(searchBy === 'title'){
            if (title === undefined || title === '') {
            } else {
                data = 't='+title;
                if (year !== undefined && year !== '') {
                    data = data+'y='+year;
                }
                this.search(data);
            }
        }else {
            if (imdbId === undefined || imdbId === '') {
            } else {
                data = 'i='+imdbId;
                if (year !== undefined && year !== '') {
                    data = data+'y='+year;
                }
                this.search(data);
            }
        }
    }
}

//function to nominate a movie
function nominate(value){
    if(!nomiMovieList.length || !nomiMovieList.some(movie => movie.imdbID === value)){
        movies.forEach(movie => {
            if(movie.imdbID === value){
                if(nomiMovieList.length < 5){
                    nomiMovieList.push(movie);
                } 
            }
        }); 
    }
    loadNominatedList(nomiMovieList);
}


