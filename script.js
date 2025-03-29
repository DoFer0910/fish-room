// スクロールでフェードイン
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.scroll-fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  fadeElements.forEach(el => observer.observe(el));
}); 