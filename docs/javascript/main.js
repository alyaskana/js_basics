let boxBlackAnimation = anime({
  targets: '.box-black',
  autoplay: false,
  easing: 'easeInOutQuad',
  left: '30vw',
  top: '30vh',
  rotate: [30, 500],
  borderRadius: ['0%', '50%'],
  height: '30vw',
  backgroundColor: 'rgb(0, 0, 128)'
})

let boxBlackPlayBtn = document.querySelector('.box-black')
boxBlackPlayBtn.onclick = () => {
  boxBlackAnimation.play()
  boxBlackAnimation.finished.then( () => {
    boxBlackAnimation.reverse();
  })
}