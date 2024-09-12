let count = 0;

function clickCounter() {
  count++;
  document.getElementById('counter').innerHTML = `Counter: ${count}`;
  document.getElementById('increase').style.transform = 'translate(' + count + 'px,' + count / 2+'px)';
  document.getElementById('counter').style.transform = 'translate(' + count + 'px,' + count * 2+'px)';
};