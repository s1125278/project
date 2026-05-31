// ── 內嵌 SVG 提示圖 ──────────────────────────────────────────
const HINT_SVGS = {
  "apple-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="64" r="26" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "apple-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="64" r="26" fill="none" stroke="#111" stroke-width="3"/><line x1="60" y1="38" x2="60" y2="22" stroke="#111" stroke-width="3"/></svg>`,
  "apple-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="64" r="26" fill="none" stroke="#111" stroke-width="3"/><line x1="60" y1="38" x2="60" y2="20" stroke="#111" stroke-width="3"/><path d="M60 20 Q72 16 76 26" fill="none" stroke="#111" stroke-width="2"/></svg>`,
  "bicycle-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="38" cy="72" r="22" fill="none" stroke="#111" stroke-width="3"/><circle cx="88" cy="72" r="22" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "bicycle-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="38" cy="72" r="22" fill="none" stroke="#111" stroke-width="3"/><circle cx="88" cy="72" r="22" fill="none" stroke="#111" stroke-width="3"/><line x1="38" y1="72" x2="68" y2="42" stroke="#111" stroke-width="3"/><line x1="68" y1="42" x2="88" y2="72" stroke="#111" stroke-width="3"/></svg>`,
  "bicycle-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="38" cy="72" r="22" fill="none" stroke="#111" stroke-width="3"/><circle cx="88" cy="72" r="22" fill="none" stroke="#111" stroke-width="3"/><line x1="68" y1="42" x2="82" y2="28" stroke="#111" stroke-width="3"/></svg>`,
  "car-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><rect x="18" y="52" width="84" height="26" rx="3" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "car-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><rect x="18" y="48" width="84" height="26" rx="3" fill="none" stroke="#111" stroke-width="3"/><circle cx="36" cy="82" r="11" fill="none" stroke="#111" stroke-width="3"/><circle cx="84" cy="82" r="11" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "car-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><rect x="18" y="52" width="84" height="26" rx="3" fill="none" stroke="#111" stroke-width="3"/><path d="M32 52 L44 36 H80 L92 52 Z" fill="none" stroke="#111" stroke-width="3"/><circle cx="36" cy="84" r="11" fill="none" stroke="#111" stroke-width="3"/><circle cx="84" cy="84" r="11" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "cat-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="58" r="26" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "cat-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="58" r="26" fill="none" stroke="#111" stroke-width="3"/><polygon points="42,34 50,16 58,34" fill="none" stroke="#111" stroke-width="3"/><polygon points="62,34 70,16 78,34" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "cat-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="58" r="26" fill="none" stroke="#111" stroke-width="3"/><polygon points="42,34 50,16 58,34" fill="none" stroke="#111" stroke-width="3"/><polygon points="62,34 70,16 78,34" fill="none" stroke="#111" stroke-width="3"/><line x1="30" y1="60" x2="14" y2="58" stroke="#111" stroke-width="2"/><path d="M88 68 Q102 82 98 100" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "cloud-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="44" cy="68" rx="18" ry="14" fill="none" stroke="#111" stroke-width="3"/><ellipse cx="68" cy="62" rx="22" ry="17" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "cloud-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="40" cy="70" rx="14" ry="10" fill="none" stroke="#111" stroke-width="3"/><ellipse cx="58" cy="64" rx="18" ry="14" fill="none" stroke="#111" stroke-width="3"/><ellipse cx="78" cy="68" rx="16" ry="12" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "cloud-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="38" cy="72" rx="14" ry="10" fill="none" stroke="#111" stroke-width="3"/><ellipse cx="55" cy="66" rx="18" ry="14" fill="none" stroke="#111" stroke-width="3"/><ellipse cx="72" cy="64" rx="20" ry="15" fill="none" stroke="#111" stroke-width="3"/><ellipse cx="88" cy="70" rx="14" ry="11" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "cup-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M38 44 L38 88 Q60 96 82 88 L82 44 Z" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "cup-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M38 44 L38 88 Q60 96 82 88 L82 44 Z" fill="none" stroke="#111" stroke-width="3"/><path d="M82 52 Q104 52 104 68 Q104 80 82 76" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "cup-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M38 44 L38 88 Q60 96 82 88 L82 44 Z" fill="none" stroke="#111" stroke-width="3"/><line x1="48" y1="44" x2="72" y2="44" stroke="#111" stroke-width="2"/></svg>`,
  "dog-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="60" cy="42" rx="28" ry="24" fill="none" stroke="#111" stroke-width="3"/><path d="M34 28 Q28 50 38 58" fill="none" stroke="#111" stroke-width="3"/><path d="M86 28 Q92 50 82 58" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "dog-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="60" cy="42" rx="28" ry="24" fill="none" stroke="#111" stroke-width="3"/><ellipse cx="60" cy="72" rx="34" ry="22" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "dog-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="60" cy="42" rx="26" ry="22" fill="none" stroke="#111" stroke-width="3"/><ellipse cx="60" cy="68" rx="32" ry="20" fill="none" stroke="#111" stroke-width="3"/><line x1="44" y1="88" x2="44" y2="108" stroke="#111" stroke-width="3"/><line x1="76" y1="88" x2="76" y2="108" stroke="#111" stroke-width="3"/><path d="M90 66 Q106 78 102 96" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "fish-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="52" cy="60" rx="28" ry="16" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "fish-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="52" cy="60" rx="28" ry="16" fill="none" stroke="#111" stroke-width="3"/><polygon points="88,60 110,48 110,72" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "fish-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="52" cy="60" rx="28" ry="16" fill="none" stroke="#111" stroke-width="3"/><polygon points="88,60 110,48 110,72" fill="none" stroke="#111" stroke-width="3"/><path d="M36 52 Q28 60 36 68" fill="none" stroke="#111" stroke-width="2"/></svg>`,
  "flower-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="46" r="8" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "flower-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="46" r="8" fill="none" stroke="#111" stroke-width="3"/><ellipse cx="80" cy="46" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/><ellipse cx="70" cy="63" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="63" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/><ellipse cx="40" cy="46" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="29" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/><ellipse cx="70" cy="29" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/></svg>`,
  "flower-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="46" r="8" fill="none" stroke="#111" stroke-width="3"/><ellipse cx="80" cy="46" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/><ellipse cx="70" cy="63" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="63" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/><ellipse cx="40" cy="46" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="29" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/><ellipse cx="70" cy="29" rx="10" ry="15" fill="none" stroke="#111" stroke-width="2"/><line x1="60" y1="54" x2="60" y2="108" stroke="#111" stroke-width="3"/></svg>`,
  "guitar-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="60" cy="78" rx="24" ry="28" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "guitar-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="60" cy="78" rx="24" ry="28" fill="none" stroke="#111" stroke-width="3"/><rect x="56" y="24" width="8" height="58" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "guitar-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><ellipse cx="60" cy="78" rx="22" ry="26" fill="none" stroke="#111" stroke-width="3"/><rect x="56" y="22" width="8" height="60" fill="none" stroke="#111" stroke-width="3"/><line x1="48" y1="32" x2="72" y2="32" stroke="#111" stroke-width="2"/><line x1="48" y1="40" x2="72" y2="40" stroke="#111" stroke-width="2"/></svg>`,
  "hamburger-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M28 38 Q60 28 92 38" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "hamburger-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><rect x="28" y="48" width="64" height="14" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "hamburger-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M28 38 Q60 28 92 38" fill="none" stroke="#111" stroke-width="3"/><rect x="28" y="48" width="64" height="12" fill="none" stroke="#111" stroke-width="3"/><rect x="28" y="64" width="64" height="12" fill="none" stroke="#111" stroke-width="3"/><path d="M28 82 Q60 94 92 82" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "house-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><rect x="34" y="52" width="52" height="44" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "house-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><rect x="34" y="52" width="52" height="44" fill="none" stroke="#111" stroke-width="3"/><polygon points="30,52 60,24 90,52" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "house-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><rect x="34" y="52" width="52" height="44" fill="none" stroke="#111" stroke-width="3"/><polygon points="30,52 60,24 90,52" fill="none" stroke="#111" stroke-width="3"/><rect x="52" y="68" width="16" height="28" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "moon-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M72 28 A28 28 0 1 1 72 92 A20 20 0 1 0 72 28" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "moon-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M72 28 A28 28 0 1 1 72 92 A20 20 0 1 0 72 28" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "moon-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M72 28 A28 28 0 1 1 72 92 A20 20 0 1 0 72 28" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "pizza-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M30 90 L60 24 L90 90 Z" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "pizza-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M30 90 L60 24 L90 90 Z" fill="none" stroke="#111" stroke-width="3"/><circle cx="52" cy="58" r="4" fill="#111"/><circle cx="68" cy="66" r="4" fill="#111"/><circle cx="58" cy="74" r="4" fill="#111"/></svg>`,
  "pizza-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M30 90 L60 24 L90 90 Z" fill="none" stroke="#111" stroke-width="3"/><circle cx="50" cy="56" r="4" fill="#111"/><circle cx="66" cy="64" r="4" fill="#111"/><circle cx="54" cy="78" r="4" fill="#111"/><circle cx="72" cy="76" r="4" fill="#111"/></svg>`,
  "star-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><polygon points="60,18 68,46 98,46 74,62 84,92 60,74 36,92 46,62 22,46 52,46" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "star-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><polygon points="60,18 68,46 98,46 74,62 84,92 60,74 36,92 46,62 22,46 52,46" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "star-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><polygon points="60,18 68,46 98,46 74,62 84,92 60,74 36,92 46,62 22,46 52,46" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "sun-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="60" r="22" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "sun-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="60" r="22" fill="none" stroke="#111" stroke-width="3"/><line x1="82" y1="60" x2="98" y2="60" stroke="#111" stroke-width="2"/><line x1="75" y1="75" x2="87" y2="87" stroke="#111" stroke-width="2"/><line x1="60" y1="82" x2="60" y2="98" stroke="#111" stroke-width="2"/><line x1="45" y1="75" x2="33" y2="87" stroke="#111" stroke-width="2"/><line x1="38" y1="60" x2="22" y2="60" stroke="#111" stroke-width="2"/><line x1="45" y1="45" x2="33" y2="33" stroke="#111" stroke-width="2"/><line x1="60" y1="38" x2="60" y2="22" stroke="#111" stroke-width="2"/><line x1="75" y1="45" x2="87" y2="33" stroke="#111" stroke-width="2"/></svg>`,
  "sun-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><circle cx="60" cy="60" r="22" fill="none" stroke="#111" stroke-width="3"/><line x1="82" y1="60" x2="98" y2="60" stroke="#111" stroke-width="2.5"/><line x1="79" y1="71" x2="93" y2="79" stroke="#111" stroke-width="2.5"/><line x1="71" y1="79" x2="79" y2="93" stroke="#111" stroke-width="2.5"/><line x1="60" y1="82" x2="60" y2="98" stroke="#111" stroke-width="2.5"/><line x1="49" y1="79" x2="41" y2="93" stroke="#111" stroke-width="2.5"/><line x1="41" y1="71" x2="27" y2="79" stroke="#111" stroke-width="2.5"/><line x1="38" y1="60" x2="22" y2="60" stroke="#111" stroke-width="2.5"/><line x1="41" y1="49" x2="27" y2="41" stroke="#111" stroke-width="2.5"/><line x1="49" y1="41" x2="41" y2="27" stroke="#111" stroke-width="2.5"/><line x1="60" y1="38" x2="60" y2="22" stroke="#111" stroke-width="2.5"/><line x1="71" y1="41" x2="79" y2="27" stroke="#111" stroke-width="2.5"/><line x1="79" y1="49" x2="93" y2="41" stroke="#111" stroke-width="2.5"/></svg>`,
  "tree-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><rect x="54" y="42" width="12" height="62" fill="none" stroke="#111" stroke-width="4"/></svg>`,
  "tree-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><rect x="54" y="42" width="12" height="62" fill="none" stroke="#111" stroke-width="4"/><circle cx="60" cy="32" r="24" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "tree-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><rect x="54" y="42" width="12" height="58" fill="none" stroke="#111" stroke-width="4"/><circle cx="48" cy="30" r="18" fill="none" stroke="#111" stroke-width="3"/><circle cx="72" cy="30" r="18" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "umbrella-0": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><line x1="60" y1="28" x2="60" y2="108" stroke="#111" stroke-width="3"/></svg>`,
  "umbrella-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><path d="M18 48 Q60 18 102 48" fill="none" stroke="#111" stroke-width="3"/></svg>`,
  "umbrella-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fff"/><line x1="60" y1="28" x2="60" y2="108" stroke="#111" stroke-width="3"/><path d="M18 48 Q60 18 102 48" fill="none" stroke="#111" stroke-width="3"/></svg>`,
};

function getHintDataUrl(target, level) {
  const key = `${target}-${Math.min(level, 2)}`;
  const svg = HINT_SVGS[key];
  if (!svg) return "";
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// ── 提示文字與混淆提示 ────────────────────────────────────────
const DRAWING_HINTS = {
  cat: ["先畫一個圓當作貓的頭。","在頭上方畫兩個小三角形當耳朵。","加上鬍鬚線和尾巴，身體可以畫成橢圓。"],
  dog: ["先畫大橢圓頭，兩側畫下垂的耳朵（長弧線，不是尖三角）。","頭下方畫大橢圓身體（比頭還寬），整體比貓大。","身體下畫四條腿（四條豎線或 L 形）+ 尾巴；只畫圓臉會被認成貓。"],
  tree: ["先畫一條粗、長的豎線當樹幹（至少占整張圖高度一半，比花莖粗很多）。","樹幹頂端再畫樹冠（雲朵或三角形），不要只畫圓+細線（那會像花）。","樹幹寬度約為樹冠的 1/3～1/2，整體上寬下窄的是樹，不是花。"],
  house: ["先畫一個正方形當牆。","上方加三角形屋頂。","中間畫小矩形當門，旁邊加小方塊當窗。"],
  car: ["先畫大大的橫向長方形當車身（寬比高長很多）。","車身下方畫兩個清楚的圓當輪子（左右各一，很重要）。","車身上方再加小一點的矩形或梯形當車頂／駕駛室。"],
  bicycle: ["畫兩個大圓當前後輪。","用線連接兩輪（車架呈三角形）。","加上把手橫桿和座椅的小線條。"],
  apple: ["畫一個圓或略扁的圓當蘋果。","頂部畫短莖和小葉子。","中間可加一條小凹痕曲線。"],
  sun: ["先畫正圓當太陽（中等大小即可，不要占滿整張畫布）。","從圓外緣向外畫 8 條以上短直線光芒（約圓半徑長度，不要太長）。","光芒均勻分布在上下左右；過長的光線在 AI 眼裡會縮成一團。"],
  flower: ["中心畫小圓。","圍繞中心畫 5–6 片花瓣（橢圓或水滴形）。","下方加一條直線當花莖。"],
  cloud: ["用 3–4 個重疊的圓弧或圓組成雲朵。","底部畫平一點，頂部圓潤。","整體像一串泡泡連在一起。"],
  fish: ["畫橢圓魚身。","右側加三角形尾巴。","點一個眼睛，可加魚鳍弧線。"],
  umbrella: ["先畫向上彎的大弧線當傘面。","中心往下畫直線當傘柄。","傘柄底加短橫線或 J 形把手。"],
  cup: ["畫 U 形或梯形杯身。","右側加 C 形把手。","杯口畫橢圓線。"],
  hamburger: ["上層半圓麵包（彎線）。","中間加一條橫線當肉排，可再加一層。","下層半圓麵包封底。"],
  guitar: ["下方畫大橢圓當琴身。","中間往上畫長方形琴頸。","琴頸上畫幾條橫線當琴格。"],
  moon: ["畫一個 C 形或彎月（月牙）。","彎月開口朝右或朝上，線條要粗。","不要畫成圓形太陽。"],
  star: ["請用【一筆連續畫完】五角星，不要分開畫每個尖角！","畫法：從頂點出發 → 右下 → 左 → 右 → 左下 → 回到頂點，一筆不斷。","線條要連續不中斷，AI 訓練資料都是一筆畫的五角星。"],
  pizza: ["畫大三角形當披薩切片。","內部點幾個小圓當配料。","底邊略彎更像披薩。"],
};

const CONFUSION_HINTS = {
  cat: { dog: "狗耳朵通常比較長且下垂；貓耳朵是尖三角形。" },
  dog: { cat: "你現在看起來像貓：貓是小圓頭+尖耳+鬍鬚；狗要大身體、下垂耳、四條腿+尾巴。" },
  tree: { flower: "你現在看起來像花：花是細莖+上方花瓣；樹要先畫粗豎線樹幹（長又粗），再在頂端畫樹冠。" },
  car: { bicycle: "腳踏車是兩個大圓輪+三角車架；汽車要有橫向長車身包住輪子。", cloud: "雲朵是圓弧泡泡；汽車是橫長方塊+底下一左一右兩輪。" },
  sun: { cat: "你現在看起來像貓臉：貓是圓+三角耳+鬍鬚；太陽是圓+四周很多放射直線光芒。", flower: "太陽的光芒從中心放射；花是莖+花瓣。" },
  flower: { sun: "花有莖和花瓣，太陽是圓加光芒。", tree: "花比樹小，從地面長出細莖。" },
  star: { sun: "星星要用一筆連續畫完五角星，不要分開畫尖角；太陽是圓+光芒線。" },
  moon: { sun: "月亮是彎月；太陽是圓+光芒。" },
};

function getHint(target, hintLevel, topPredictions, labelsZh) {
  const steps = DRAWING_HINTS[target] || ["先畫主體的大輪廓，再加細節。"];
  const stepHint = steps[Math.min(hintLevel, steps.length - 1)];
  if (!topPredictions?.length) return stepHint;
  const [best] = topPredictions;
  if (best.label === target && best.prob < 0.35)
    return `${stepHint}（AI 覺得像${labelsZh[target]}，但還不夠清楚，線條畫粗一點。）`;
  if (target === "sun" && topPredictions.some((r) => r.label === "cat" && r.prob > 0.12)) {
    const cat = topPredictions.find((r) => r.label === "cat");
    return `AI 覺得像「貓」（${Math.round(cat.prob * 100)}%）。${CONFUSION_HINTS.sun.cat} ${stepHint}`;
  }
  if (target === "dog" && topPredictions.some((r) => r.label === "cat" && r.prob > 0.15)) {
    const cat = topPredictions.find((r) => r.label === "cat");
    return `AI 覺得像「貓」（${Math.round(cat.prob * 100)}%）。${CONFUSION_HINTS.dog.cat} ${stepHint}`;
  }
  if (target === "car") {
    const top = topPredictions[0];
    if (top && top.label !== "car" && top.prob > 0.15) {
      const confusion = CONFUSION_HINTS.car?.[top.label];
      if (confusion) return `目前最像「${labelsZh[top.label]}」（${Math.round(top.prob * 100)}%）。${confusion} ${stepHint}`;
    }
  }
  if (target === "tree" && topPredictions.some((r) => r.label === "flower" && r.prob > 0.15)) {
    const flower = topPredictions.find((r) => r.label === "flower");
    return `AI 覺得像「花」（${Math.round(flower.prob * 100)}%）。${CONFUSION_HINTS.tree.flower} ${stepHint}`;
  }
  if (best.label !== target && best.prob > 0.2) {
    const confusion = CONFUSION_HINTS[target]?.[best.label];
    const guessName = labelsZh[best.label] || best.label;
    if (confusion) return `目前看起來像「${guessName}」。${confusion} ${stepHint}`;
    return `目前看起來像「${guessName}」，目標是「${labelsZh[target]}」。${stepHint}`;
  }
  return stepHint;
}

// ── 模型推論 (model.js) ───────────────────────────────────────
const IMAGE_SIZE = 28;
const MIN_INK_RATIO = 0.012;
const MODEL_LINE_WIDTH = 3.2;
const MODEL_MARGIN = 1;

let session = null;
let labels = null;

function getOrtWasmBase() {
  return new URL("vendor/onnxruntime-web/", window.location.href).href;
}

async function loadModel(baseUrl = "./models", onStatus) {
  const report = (msg) => onStatus?.(msg);
  report("讀取類別標籤…");
  const labelsResp = await fetch(`${baseUrl}/labels.json`);
  if (!labelsResp.ok) throw new Error("找不到 models/labels.json");
  labels = await labelsResp.json();
  if (!window.ort) throw new Error("ONNX Runtime Web 尚未載入");
  report("檢查模型檔案…");
  let resp = await fetch(`${baseUrl}/model.onnx`, { method: "HEAD" });
  if (!resp.ok) resp = await fetch(`${baseUrl}/model.onnx`);
  if (!resp.ok) throw new Error("找不到 models/model.onnx");
  report("載入 AI 引擎（首次約 25MB，需 10～60 秒）…");
  ort.env.wasm.wasmPaths = getOrtWasmBase();
  ort.env.wasm.numThreads = 1;
  ort.env.logLevel = "error";
  report("建立推論工作階段（請稍候）…");
  session = await Promise.race([
    ort.InferenceSession.create(`${baseUrl}/model.onnx`, { executionProviders: ["wasm"] }),
    new Promise((_, reject) => setTimeout(() => reject(new Error("載入逾時：請用本機 HTTP 伺服器開啟")), 90000)),
  ]);
  return labels;
}

function getLabels() { return labels; }

function dilateBinary(grid, passes = 1) {
  let cur = grid;
  for (let p = 0; p < passes; p++) {
    const out = new Float32Array(cur.length);
    for (let y = 0; y < IMAGE_SIZE; y++)
      for (let x = 0; x < IMAGE_SIZE; x++) {
        let v = 0;
        for (let dy = -1; dy <= 1; dy++)
          for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy, nx = x + dx;
            if (ny >= 0 && ny < IMAGE_SIZE && nx >= 0 && nx < IMAGE_SIZE)
              v = Math.max(v, cur[ny * IMAGE_SIZE + nx]);
          }
        out[y * IMAGE_SIZE + x] = v;
      }
    cur = out;
  }
  return cur;
}

function dilatePasses(cat) {
  return ["star","moon","guitar","bicycle","umbrella","airplane"].includes(cat) ? 2 : 1;
}

function rasterFromImageData(data, category) {
  const floats = new Float32Array(IMAGE_SIZE * IMAGE_SIZE);
  for (let i = 0; i < IMAGE_SIZE * IMAGE_SIZE; i++) {
    const gray = (data[i*4] + data[i*4+1] + data[i*4+2]) / 3;
    floats[i] = gray < 250 ? 1 : 0;
  }
  return dilateBinary(floats, dilatePasses(category));
}

function computeNormalization(strokePaths, renderCategory) {
  const points = strokePaths.flat();
  if (!points.length) return null;
  let minX=Infinity, maxX=-Infinity, minY=Infinity, maxY=-Infinity;
  for (const p of points) { minX=Math.min(minX,p.x); maxX=Math.max(maxX,p.x); minY=Math.min(minY,p.y); maxY=Math.max(maxY,p.y); }
  const cx=(minX+maxX)/2, cy=(minY+maxY)/2, bw=maxX-minX, bh=maxY-minY, fullSide=Math.max(bw,bh,1);
  const dists = points.map(p=>Math.hypot(p.x-cx,p.y-cy)).sort((a,b)=>a-b);
  const pct = q => dists[Math.min(dists.length-1, Math.floor(dists.length*q))] ?? 0;
  const radialHint = renderCategory==="sun" || (pct(0.88)>pct(0.35)*1.65 && pct(0.55)>fullSide*0.12);
  let side, clipDist=null;
  if (radialHint) {
    const coreR = Math.max(pct(0.28), pct(0.12), 8);
    side = coreR*2.4+10; clipDist = coreR*1.5;
  } else {
    const bodyHalf = pct(0.92);
    side = bodyHalf*2 + Math.max(8, fullSide*0.06);
    side = Math.min(side, fullSide*1.04);
    side = Math.max(side, fullSide*0.80);
  }
  return { cx, cy, side, clipDist, boxMinX: cx-side/2, boxMinY: cy-side/2 };
}

function strokesToTensor(strokePaths, renderCategory=null) {
  const empty = new Float32Array(IMAGE_SIZE*IMAGE_SIZE);
  if (!strokePaths?.length) return empty;
  const norm = computeNormalization(strokePaths, renderCategory);
  if (!norm) return empty;
  const { cx, cy, side, clipDist, boxMinX, boxMinY } = norm;
  const scale = (IMAGE_SIZE - MODEL_MARGIN*2) / side;
  const off = document.createElement("canvas");
  off.width = off.height = IMAGE_SIZE;
  const ctx = off.getContext("2d");
  ctx.fillStyle = "#fff"; ctx.fillRect(0,0,IMAGE_SIZE,IMAGE_SIZE);
  ctx.strokeStyle = "#000";
  const thick = ["car","dog","cat","house","hamburger","pizza"];
  const thin = ["star","moon","guitar","bicycle","umbrella","airplane","bird","fish"];
  ctx.lineWidth = renderCategory==="sun" ? 3.0 : thick.includes(renderCategory) ? 3.5 : thin.includes(renderCategory) ? 2.8 : MODEL_LINE_WIDTH;
  ctx.lineCap = ctx.lineJoin = "round";
  const toModel = p => {
    let px=p.x, py=p.y;
    if (clipDist!=null) { const d=Math.hypot(px-cx,py-cy); if(d>clipDist){const s=clipDist/d; px=cx+(px-cx)*s; py=cy+(py-cy)*s;} }
    return { x:(px-boxMinX)*scale+MODEL_MARGIN, y:(py-boxMinY)*scale+MODEL_MARGIN };
  };
  for (const path of strokePaths) {
    if (!path.length) continue;
    if (path.length===1) { const m=toModel(path[0]); ctx.beginPath(); ctx.arc(m.x,m.y,ctx.lineWidth/2,0,Math.PI*2); ctx.fillStyle="#000"; ctx.fill(); ctx.fillStyle="#fff"; continue; }
    ctx.beginPath(); const s=toModel(path[0]); ctx.moveTo(s.x,s.y);
    for (let i=1;i<path.length;i++) { const pt=toModel(path[i]); ctx.lineTo(pt.x,pt.y); }
    ctx.stroke();
  }
  return rasterFromImageData(ctx.getImageData(0,0,IMAGE_SIZE,IMAGE_SIZE).data, renderCategory);
}

function getInkRatio(strokePaths, renderCategory) {
  const t = strokesToTensor(strokePaths, renderCategory);
  return t.filter(v=>v>0.5).length / t.length;
}

function drawModelPreview(strokePaths, previewCanvas, renderCategory) {
  const tensor = strokesToTensor(strokePaths, renderCategory);
  const pctx = previewCanvas.getContext("2d");
  const sc = previewCanvas.width / IMAGE_SIZE;
  pctx.fillStyle="#fff"; pctx.fillRect(0,0,previewCanvas.width,previewCanvas.height);
  pctx.fillStyle="#111";
  for (let y=0;y<IMAGE_SIZE;y++) for (let x=0;x<IMAGE_SIZE;x++)
    if (tensor[y*IMAGE_SIZE+x]>0.5) pctx.fillRect(x*sc,y*sc,sc,sc);
}

function analyzeStrokeShape(strokePaths) {
  if (!strokePaths?.length) return { trunkScore:0, flowerLike:0, carLike:0, dogLike:0, catLike:0, sunLike:0, starLike:0, strokeCount:0 };
  let minX=Infinity, maxX=-Infinity, minY=Infinity, maxY=-Infinity;
  let verticalLen=0, horizontalLen=0, totalLen=0, lowerThirdLen=0;
  const bottomPoints=[];
  for (const path of strokePaths) for (const p of path) { minX=Math.min(minX,p.x); maxX=Math.max(maxX,p.x); minY=Math.min(minY,p.y); maxY=Math.max(maxY,p.y); }
  const bh=Math.max(maxY-minY,1), bw=Math.max(maxX-minX,1);
  const cx=(minX+maxX)/2, cy=(minY+maxY)/2;
  const bottomY=minY+bh*0.62, coreR=Math.min(bw,bh)*0.38;
  const angleBins=new Set(); let outwardLen=0;
  for (const path of strokePaths) {
    for (const p of path) if (p.y>=bottomY) bottomPoints.push(p);
    for (let i=1;i<path.length;i++) {
      const a=path[i-1], b=path[i], dx=b.x-a.x, dy=b.y-a.y, len=Math.hypot(dx,dy);
      if (len<1) continue;
      totalLen+=len;
      const angle=Math.abs(Math.atan2(dy,dx));
      if (angle>1.0&&angle<2.15) verticalLen+=len;
      if (angle<0.55||angle>2.65) horizontalLen+=len;
      if ((a.y+b.y)/2>minY+bh*0.55) lowerThirdLen+=len;
      const dA=Math.hypot(a.x-cx,a.y-cy), dB=Math.hypot(b.x-cx,b.y-cy);
      if (dB>dA+4&&dA<coreR*1.1) { outwardLen+=len; angleBins.add(Math.floor(((Math.atan2(b.y-cy,b.x-cx)+Math.PI)/(Math.PI/6))%12)); }
    }
  }
  const aspect=bh/bw, vRatio=verticalLen/Math.max(totalLen,1), hRatio=horizontalLen/Math.max(totalLen,1), lowRatio=lowerThirdLen/Math.max(totalLen,1);
  const trunkScore=Math.min(1, vRatio*1.4+lowRatio*0.9+(aspect>1.15?0.15:0)+(bw<bh*0.45?0.15:0));
  const strokeCount=strokePaths.length;
  const flowerLike=Math.min(1, (strokeCount>=3?0.3:strokeCount>=2?0.15:0)+(aspect>0.6&&aspect<1.6?0.25:0)+(vRatio>0.08&&lowRatio>0.05&&lowRatio<0.45?0.2:0)+(aspect<2.0?0.1:0)+(strokeCount>=4?0.2:0));
  const leftW=bottomPoints.filter(p=>p.x<cx-bw*0.12).length, rightW=bottomPoints.filter(p=>p.x>cx+bw*0.12).length;
  const wheelScore=leftW>=3&&rightW>=3?0.55:leftW>=2&&rightW>=2?0.35:0;
  const carLike=Math.min(1, hRatio*1.1+(bw>bh*1.15?Math.min(0.45,(bw/bh-1)*0.35):0)+wheelScore+lowRatio*0.35);
  const xs=bottomPoints.length>6?bottomPoints.map(p=>p.x):[];
  const bottomWide=xs.length>0&&(Math.max(...xs)-Math.min(...xs))/bw>0.45?0.35:bottomPoints.length>10?0.2:0;
  const dogLike=Math.min(1, lowRatio*1.15+bottomWide+(aspect>0.75&&aspect<1.55?0.2:0)+(bh>bw*0.75?0.15:0));
  const rayRatio=outwardLen/Math.max(totalLen,1);
  const sunLike=Math.min(1, (angleBins.size>=5?0.35+angleBins.size*0.06:angleBins.size>=3?0.25:0)+(rayRatio>0.28?0.35:rayRatio>0.15?0.2:0)+(Math.abs(bw-bh)/Math.max(bw,bh)<0.35?0.15:0));
  let catLike=Math.min(1, (aspect>0.65&&aspect<1.15&&lowRatio<0.32?0.45:0)+(lowRatio<0.25?0.25:0)+(bh/bw<1.2?0.15:0));
  catLike*=Math.max(0,1-sunLike*0.92);
  const diagRatio=1-vRatio-hRatio;
  let sharpTurns=0;
  for (const path of strokePaths) for (let i=2;i<path.length;i++) {
    const ax=path[i-2].x-path[i-1].x, ay=path[i-2].y-path[i-1].y, bx=path[i].x-path[i-1].x, by=path[i].y-path[i-1].y;
    const lA=Math.hypot(ax,ay), lB=Math.hypot(bx,by);
    if (lA<3||lB<3) continue;
    if ((ax*bx+ay*by)/(lA*lB)<0.2) sharpTurns++;
  }
  const starLike=Math.min(1, (diagRatio>0.45?0.3:diagRatio>0.3?0.15:0)+(Math.abs(bw-bh)/Math.max(bw,bh,1)<0.35?0.2:0)+(sharpTurns>=8?0.35:sharpTurns>=5?0.25:sharpTurns>=3?0.1:0)+(lowRatio<0.4?0.1:0));
  return { trunkScore, flowerLike, carLike, dogLike, catLike, sunLike, starLike, strokeCount, vRatio, hRatio };
}

function adjustLogits(logits, categories, shape, target) {
  if (!target) return logits;
  const out=Array.from(logits), idx=n=>categories.indexOf(n);
  const treeI=idx("tree"), flowerI=idx("flower"), carI=idx("car"), bicycleI=idx("bicycle"),
        cloudI=idx("cloud"), dogI=idx("dog"), catI=idx("cat"), sunI=idx("sun"), starI=idx("star");
  // 雲：無條件給基礎 boost
  if (cloudI>=0 && target==="cloud") {
    out[cloudI]+=2.2;
    if(sunI>=0)out[sunI]-=1.0; if(flowerI>=0)out[flowerI]-=0.8; if(catI>=0)out[catI]-=0.8;
  }
  if (treeI>=0&&flowerI>=0) {
    if (target==="tree"&&shape.trunkScore>=0.30) { out[treeI]+=1.8; out[flowerI]-=1.2; }
    else if (target==="tree"&&shape.flowerLike>=0.40&&shape.trunkScore<0.25) out[flowerI]+=0.4;
    else if (target==="flower") { out[flowerI]+=1.8+shape.flowerLike*2.5; out[treeI]-=1.5; if(sunI>=0)out[sunI]-=1.0; if(cloudI>=0)out[cloudI]-=0.8; }
  }
  if (carI>=0) {
    if (target==="car"&&shape.carLike>=0.22) { out[carI]+=2.2; if(bicycleI>=0)out[bicycleI]-=1.1; if(cloudI>=0)out[cloudI]-=1.0; if(flowerI>=0)out[flowerI]-=0.4; }
    else if (target==="car"&&shape.carLike<0.18&&bicycleI>=0) out[bicycleI]+=0.35;
  }
  if (dogI>=0&&catI>=0) {
    if (target==="dog"&&shape.dogLike>=0.25) { out[dogI]+=2.3; out[catI]-=1.6; }
    else if (target==="dog"&&shape.catLike>=0.35&&shape.dogLike<0.22) out[catI]+=0.45;
    else if (target==="cat"&&shape.catLike>=0.22&&shape.sunLike<0.35) { out[catI]+=1.8; out[dogI]-=1.4; }
    else if (target==="cat"&&shape.dogLike>=0.38) out[dogI]+=0.4;
  }
  if (sunI>=0&&target==="sun") {
    const sunBoost = 1.8 + shape.sunLike * 2.0;
    out[sunI]+=sunBoost;
    if(catI>=0)out[catI]-=2.0; if(dogI>=0)out[dogI]-=0.7; if(flowerI>=0)out[flowerI]-=0.8;
  }
  if (starI>=0&&target==="star") {
    const single=shape.strokeCount===1?1.0:shape.strokeCount<=2?0.5:0;
    out[starI]+=2.5+shape.starLike*2.0+single*1.5;
    if(sunI>=0)out[sunI]-=1.5; if(flowerI>=0)out[flowerI]-=1.0; if(catI>=0)out[catI]-=1.0;
    const houseI=idx("house"), burgerI=idx("hamburger");
    if(houseI>=0)out[houseI]-=1.2; if(burgerI>=0)out[burgerI]-=1.0;
  }
  // 吉他：需要有橢圓琴身 + 長頸，單一直線不應過關
  // 用 strokeCount 和 aspect 來驗證：吉他通常高比寬大（aspect > 1.2）且需要多筆
  const guitarI=idx("guitar");
  if (guitarI>=0 && target==="guitar") {
    const hasBody = shape.strokeCount >= 2;           // 至少要有琴身+琴頸兩筆
    const isTall = shape.aspect > 1.1;                // 吉他是直立的，高>寬
    const notTooSimple = shape.strokeCount >= 1 && (shape.vRatio??0) < 0.95; // 不能幾乎全是直線
    if (!hasBody || !isTall) {
      out[guitarI] -= 2.5;  // 筆跡太簡單，壓低吉他信心
    } else {
      out[guitarI] += 1.2;  // 符合吉他特徵，給予加成
    }
  }
  return out;
}

function softmax(arr) {
  const max=Math.max(...arr), exps=arr.map(x=>Math.exp(x-max)), sum=exps.reduce((a,b)=>a+b,0);
  return exps.map(e=>e/sum);
}

async function predict(strokePaths, targetCategory=null) {
  if (!session||!labels) throw new Error("模型尚未載入");
  if (getInkRatio(strokePaths, targetCategory)<MIN_INK_RATIO) return null;
  const inputData=strokesToTensor(strokePaths, targetCategory);
  const tensor=new ort.Tensor("float32", inputData, [1,1,IMAGE_SIZE,IMAGE_SIZE]);
  const results=await session.run({input:tensor});
  const categories=labels.categories, shape=analyzeStrokeShape(strokePaths);
  const logits=adjustLogits(results.logits.data, categories, shape, targetCategory);
  const probs=softmax(logits);
  return categories.map((label,i)=>({label,prob:probs[i]})).sort((a,b)=>b.prob-a.prob);
}

// ── 遊戲邏輯 (game.js) ───────────────────────────────────────
const ROUND_SECONDS = 25;
const GUESS_INTERVAL_MS = 1200;
const WIN_THRESHOLD = 0.40;
const HINT_AFTER_MS = 7000;
const STROKE_MIN_FOR_HINT = 8;
const EXCLUDED = ["bird", "airplane", "guitar"];

const canvas = document.getElementById("draw-canvas");
const ctx = canvas.getContext("2d");
const wordEl = document.getElementById("word");
const timerEl = document.getElementById("timer");
const statusEl = document.getElementById("status");
const hintBox = document.getElementById("hint-box");
const hintText = document.getElementById("hint-text");
const hintImage = document.getElementById("hint-image");
const hintStepLabel = document.getElementById("hint-step-label");
const predictionsEl = document.getElementById("predictions");
const startBtn = document.getElementById("start-btn");
const clearBtn = document.getElementById("clear-btn");
const skipBtn = document.getElementById("skip-btn");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayMsg = document.getElementById("overlay-msg");
const overlayBtn = document.getElementById("overlay-btn");
const scoreEl = document.getElementById("score");
const loadingEl = document.getElementById("loading");
const modelPreview = document.getElementById("model-preview");

let drawing=false, pointCount=0, strokePaths=[], currentPath=null;
let target=null, timerId=null, guessId=null, timeLeft=ROUND_SECONDS;
let hintLevel=0, score=0, roundActive=false, modelReady=false;

function setupCanvas() {
  const rect=canvas.parentElement.getBoundingClientRect();
  const size=Math.min(rect.width-8,480);
  canvas.width=canvas.height=size;
  clearCanvas();
}

function clearCanvas() {
  ctx.fillStyle="#fff"; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle="#111"; ctx.lineWidth=Math.max(4,canvas.width/72);
  ctx.lineCap=ctx.lineJoin="round";
  pointCount=0; strokePaths=[]; currentPath=null;
}

let recentTargets = [];

function pickTarget() {
  const {categories,labels_zh:zh}=getLabels();
  let pool=categories.filter(c=>!EXCLUDED.includes(c)&&!recentTargets.includes(c));
  if (pool.length===0) pool=categories.filter(c=>!EXCLUDED.includes(c));
  const label=pool[Math.floor(Math.random()*pool.length)];
  recentTargets.push(label);
  if (recentTargets.length>3) recentTargets.shift();
  return {label, display:zh[label]||label};
}

const START_TIPS = {
  tree: "畫樹：先畫粗長的豎線當樹幹（約一半高），再畫上方樹冠。",
  flower: "畫花：中心小圓 + 花瓣，下方細莖（莖要細、樹幹要粗）。",
  car: "畫汽車：橫向長方形車身 → 底下兩個圓輪 → 上方車頂。",
  dog: "畫狗：大頭+垂耳 → 橢圓身體 → 四條腿+尾巴（比貓大、腿要畫）。",
  cat: "畫貓：圓頭+尖耳朵 → 鬍鬚 → 小身體（不要畫四條粗腿）。",
  sun: "畫太陽：中等圓 + 從圓外緣畫短光芒（勿畫太長，否則 AI 會縮成一團）。",
  star: "畫星星：請用一筆連續畫完五角星（上→右下→左→右→左下→上），不要分開畫每個尖角！",
  house: "畫房子：正方形牆壁 → 上方三角屋頂 → 中間小門。",
  bicycle: "畫腳踏車：左右各一個大圓輪 → 三角車架連接兩輪 → 把手。",
  apple: "畫蘋果：圓形果身 → 頂部短莖 → 小葉子。",
  cloud: "畫雲：3～4 個重疊的圓弧連在一起，底部畫平，頂部圓潤。",
  fish: "畫魚：橫向橢圓魚身 → 右側三角尾巴 → 點一個眼睛。",
  umbrella: "畫雨傘：向上彎的大弧線傘面 → 中心往下直線傘柄 → J 形把手。",
  cup: "畫杯子：U 形杯身 → 右側 C 形把手 → 杯口橢圓線。",
  hamburger: "畫漢堡：上層半圓麵包 → 中間橫線肉排 → 下層半圓麵包。",
  moon: "畫月亮：畫 C 形彎月（月牙），開口朝右，不要畫成圓形。",
  pizza: "畫披薩：大三角形切片 → 內部點幾個小圓當配料。",
};

function startRound() {
  if (!modelReady) return;
  clearTimers(); clearCanvas(); hintLevel=0; hintBox.hidden=true; overlay.hidden=true;
  const t=pickTarget(); target=t.label;
  wordEl.textContent=`請畫：${t.display}`;
  statusEl.textContent=START_TIPS[t.label]||"開始畫吧！AI 會即時辨識。";
  predictionsEl.textContent=""; timeLeft=ROUND_SECONDS; timerEl.textContent=String(timeLeft);
  roundActive=true; startBtn.disabled=true;
  timerId=setInterval(()=>{ timeLeft--; timerEl.textContent=String(timeLeft); if(timeLeft<=0) endRound(false,"時間到！再試一次。"); },1000);
  const roundStart=Date.now();
  guessId=setInterval(async()=>{
    if (!roundActive||pointCount<3) return;
    try {
      const ranked=await predict(strokePaths, target);
      if (!ranked) { predictionsEl.textContent="再多畫一點，AI 才能辨識…"; return; }
      if (modelPreview) drawModelPreview(strokePaths, modelPreview, target);
      renderPredictions(ranked);
      const targetProb=ranked.find(r=>r.label===target)?.prob??0;
      if (targetProb>=WIN_THRESHOLD) { endRound(true,`太棒了！AI 有 ${Math.round(targetProb*100)}% 把握這是「${getLabels().labels_zh[target]}」。`); return; }
      const elapsed=Date.now()-roundStart;
      const flowerProb=ranked.find(r=>r.label==="flower")?.prob??0;
      const treeConfused=target==="tree"&&flowerProb>0.18&&ranked[0]?.label!=="tree";
      const flowerConfused=target==="flower"&&flowerProb<0.45&&ranked[0]?.label!=="flower";
      const carProb=ranked.find(r=>r.label==="car")?.prob??0;
      const carConfused=target==="car"&&carProb<0.45&&(ranked[0]?.label==="bicycle"||ranked[0]?.label==="cloud");
      const catProb=ranked.find(r=>r.label==="cat")?.prob??0;
      const dogConfused=target==="dog"&&(ranked.find(r=>r.label==="dog")?.prob??0)<0.5&&(ranked[0]?.label==="cat"||catProb>0.2);
      const sunConfused=target==="sun"&&(ranked.find(r=>r.label==="sun")?.prob??0)<0.5&&(ranked[0]?.label==="cat"||catProb>0.18);
      const starConfused=target==="star"&&(ranked.find(r=>r.label==="star")?.prob??0)<0.45&&ranked[0]?.label!=="star";
      const cloudProb=ranked.find(r=>r.label==="cloud")?.prob??0;
      const cloudConfused=target==="cloud"&&cloudProb<0.45&&ranked[0]?.label!=="cloud";
      const hintReady=pointCount>=STROKE_MIN_FOR_HINT&&(elapsed>=HINT_AFTER_MS||(treeConfused&&elapsed>=3500)||(flowerConfused&&elapsed>=3500)||(carConfused&&elapsed>=3500)||(dogConfused&&elapsed>=3500)||(sunConfused&&elapsed>=3500)||(starConfused&&elapsed>=3500)||(cloudConfused&&elapsed>=3500));
      if (hintReady) maybeShowHint(ranked, elapsed);
    } catch(err) { console.error(err); }
  }, GUESS_INTERVAL_MS);
}

function maybeShowHint(ranked, elapsed) {
  const targetProb=ranked.find(r=>r.label===target)?.prob??0;
  if (targetProb>=WIN_THRESHOLD) return;
  const newLevel=elapsed>HINT_AFTER_MS+6000?2:elapsed>HINT_AFTER_MS+3000?1:0;
  if (newLevel>hintLevel) hintLevel=newLevel;
  hintBox.hidden=false;
  hintImage.src=getHintDataUrl(target, hintLevel);
  hintImage.alt=`${getLabels().labels_zh[target]} 參考畫法 步驟 ${hintLevel+1}`;
  hintStepLabel.textContent=`步驟 ${hintLevel+1} / 3`;
  hintText.textContent=getHint(target, hintLevel, ranked.slice(0,3), getLabels().labels_zh);
  statusEl.textContent="AI 提示：參考右側示意圖，把形狀畫在畫布中央。";
}

function renderPredictions(ranked) {
  const zh=getLabels().labels_zh;
  predictionsEl.innerHTML=ranked.slice(0,3).map(r=>`<span class="pred ${r.label===target?"pred-target":""}">${zh[r.label]||r.label} ${Math.round(r.prob*100)}%</span>`).join("");
}

function endRound(won, message) {
  if (!roundActive) return;
  roundActive=false; clearTimers(); startBtn.disabled=false;
  if (won) { score++; scoreEl.textContent=String(score); }
  overlay.hidden=false;
  overlayTitle.textContent=won?"猜對了！":"本回合結束";
  overlayMsg.textContent=message;
  statusEl.textContent=won?"成功！":"再接再厲。";
}

function clearTimers() { clearInterval(timerId); clearInterval(guessId); timerId=guessId=null; }

function getPos(e) {
  const rect=canvas.getBoundingClientRect();
  const cx=e.touches?e.touches[0].clientX:e.clientX, cy=e.touches?e.touches[0].clientY:e.clientY;
  return { x:((cx-rect.left)/rect.width)*canvas.width, y:((cy-rect.top)/rect.height)*canvas.height };
}

function startStroke(e) { if(!roundActive)return; e.preventDefault(); drawing=true; const{x,y}=getPos(e); currentPath=[{x,y}]; ctx.beginPath(); ctx.moveTo(x,y); }
function moveStroke(e) {
  if(!drawing||!roundActive||!currentPath)return; e.preventDefault();
  const{x,y}=getPos(e), last=currentPath[currentPath.length-1];
  if(Math.hypot(x-last.x,y-last.y)<1.5)return;
  currentPath.push({x,y}); ctx.lineTo(x,y); ctx.stroke(); pointCount++;
}
function endStroke() { if(currentPath?.length>0) strokePaths.push(currentPath); currentPath=null; drawing=false; }

async function init() {
  overlay.hidden=true; setupCanvas(); window.addEventListener("resize",setupCanvas);
  canvas.addEventListener("mousedown",startStroke); canvas.addEventListener("mousemove",moveStroke);
  canvas.addEventListener("mouseup",endStroke); canvas.addEventListener("mouseleave",endStroke);
  canvas.addEventListener("touchstart",startStroke,{passive:false}); canvas.addEventListener("touchmove",moveStroke,{passive:false});
  canvas.addEventListener("touchend",endStroke);
  startBtn.addEventListener("click",startRound);
  clearBtn.addEventListener("click",()=>{ if(roundActive)clearCanvas(); });
  skipBtn.addEventListener("click",()=>{ if(roundActive)endRound(false,`答案是「${getLabels().labels_zh[target]}」。`); });
  overlayBtn.addEventListener("click",()=>{ overlay.hidden=true; startRound(); });
  try {
    loadingEl.hidden=false;
    await loadModel("./models", msg=>{ loadingEl.textContent=msg; });
    modelReady=true; loadingEl.textContent="模型已載入，按「開始回合」！"; statusEl.textContent="準備好了，按下開始。";
  } catch(err) {
    loadingEl.textContent=`載入失敗：${err.message}`;
    statusEl.textContent="請用 python -m http.server 8080 開啟；並確認 models/model.onnx 與 vendor/onnxruntime-web/ 存在。";
  }
}

init().catch(err=>{ console.error(err); if(loadingEl)loadingEl.textContent=`啟動失敗：${err.message}`; });
