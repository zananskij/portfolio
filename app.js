// changes the active button on about me section list
// then changes the active list and hides the others from being displayed
$(() => {
  $('p#skill').click(function (event) {
    $(this).addClass('active-btn').siblings().removeClass('active-btn')
    $('div#skills').addClass('active-list')
    $('div#experience').removeClass('active-list')
    $('div#education').removeClass('active-list')
  })
  $('p#exp').click(function (event) {
    $(this).addClass('active-btn').siblings().removeClass('active-btn')
    $('div#experience').addClass('active-list')
    $('div#skills').removeClass('active-list')
    $('div#education').removeClass('active-list')
  })
  $('p#edu').click(function (event) {
    $(this).addClass('active-btn').siblings().removeClass('active-btn')
    $('div#education').addClass('active-list')
    $('div#skills').removeClass('active-list')
    $('div#experience').removeClass('active-list')
  })
})

// toggles between 2 stylesheets (dark/light mode) on button click

$(() => {
  $('#darkswitch').click(function () {
    $('link[rel=stylesheet]').attr({ href: 'style.css' })
  })

  $('#lightswitch').click(function () {
    $('link[rel=stylesheet]').attr({ href: 'lightstyle.css' })
  })
})

// opens / closes contact modal

$(() => {
  $('.open').click(function () {
    $('.contactModal, .modalForm').addClass('active')
  })
  $('.close').click(function () {
    $('.contactModal, .modalForm').removeClass('active')
  })
})
