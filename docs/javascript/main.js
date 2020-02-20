// let boxBlackAnimation = anime({
//   targets: '.box-black',
//   autoplay: false,
//   easing: 'easeInOutQuad',
//   left: '10vw',
//   top: '70vh',
//   rotate: [30, 500],
//   borderRadius: ['0%', '50%'],
//   width: '40vw',
//   height: '40vw',
//   backgroundColor: {
//     value: 'rgb(231, 220, 55)',
//     duration: 300
//   }
// })

// let boxBlackPlayBtn = document.querySelector('.box-black')
// boxBlackPlayBtn.onclick = () => {
//   boxBlackAnimation.play()
//   boxBlackAnimation.finished. then(() => {
//     boxBlackAnimation.reverse();
//   })
// }

// let lineNavyAnimation = anime({
//   targets: '.line-navy',
//   autoplay: false,
//   easing: 'easeInOutQuad',
//   left: '10vw',
//   top: '70vh',
//   rotate: ['-40', 500],
//   borderRadius: ['0%', '50%'],
//   width: '40vw',
//   height: '40vw',
//   backgroundColor: {
//     value: 'rgb(231, 220, 55)',
//     duration: 300
//   }
// })

// let lineNavyPlayBtn = document.querySelector('.line-navy')
// lineNavyPlayBtn.onclick = () => {
//   lineNavyAnimation.play()
//   lineNavyAnimation.finished. then(() => {
//     lineNavyAnimation.reverse();
//   })
// }


// =======================================
const moonPath = "M13.5 27.5C13.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 13.5 12.3122 13.5 27.5Z";

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector('#darkMode');

let toggle = false;

darkMode.addEventListener('click', () => {
  const timeline = anime.timeline({
    duration : 750,
    easing : 'easeOutExpo'
  });
  timeline
    .add({
      targets: '.sun',
      d: [{value: toggle ? sunPath : moonPath}]
    })
    .add(
      {
        targets: '#darkMode',
        rotate:  toggle ? 0 : 320
      }, 
      '-= 350'
    )
    .add(
      {
        targets: 'section',
        backgroundColor: toggle ? 'rgb(255,255,255' : 'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)'
      }, 
      '-= 700'
  );
  toggle = !toggle
  // if (!toggle) {
  //   toggle = true;
  // } else (
  //   toggle = false
  // )
})