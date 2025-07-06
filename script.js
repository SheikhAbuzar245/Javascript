let clock = document.getElementById('clock');

setInterval(() => {
  let time = new Date();
  // console.log(time.toLocaleTimeString())
  clock.innerHTML = time.toLocaleTimeString('en-US');
//   clock.innerHTML = time.toLocaleTimeString('en-US', {
//     hour: '2-digit',
//     minute: '2-digit',
//     hour12: true,
//   });
}, 1000);
