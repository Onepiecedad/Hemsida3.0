import { colors } from './theme';

export function initializeDarkMode() {
  document.documentElement.classList.add('dark');
  document.body.style.backgroundColor = colors.background.dark;
  document.body.style.color = colors.text.primary;
} 