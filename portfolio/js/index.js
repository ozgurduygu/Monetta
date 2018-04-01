// Wrap every letter in a span
$('.b01').each(function(){
  $(this).html($(this).text().replace(/([\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.easings['holdKeyframe'] = function(t) {
  var steps = 1;
  return Math.round(t * steps) * (1 / steps);
}

var basicTimeline = anime.timeline({
  loop: true
});

basicTimeline
  .add({
    targets: '.one > .letter',
  opacity: [
    { value: 1, duration: function() { return anime.random(1000, 2000); }, delay: function() { return anime.random(100, 1000); }, easing: 'holdKeyframe', elasticity: 1000 }, 
    { value: 1, duration: 4000, delay: 0, elasticity: 0 },
    { value: 0, duration: 0, delay: 0, elasticity: 0 }
  ]
  })
  .add({
    targets: '.two > .letter',
  opacity: [
    { value: 1, duration: function() { return anime.random(1000, 2000); }, delay: function() { return anime.random(100, 1000); }, easing: 'holdKeyframe', elasticity: 1000 }, 
    { value: 1, duration: 4000, delay: 0, elasticity: 0 },
    { value: 0, duration: 0, delay: 0, elasticity: 0 }
  ]
  })
  .add({
    targets: '.three > .letter',
  opacity: [
    { value: 1, duration: function() { return anime.random(1000, 2000); }, delay: function() { return anime.random(100, 1000); }, easing: 'holdKeyframe', elasticity: 1000 }, 
    { value: 1, duration: 4000, delay: 0, elasticity: 0 },
    { value: 0, duration: 0, delay: 0, elasticity: 0 }
  ]
  });