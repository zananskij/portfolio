$(() => {
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('nav').addClass('black')
    } else {
      $('nav').removeClass('black')
    }
  })
})

var listTitle = document.getElementsByClassName('list-title')
var listContent = document.getElementsByClassName('list-content')
function openList(listname) {
  for (tablink of listTitle) {
    tablink.classList.remove('active-btn')
  }
  for (tabcontent of listContent) {
    tabcontent.classList.remove('active-list')
  }
  event.currentTarget.classList.add('active-btn')
  document.getElementById(listname).classList.add('active-list')
}
