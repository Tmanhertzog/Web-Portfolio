window.addEventListener('resize', () => {
  if (window.innerWidth <= 600 || window.innerWidth >= 1024) {
    location.reload();
  }
});