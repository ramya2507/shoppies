const slideMenu = function() {
  let slideMenuStatus = $('#slide-main-navigation').style.display;
  if (slideMenuStatus === 'none' || slideMenuStatus === '') {
      $('#slide-main-navigation').style.display = 'block';
      $('#mainHeader').style.margin = '0';
  } else {
      $('#slide-main-navigation').style.display = 'none';
      $('#mainHeader').style.margin = '80px 0 0 0';
  }
  window.scrollTo(0, 0);
}

const navigateTabs = function(tab) {
  resetNavTabValues();
  let temp = '';
  document.getElementById(tab.id).style.display = 'block';
  temp = tab.id + 'Menu';
  document.getElementById(temp).style.color = 'white';
  window.scrollTo(0, 0);
}

const resetNavTabValues = function () {
  $('#homeMenu').style.color = 'white';
  $('#home').style.display = 'none';
}