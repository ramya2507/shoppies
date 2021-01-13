//function to load nominated list
function loadNominatedList(nomiList){
  loadTableData();
  if(nomiMovieList.length > 0){
    $('.side-navigation-col').show();
  } else {
    $('.side-navigation-col').hide();
  }
  const nominatedList = document.getElementById('nominatedList');
  let dataHtml = '';
  for(let movie of nomiList){
    dataHtml+= `<li><span id ="nominatedMovie" onclick="removeMovie('${movie.imdbID}')"><i class="fa fa-close"></i></span><label>${movie.Title}</label></li>`;
  }
  nominatedList.innerHTML = dataHtml;
  if(nomiList.length == 5){
    $("#banner").show();
  }else {
    $("#banner").hide();
  }
}

//function to remove movie from nominated list
function removeMovie(value){
  nomiMovieList = nomiMovieList.filter(movie => movie.imdbID !== value);
  loadNominatedList(nomiMovieList);
}

//function to reset the values
function reset() {
  document.getElementsByName("title")[0].value = '';
  document.getElementsByName("imdbId")[0].value = '';
  document.getElementsByName("year")[0].value = '';
}