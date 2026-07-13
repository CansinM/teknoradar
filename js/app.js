const trends = [
  "AI agent sistemleri",
  "WebAssembly",
  "Passkeys",
  "Edge compute",
  "Rust servisleri",
  "Supply chain security",
  "Vector database",
  "Observability"
];

const fallbackNews = [
  {
    source: "RSS",
    type: "rss",
    title: "AI altyapısında maliyet ve gizlilik kararlarını birlikte düşünme dönemi",
    url: "https://www.technologyreview.com/",
    note: "Model kullanımı yaygınlaştıkça veri akışı ve maliyet takibi ürün mimarisinin parçası oluyor."
  },
  {
    source: "Hacker News",
    type: "hn",
    title: "Yeni web platform özellikleri geliştirici deneyimini hızlandırıyor",
    url: "https://news.ycombinator.com/",
    note: "Tarayıcı API'leri artık sadece UI değil, dosya, kimlik ve yerel deneyim tarafını da etkiliyor."
  },
  {
    source: "Dev.to",
    type: "devto",
    title: "Junior ekipler için okunabilir kod ve review kültürü",
    url: "https://dev.to/",
    note: "Küçük pratikler büyük teknik borçları erken durdurabilir."
  },
  {
    source: "RSS",
    type: "rss",
    title: "Açık kaynak paket seçiminde lisans ve bakım ritmi kritik",
    url: "https://github.blog/",
    note: "Yıldız sayısı tek başına yeterli sinyal değil; issue kalitesi ve release ritmi de okunmalı."
  }
];

