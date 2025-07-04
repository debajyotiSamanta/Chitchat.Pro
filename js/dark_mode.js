export function initDarkMode() {
  const toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;
  // Check saved preference or system preference
  const savedMode = localStorage.getItem('darkMode');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // Initialize state
  if (savedMode === 'true' || (!savedMode && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.checked = true;
  }
  // Toggle handler
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('darkMode', 'false');
    }
  });
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('darkMode')) {
      if (e.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggle.checked = true;
      } else {
        document.documentElement.removeAttribute('data-theme');
        toggle.checked = false;
      }
    }
  });
}
initDarkMode();