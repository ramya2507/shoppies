//on change
$("#searchBy").onchange = "searchByFn()"
//function to provide whether movie name or IMDB ID based on the option selected 
const searchByFn = function () {
  let searchBy = $('#searchBy').value;
  $("#movieTitleGrp").style.display = "none";
  $("#imdbIdGrp").style.display = "none";
  if(searchBy === 'title'){
    $("#movieTitleGrp").style.display = "block";  
  }else {
    $("#imdbIdGrp").style.display = "block";
  }
}