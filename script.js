// スクロールでフェードイン
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.scroll-fade-in').forEach((el) => observer.observe(el));

  // アカウントドロップダウンメニュー
  const accountTrigger = document.querySelector('.account-trigger');
  const accountDropdown = document.querySelector('.account-dropdown');

  if (accountTrigger && accountDropdown) {
    accountTrigger.addEventListener('click', function(e) {
      e.stopPropagation();
      accountDropdown.classList.toggle('active');
    });

    // ドロップダウンメニュー以外をクリックしたら閉じる
    document.addEventListener('click', function(e) {
      if (!accountTrigger.contains(e.target)) {
        accountDropdown.classList.remove('active');
      }
    });
  }

  // サインアップフォームのパスワード確認
  const signupForm = document.querySelector('.email-signup-form');
  if (signupForm) {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const submitBtn = signupForm.querySelector('.submit-btn');

    function validatePasswords() {
      if (password.value === confirmPassword.value) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
      } else {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
        submitBtn.style.cursor = 'not-allowed';
      }
    }

    password.addEventListener('input', validatePasswords);
    confirmPassword.addEventListener('input', validatePasswords);
  }
}); 