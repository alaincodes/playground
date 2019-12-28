import anime from 'animejs';

anime({
  targets: '.image',
  translateX: [-200, 400],
  duration: 9000,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
});
