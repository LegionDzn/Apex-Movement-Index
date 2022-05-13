document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    console.log('pausing');
    $("video").each(function() {
      $(this).get(0).pause();
    });
  } else {

  }
}, false);
var $allVideos = $('video');
$('video').on('play', function(e) {
  $allVideos.not(this).each(function() {
    this.pause()
  })
});
