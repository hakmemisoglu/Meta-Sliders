//Redirecting Loader by hakmemisoglu
//Inspired from some random image online

$('#slider-size').on('change input', function() {
  var value = [this.value];
  $("*").css("--size", value + "%");
}).change();

$('#slider-shape').on('change input', function() {
  var value = [this.value];
  $("*").css("--distance", value + "px");
}).change();

$('#slider-speed').on('change input', function() {
  var value = [this.value];
  $("*").css("--speed", value + "ms");
}).change();