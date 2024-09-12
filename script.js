let pudol = document.querySelector("#pudol");

if (pudol) {

  function updateAnimation() {
    const d = new Date();
    let time = d.getTime();

    pudol.style.transform = `translate(0,${Math.sin(time / 1000) * 20}%) rotate(${(Math.sin(time / 750) * 3 + 1.5)}deg)`;

    requestAnimationFrame(updateAnimation);
  }

  requestAnimationFrame(updateAnimation);
}