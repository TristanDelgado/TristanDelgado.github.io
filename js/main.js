(function () {
    var currentUrl = window.location.href.split('#')[0];

    document.querySelectorAll('.site-nav a').forEach(function (link) {
        if (link.href.split('#')[0] === currentUrl) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    var THEME_KEY = 'theme';
    var toggleBtn = document.getElementById('theme-toggle');

    function applyThemeButtonState(isDark) {
        if (!toggleBtn) return;
        toggleBtn.textContent = isDark ? '☀️' : '🌙';
        toggleBtn.setAttribute('aria-pressed', String(isDark));
        toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    applyThemeButtonState(document.documentElement.getAttribute('data-theme') !== 'light');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            var isDark = document.documentElement.getAttribute('data-theme') !== 'light';
            var next = isDark ? 'light' : 'dark';
            if (next === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
            try {
                localStorage.setItem(THEME_KEY, next);
            } catch (e) {}
            applyThemeButtonState(next === 'dark');
        });
    }
})();
