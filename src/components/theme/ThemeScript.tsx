import { THEME_STORAGE_KEY } from "@/lib/theme";

export function ThemeScript() {
  const script = `
(function() {
  try {
    var key = ${JSON.stringify(THEME_STORAGE_KEY)};
    var t = localStorage.getItem(key);
    if (t !== 'light' && t !== 'dark') {
      t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
