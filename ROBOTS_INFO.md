# robots.txt — пояснения и инструкция

## Что делает каждая директива

| Директива | Назначение |
|-----------|------------|
| **User-agent: \*** | Правила для всех роботов (Google, Yandex, Bing и др.). |
| **User-agent: Googlebot** | Отдельный блок для Google (при необходимости особых правил). |
| **User-agent: Yandex** | Отдельный блок для Яндекса. |
| **Allow: /** | Разрешить индексацию всего сайта по умолчанию; то, что не попадает под Disallow, считается разрешённым. |
| **Disallow: /assets/** | Не индексировать папку assets (CSS, JS, изображения) — экономия краул-бюджета и отсутствие дублей по медиа. |
| **Disallow: /admin/** | Закрыть будущую админку или служебные страницы. |
| **Disallow: /private/** | Закрыть приватные/черновые страницы. |
| **Disallow: /js/**, **/css/**, **/images/** | На случай появления таких папок в корне — не индексировать. |
| **Sitemap: https://...** | Указание на карту сайта; Google и Yandex используют её для обнаружения страниц. |

**Важно:** У вас нет отдельных URL `/services/` и `/contact/` — это якоря на главной (`#services`, `#contact`). Разрешение `Allow: /` уже открывает главную и все HTML-страницы в корне (`/`, `/index.html`, `/privacy.html`, `/offer.html`).

---

## Тест-кейсы: что разрешено / запрещено

| URL | Ожидание | Причина |
|-----|----------|---------|
| `https://ryashok.github.io/` | ✅ Разрешено | Попадает под Allow: / |
| `https://ryashok.github.io/index.html` | ✅ Разрешено | Корень сайта, не под Disallow |
| `https://ryashok.github.io/privacy.html` | ✅ Разрешено | То же |
| `https://ryashok.github.io/offer.html` | ✅ Разрешено | То же |
| `https://ryashok.github.io/assets/css/styles.css` | ❌ Запрещено | Disallow: /assets/ |
| `https://ryashok.github.io/assets/js/main.js` | ❌ Запрещено | Disallow: /assets/ |
| `https://ryashok.github.io/assets/img/photo.png` | ❌ Запрещено | Disallow: /assets/ |
| `https://ryashok.github.io/admin/` | ❌ Запрещено | Disallow: /admin/ |
| `https://ryashok.github.io/private/` | ❌ Запрещено | Disallow: /private/ |
| `https://ryashok.github.io/favicon/favicon.ico` | ✅ Разрешено | /favicon/ не в списке Disallow (при желании можно добавить Disallow: /favicon/) |

Проверка после публикации:
- **Google:** [Google Search Console](https://search.google.com/search-console) → Проверка URL или инструмент «Проверка robots.txt».
- **Яндекс:** [Яндекс.Вебмастер](https://webmaster.yandex.ru) → Индексирование → Файлы для роботов.

---

## Как залить robots.txt на GitHub (для GitHub Pages)

1. Положите `robots.txt` в **корень** репозитория (рядом с `index.html`).
2. Закоммитьте и запушьте:
   ```bash
   git add robots.txt
   git commit -m "Add robots.txt for SEO"
   git push origin main
   ```
3. После деплоя файл будет доступен по адресу:  
   **https://ryashok.github.io/robots.txt**

Дополнительно: создайте **sitemap.xml** в корне и добавьте в него URL главной, `privacy.html` и `offer.html` — тогда директива `Sitemap` в robots.txt начнёт работать.
