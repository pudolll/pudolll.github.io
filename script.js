let showcase = document.querySelector("#showcase");
let pudol = document.querySelector("#pudol");

if (showcase && pudol) {
  // Initial setup for background position
  updateBackgroundPosition();

  function updateAnimation() {
    const d = new Date();
    let time = d.getTime();

    // Update the transform of the pudol element
    pudol.style.transform = `translate(0,${Math.sin(time / 1000) * 20}%) rotate(${(Math.sin(time / 750) * 3 + 1.5)}deg)`;

    // Update the background position of the showcase element
    updateBackgroundPosition(time);

    // Request the next frame
    requestAnimationFrame(updateAnimation);
  }

  function updateBackgroundPosition(time = 0) {
    showcase.style.backgroundPositionY = `${(window.scrollY / window.innerHeight) * 30 + 50 + Math.sin(time / 2300) * 5}%`;
  }

  // Start the animation loop
  requestAnimationFrame(updateAnimation);
}