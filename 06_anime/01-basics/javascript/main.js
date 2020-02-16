let targetsExample01 = anime({
  targets: '.targets .box',
  translateX: 250,
  autoplay: false
})

let targetsBoxPlayBtn = 
  document.querySelector('.animateBoxBtn')

targetsBoxPlayBtn.onclick = targetsExample01.play

let targetsExample02 = anime({
  targets: '.targets .triangle',
  translateX: 150,
  autoplay: false
})

let targetsTriPlayBtn = 
  document.querySelector('.animateTriangleBtn')

targetsTriPlayBtn.onclick = targetsExample02.play

// Вторая секция

let propsAnimation01 = anime({
  targets: '.props .box',
  translateX: 400,
  rotate: 180,
  backgroundColor: '#fff',
  borderRadius: ['0%', '50%'],
  autoplay: false,
  duration: 2000,
  easing: 'easeInOutQuad'
})

let propsBtn01 = document.querySelector('#propsBtn01')
propsBtn01.onclick = propsAnimation01.play