const tools = [
  { name: "MDN Web Docs", category: "frontend", tag: "DOC", url: "https://developer.mozilla.org/", description: "HTML, CSS ve Web API'leri için en güvenilir pratik referanslardan biri." },
  { name: "Can I Use", category: "frontend", tag: "WEB", url: "https://caniuse.com/", description: "Tarayıcı destek durumlarini hızlı kontrol etmek için vazgeçilmez kaynak." },
  { name: "PageSpeed Insights", category: "frontend", tag: "PERF", url: "https://pagespeed.web.dev/", description: "Performans, erişilebilirlik ve SEO sinyalleri için ücretsiz analiz." },
  { name: "Postman Public API Network", category: "backend", tag: "API", url: "https://www.postman.com/explore", description: "API keşfi, test ve koleksiyon inceleme için ücretsiz kaynak." },
  { name: "JSONPlaceholder", category: "backend", tag: "MOCK", url: "https://jsonplaceholder.typicode.com/", description: "Frontend prototipleri için sahte REST API." },
  { name: "OWASP Cheat Sheet", category: "security", tag: "SEC", url: "https://cheatsheetseries.owasp.org/", description: "Web güvenliği için uygulanabilir kontrol listeleri ve rehberler." },
  { name: "CISA KEV Catalog", category: "security", tag: "KEV", url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog", description: "Aktif istismar edilen açıkları takip etmek için resmi kaynak." },
  { name: "Public APIs", category: "data", tag: "DATA", url: "https://github.com/public-apis/public-apis", description: "Ücretsiz ve public API fikirleri için genis kaynak listesi." },
  { name: "Google Dataset Search", category: "data", tag: "DATA", url: "https://datasetsearch.research.google.com/", description: "Araştırma ve prototiplerde kullanılabilecek veri setlerini bulma aracı." }
];

const selectedRepos = [
  { repo: "microsoft/playwright", category: "web", tag: "E2E", description: "Modern web uygulamaları için guclu test otomasyonu.", fallbackStars: "70k+" },
  { repo: "vercel/next.js", category: "web", tag: "WEB", description: "React tabanli full-stack web framework ekosistemi.", fallbackStars: "125k+" },
  { repo: "supabase/supabase", category: "infra", tag: "DB", description: "Açık kaynak Firebase alternatifi; auth, database ve storage.", fallbackStars: "80k+" },
  { repo: "ollama/ollama", category: "ai", tag: "AI", description: "Yerel LLM çalıştırmayı kolaylaştıran populer açık kaynak arac.", fallbackStars: "90k+" },
  { repo: "langchain-ai/langchain", category: "ai", tag: "AI", description: "LLM tabanli uygulamalar için entegrasyon ve workflow kütüphanesi.", fallbackStars: "100k+" },
  { repo: "trufflesecurity/trufflehog", category: "security", tag: "SEC", description: "Secret scanning ve credential sızıntısı tespiti için arac.", fallbackStars: "18k+" }
];

const guides = [
  { title: "Yeni bir repo seçmeden önce 7 sinyal", tag: "OSS", description: "Lisans, issue kalitesi, release ritmi, maintainer aktivitesi, test durumu, dokumantasyon ve bagimlilik riski birlikte okunmalı." },
  { title: "Küçük ekipler için güvenlik başlangıcı", tag: "SEC", description: "2FA, secret yonetimi, dependency audit, backup testi ve admin panel envanteri ilk haftalık rutin olabilir." },
  { title: "API kullanırken maliyetsiz kalma taktigi", tag: "API", description: "Cache, pagination, fallback veri ve rate limit dostu istek tasarımı statik projelerde hayat kurtarir." },
  { title: "Frontend performans kontrolü", tag: "WEB", description: "Görsel boyutu, font yüklemesi, JS miktarı ve kritik CSS her deploy oncesi kontrol edilmeli." },
  { title: "AI ozelligi eklemeden önce", tag: "AI", description: "Veri gizliliği, cevap doğrulama, maliyet limiti ve kullanici beklentisi netlestirilmeden model eklenmemeli." },
  { title: "GitHub Pages için yayın rutini", tag: "OPS", description: "README, lisans, sitemap, favicon, meta etiketleri ve responsive test tamamlanmadan repo vitrine alinmamali." }
];

const kevFallback = [
  { vendorProject: "GitLab", product: "Community and Enterprise Edition", vulnerabilityName: "Critical authentication bypass risk", cveID: "CVE-2023-7028", dateAdded: "2024-05-01", requiredAction: "Update to fixed versions and review exposed instances." },
  { vendorProject: "Atlassian", product: "Confluence", vulnerabilityName: "Remote code execution risk", cveID: "CVE-2023-22527", dateAdded: "2024-01-24", requiredAction: "Patch internet-facing servers and inspect logs." },
  { vendorProject: "Apache", product: "Struts", vulnerabilityName: "Remote code execution risk", cveID: "CVE-2023-50164", dateAdded: "2024-01-10", requiredAction: "Upgrade affected deployments and verify dependencies." }
];

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

function initMenu() {
  const button = qs("[data-menu-toggle]");
  const nav = qs("[data-nav]");
  if (!button || !nav) return;
  button.addEventListener("click", () => nav.classList.toggle("is-open"));
}

function setDate() {
  const target = qs("[data-current-date]");
  if (!target) return;
  target.textContent = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date());
}

function renderTrends() {
  const target = qs("[data-trends]");
  if (!target) return;
  target.innerHTML = trends.map((trend) => `<span class="trend-chip">${trend}</span>`).join("");
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { accept: "application/json" } });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}

async function getNews() {
  try {
    const topIds = await fetchJson("https://hacker-news.firebaseio.com/v0/topstories.json");
    const hnItems = await Promise.all(topIds.slice(0, 5).map((id) => fetchJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)));
    const devItems = await fetchJson("https://dev.to/api/articles?tag=technology&per_page=5");
    const mappedHn = hnItems.filter(Boolean).map((item) => ({
      source: "Hacker News",
      type: "hn",
      title: item.title,
      url: item.url || `https://news.ycombinator.com/item?id=${item.id}`,
      note: `${item.score || 0} puan, ${item.descendants || 0} yorum`
    }));
    const mappedDev = devItems.map((item) => ({
      source: "Dev.to",
      type: "devto",
      title: item.title,
      url: item.url,
      note: item.description || `${item.public_reactions_count || 0} reaksiyon`
    }));
    return [...mappedHn, ...mappedDev, ...fallbackNews.filter((item) => item.type === "rss")];
  } catch {
    return fallbackNews;
  }
}

