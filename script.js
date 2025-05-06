function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) return value;
  }
  return null;
}

window.onload = function () {
  const savedSize = getCookie('fontsize');
  const savedColor = getCookie('fontcolor');

  if (savedSize) {
    document.documentElement.style.setProperty('--fontsize', savedSize + 'px');
    document.getElementById('fontsize').value = savedSize;
  }

  if (savedColor) {
    document.documentElement.style.setProperty('--fontcolor', savedColor);
    document.getElementById('fontcolor').value = savedColor;
  }
};

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const size = document.getElementById('fontsize').value;
  const color = document.getElementById('fontcolor').value;

  document.cookie = `fontsize=${size};`;
  document.cookie = `fontcolor=${color};`;

  document.documentElement.style.setProperty('--fontsize', size + 'px');
  document.documentElement.style.setProperty('--fontcolor', color);
});
