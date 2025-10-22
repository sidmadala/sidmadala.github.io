function switchTheme() {
  const currentStyle = currentTheme();

  if (currentStyle == 'light') {
    setTheme('dark');
  }
  else {
    setTheme('light');
  }
}

function setTheme(style) {
  document.querySelectorAll('.isInitialToggle').forEach(elem => {
    elem.classList.remove('isInitialToggle');
  });
  document.documentElement.setAttribute('data-color-mode', style);
  localStorage.setItem('data-color-mode', style);
}

function currentTheme() {
  const localStyle = localStorage.getItem('data-color-mode');
  const systemStyle = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return localStyle || systemStyle;
}


function relativeTime(dateStr) {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  const seconds = Math.floor(diff);
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(diff / 60 / 60);
  const days = Math.floor(diff / 60 / 60 / 24);
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  if (hours < 24) {
    return `${hours} hours ago`;
  }
  if (days < 30) {
    return `${days} days ago`;
  }
  if (date.getFullYear() == now.getFullYear()) {
    return `${date.getDate()} ${months[date.getMonth()]}`;
  }
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function setRelativeTime() {
  document.querySelectorAll('relative-time').forEach(elem => {
    const dateStr = elem.getAttribute('datetime');
    elem.innerHTML = relativeTime(dateStr);
    elem.setAttribute('title', new Date(dateStr).toLocaleString());
  });
}

(() => {
  setTheme(currentTheme());
})();