function feedItem(item) {
  return `
    <article class="feed-item" data-type="${item.type}">
      <div class="feed-meta"><span>${item.source}</span><span>${item.type.toUpperCase()}</span></div>
      <h3>${item.title}</h3>
      <p>${item.note}</p>
      <a href="${item.url}" target="_blank" rel="noreferrer">Kaynakta oku</a>
    </article>
  `;
}

async function renderNews() {
  const news = await getNews();
  const home = qs("[data-home-news]");
  const feed = qs("[data-news-feed]");
  if (home) home.innerHTML = news.slice(0, 4).map((item) => `<article class="stack-item"><h3>${item.title}</h3><p>${item.note}</p><a href="${item.url}" target="_blank" rel="noreferrer">${item.source}</a></article>`).join("");
  if (feed) {
    feed.innerHTML = news.map(feedItem).join("");
    wireFilters("[data-news-filter]", "[data-news-feed] [data-type]");
  }
}

function renderTools() {
  const target = qs("[data-tools-grid]");
  if (!target) return;
  target.innerHTML = tools.map((tool) => `
    <article class="resource-card" data-type="${tool.category}">
      <span class="tag">${tool.tag}</span>
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <a href="${tool.url}" target="_blank" rel="noreferrer">Araci aç</a>
    </article>
  `).join("");
  wireFilters("[data-tool-filter]", "[data-tools-grid] [data-type]");
}

async function renderRepos() {
  const target = qs("[data-repo-grid]");
  if (!target) return;
  const cards = await Promise.all(selectedRepos.map(async (item) => {
    try {
      const repo = await fetchJson(`https://api.github.com/repos/${item.repo}`);
      return { ...item, stars: Intl.NumberFormat("en", { notation: "compact" }).format(repo.stargazers_count), language: repo.language || "Mixed", url: repo.html_url };
    } catch {
      return { ...item, stars: item.fallbackStars, language: "Mixed", url: `https://github.com/${item.repo}` };
    }
  }));
  target.innerHTML = cards.map((repo) => `
    <article class="repo-card" data-type="${repo.category}">
      <span class="tag">${repo.tag}</span>
      <h3>${repo.repo}</h3>
      <p>${repo.description}</p>
      <div class="repo-stats"><span>${repo.stars} stars</span><span>${repo.language}</span></div>
      <a href="${repo.url}" target="_blank" rel="noreferrer">GitHub'da incele</a>
    </article>
  `).join("");
  wireFilters("[data-repo-filter]", "[data-repo-grid] [data-type]");
}

async function renderSecurity() {
  const home = qs("[data-home-security]");
  const kevList = qs("[data-kev-list]");
  if (!home && !kevList) return;
  let items = kevFallback;
  try {
    const data = await fetchJson("https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json");
    items = data.vulnerabilities.slice(0, 8);
  } catch {
    items = kevFallback;
  }
  const html = items.map((item) => `
    <article class="stack-item">
      <div class="feed-meta"><span>${item.vendorProject || "Vendor"}</span><span>${item.cveID || "CVE"}</span></div>
      <h3>${item.product || item.vulnerabilityName}</h3>
      <p>${item.vulnerabilityName || item.requiredAction}</p>
      <a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank" rel="noreferrer">CISA kaynagini aç</a>
    </article>
  `).join("");
  if (home) home.innerHTML = html;
  if (kevList) kevList.innerHTML = html;
}

function renderGuides() {
  const target = qs("[data-guide-grid]");
  if (!target) return;
  target.innerHTML = guides.map((guide) => `
    <article class="guide-card">
      <span class="tag">${guide.tag}</span>
      <h3>${guide.title}</h3>
      <p>${guide.description}</p>
    </article>
  `).join("");
}

function wireFilters(buttonSelector, itemSelector) {
  qsa(buttonSelector).forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.newsFilter || button.dataset.toolFilter || button.dataset.repoFilter;
      qsa(buttonSelector).forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      qsa(itemSelector).forEach((item) => {
        item.hidden = value !== "all" && item.dataset.type !== value;
      });
    });
  });
}

initMenu();
setDate();
renderTrends();
renderNews();
renderTools();
renderRepos();
renderSecurity();
renderGuides();
