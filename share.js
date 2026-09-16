import kenthemanImage from './assets/artists/kentheman.jpg';
import strayKidsImage from './assets/artists/stray-kids.jpg';
import merguiImage from './assets/artists/mergui.jpg';

const briefs = {
  kentheman: {
    artist: 'KenTheMan', track: 'OMG', image: kenthemanImage,
    headline: '“Walk-in confidence” is the leading 48-hour pattern for “OMG.”',
    summary: '286 matches across social platforms. Houston and Atlanta audiences ages 18–24 show the highest concentration.',
    sentiment: '92%', audience: 'Houston + Atlanta · 18–24',
    move: 'Launch a 72-hour walk-in challenge.',
    actions: ['Seed “the room was waiting” creator prompts today.', 'Cut an entrance-ready hook loop tomorrow.', 'Test in Houston and Atlanta within 72 hours.'],
    kpi: 'Creator participation rate', success: 'Review after 72 hours and compare participation among the target audience with the campaign’s prior 72-hour baseline.',
    ranges: { 24: ['176 / 24h', '4.0×'], 48: ['286 / 48h', '3.5×'], 168: ['468 / 7d', '2.7×'] },
    kpis: [['Total audience', '1.14M', '+3.8%'], ['Monthly listeners', '823.7K', '+6.2%'], ['Social reach', '58.6M', '+12.4%'], ['Engagement rate', '6.8%', '+0.7 pts']],
    trend: [32, 36, 39, 45, 43, 51, 55, 61, 64, 72, 79, 86], trendValue: '+3.8%', trendNote: 'Social audience growth remains above the prior period, led by TikTok.',
    ages: [['18–24', 46], ['25–34', 31], ['13–17', 12], ['35–44', 8]], audienceNote: 'Houston, Atlanta, Dallas, and Chicago are the leading cities. 57% of the engaged audience is returning.',
    platforms: [['TikTok', '34.6M reach', '13.2%', 100], ['Instagram', '12.8M reach', '5.9%', 45], ['YouTube', '6.4M reach', '6.1%', 31]],
    posts: [['TikTok · Video', 'POV: the room was waiting', '12.9M', '14.8%'], ['Instagram · Reel', 'The entrance before the entrance', '4.2M', '7.8%'], ['YouTube · Short', 'OMG live walk-in', '2.6M', '6.4%']],
    conversation: '92%', themes: [['Confidence', '34%'], ['Entrance / reveal', '27%'], ['Houston pride', '18%']]
  },
  straykids: {
    artist: 'Stray Kids', track: 'THIS & THAT', image: strayKidsImage,
    headline: 'Split-screen edits are the leading 48-hour pattern for “THIS & THAT.”',
    summary: '473 matches across social platforms. Indonesia and Mexico audiences ages 13–24 show the highest concentration.',
    sentiment: '94%', audience: 'Indonesia + Mexico · 13–24',
    move: 'Give the fandom an official “both” template.',
    actions: ['Release member-led split-screen prompts today.', 'Publish an editable beat-switch template tomorrow.', 'Localize for Indonesia and Mexico within 72 hours.'],
    kpi: 'Localized template uses', success: 'Review after 72 hours and compare localized participation with the global campaign control.',
    ranges: { 24: ['294 / 24h', '4.4×'], 48: ['473 / 48h', '3.8×'], 168: ['812 / 7d', '3.0×'] },
    kpis: [['Total audience', '71.0M', '+2.9%'], ['Monthly listeners', '10.94M', '+7.5%'], ['Social reach', '821M', '+18.6%'], ['Engagement rate', '8.4%', '+1.1 pts']],
    trend: [29, 34, 39, 41, 48, 53, 57, 61, 69, 73, 80, 88], trendValue: '+2.9%', trendNote: 'Global audience growth is broadening, with Mexico accelerating fastest.',
    ages: [['18–24', 42], ['13–17', 29], ['25–34', 21], ['35–44', 5]], audienceNote: 'Jakarta, Mexico City, Los Angeles, and Tokyo are the leading cities. 71% of the engaged audience is returning.',
    platforms: [['Instagram', '312M reach', '12.3%', 100], ['TikTok', '218M reach', '8.0%', 70], ['YouTube', '198M reach', '8.3%', 63]],
    posts: [['Instagram · Reel', 'Why choose one?', '72.4M', '15.1%'], ['TikTok · Video', 'This side & that side', '61.8M', '9.4%'], ['YouTube · Short', 'One sound, two moods', '34.2M', '9.2%']],
    conversation: '94%', themes: [['Dual identity', '31%'], ['Member pairings', '28%'], ['Edit templates', '24%']]
  },
  mergui: {
    artist: 'Mergui', track: 'Alien', image: merguiImage,
    headline: '“Beautifully out of place” is the leading 48-hour pattern for “Alien.”',
    summary: '139 matches across social platforms. United States and Germany audiences ages 18–24 show the highest concentration.',
    sentiment: '88%', audience: 'United States + Germany · 18–24',
    move: 'Make discovery personal, not promotional.',
    actions: ['Invite first-day-in-a-new-place stories today.', 'Release an intimate live-room cut tomorrow.', 'Test in the United States and Germany within 72 hours.'],
    kpi: 'New-listener save rate', success: 'Review after 72 hours and compare saves among new listeners with the prior discovery baseline.',
    ranges: { 24: ['81 / 24h', '3.2×'], 48: ['139 / 48h', '2.8×'], 168: ['254 / 7d', '2.3×'] },
    kpis: [['Total audience', '772K', '+1.7%'], ['Monthly listeners', '426.9K', '+3.0%'], ['Social reach', '19.9M', '+8.1%'], ['Engagement rate', '4.9%', '+0.4 pts']],
    trend: [36, 39, 43, 47, 45, 52, 57, 61, 65, 70, 78, 84], trendValue: '+1.7%', trendNote: 'Discovery is building steadily, with Instagram driving most new attention.',
    ages: [['18–24', 38], ['25–34', 34], ['35–44', 14], ['13–17', 9]], audienceNote: 'Los Angeles, Tel Aviv, Berlin, and London are the leading cities. 56% of the engaged audience is new.',
    platforms: [['Instagram', '12.8M reach', '9.4%', 100], ['TikTok', '4.1M reach', '4.7%', 42], ['YouTube', '1.9M reach', '4.4%', 25]],
    posts: [['Instagram · Reel', 'First night in a new city', '2.4M', '7.1%'], ['TikTok · Video', 'For everyone still finding home', '1.6M', '5.8%'], ['YouTube · Short', 'Alien · live room', '742K', '4.9%']],
    conversation: '88%', themes: [['Belonging', '29%'], ['New city', '24%'], ['Artist discovery', '21%']]
  }
};

const params = new URL(window.location.href).searchParams;
const artistKey = params.get('artist') || 'kentheman';
const range = ['24', '48', '168'].includes(params.get('range')) ? params.get('range') : '48';
const brief = briefs[artistKey];

const hashSharePassword = async (password, salt) => {
  if (!window.crypto?.subtle) throw new Error('Secure password checks are unavailable.');
  const bytes = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await window.crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
};

const renderSharePasswordGate = () => {
  const salt = params.get('salt');
  const accessHash = params.get('access');
  if (params.get('protected') !== '1' || !salt || !accessHash) return;

  const storageKey = `swamp-share-access-${accessHash}`;
  try {
    if (window.sessionStorage.getItem(storageKey) === 'granted') {
      document.documentElement.classList.remove('auth-pending');
      return;
    }
  } catch {
    // Continue to the password gate when storage is unavailable.
  }

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="site-auth" data-share-auth role="dialog" aria-modal="true" aria-labelledby="share-auth-title" aria-describedby="share-auth-description">
      <section class="site-auth__card">
        <div class="site-auth__brand" aria-label="The Swamp">
          <svg class="brand-mark" aria-hidden="true" viewBox="0 0 32 28"><path class="reed" d="M9 20V8m10 12V5m7 15V11"/><rect class="cattail" x="7" y="3" width="4" height="7" rx="2"/><rect class="cattail" x="17" y="0" width="4" height="7" rx="2"/><rect class="cattail" x="24" y="7" width="4" height="6" rx="2"/><path class="water" d="M2 21c4-2 8-2 12 0s8 2 16 0M5 25c3-1.5 6-1.5 9 0s6 1.5 13 0"/></svg>
          <strong>The Swamp</strong>
        </div>
        <div class="site-auth__heading">
          <span>Password protected</span>
          <h1 id="share-auth-title">Open artist report</h1>
          <p id="share-auth-description">Enter the password shared with you to view this report.</p>
        </div>
        <form class="site-auth__form" data-share-auth-form novalidate>
          <label for="share-auth-password">Password</label>
          <input id="share-auth-password" name="password" type="password" autocomplete="current-password" spellcheck="false" required />
          <p class="site-auth__error" data-share-auth-error aria-live="polite"></p>
          <button type="submit">Open report</button>
        </form>
        <p class="site-auth__meta">Shared securely by Campaign Marketing</p>
      </section>
    </div>
  `);

  const gate = document.querySelector('[data-share-auth]');
  const form = document.querySelector('[data-share-auth-form]');
  const input = document.querySelector('#share-auth-password');
  const error = document.querySelector('[data-share-auth-error]');
  const button = form.querySelector('button');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    error.textContent = '';
    input.removeAttribute('aria-invalid');
    button.disabled = true;
    button.textContent = 'Checking…';

    try {
      if (await hashSharePassword(input.value, salt) !== accessHash) {
        input.setAttribute('aria-invalid', 'true');
        error.textContent = 'That password does not match. Try again.';
        input.select();
        return;
      }
      try { window.sessionStorage.setItem(storageKey, 'granted'); } catch { /* Keep access for the current page. */ }
      document.documentElement.classList.remove('auth-pending');
      gate.classList.add('is-unlocking');
      window.setTimeout(() => {
        gate.remove();
        const report = document.querySelector('#shared-brief');
        report?.setAttribute('tabindex', '-1');
        report?.focus({ preventScroll: true });
      }, 180);
    } catch (authError) {
      error.textContent = authError.message;
    } finally {
      button.disabled = false;
      button.textContent = 'Open report';
    }
  });

  window.setTimeout(() => input.focus(), 0);
};

renderSharePasswordGate();

const setText = (selector, value) => { document.querySelector(selector).textContent = value; };

const makeTrendChart = (values) => {
  const width = 560; const height = 128; const inset = 6;
  const low = Math.min(...values); const high = Math.max(...values); const spread = high - low || 1;
  const points = values.map((value, index) => ({
    x: inset + index * ((width - inset * 2) / (values.length - 1)),
    y: height - inset - ((value - low) / spread) * (height - inset * 2)
  }));
  const path = points.map((point, index) => `${index ? 'L' : 'M'}${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' ');
  const last = points.at(-1);
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Audience trend rising over twelve periods"><defs><linearGradient id="share-trend-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0071e3" stop-opacity=".22"/><stop offset="1" stop-color="#0071e3" stop-opacity="0"/></linearGradient></defs><path class="share-chart-grid" d="M0 32H560M0 64H560M0 96H560"/><path class="share-chart-fill" d="${path} L${last.x} ${height} L${inset} ${height} Z"/><path class="share-chart-line" d="${path}"/><circle cx="${last.x}" cy="${last.y}" r="5"/></svg>`;
};

const createTextElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
};

if (!brief) {
  document.querySelector('#shared-brief').innerHTML = '<div class="share-invalid"><p class="brief-overline">Link unavailable</p><h1>This mock brief does not exist.</h1><p>Ask the marketing team for a new live-page link.</p></div>';
} else {
  setText('#share-artist-name', `${brief.artist} · ${brief.track}`);
  const image = document.querySelector('#share-artist-image');
  image.src = brief.image;
  image.alt = brief.artist;
  setText('#public-headline', brief.headline);
  setText('#public-summary', brief.summary);
  setText('#public-count', brief.ranges[range][0]);
  setText('#public-lift', brief.ranges[range][1]);
  setText('#public-sentiment', brief.sentiment);
  setText('#public-audience', brief.audience);
  setText('#public-move', brief.move);
  const list = document.querySelector('#public-actions');
  list.replaceChildren(...brief.actions.map((action) => {
    const item = document.createElement('li');
    item.textContent = action;
    return item;
  }));
  setText('#public-success-title', brief.kpi);
  setText('#public-success-copy', brief.success);
  const rangeLabel = { 24: 'the last 24 hours', 48: 'the last 48 hours', 168: 'the last 7 days' }[range];
  setText('#overview-period', `Illustrative performance for ${rangeLabel}`);
  setText('#share-generated-date', new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date()));

  const kpis = document.querySelector('#share-kpis');
  brief.kpis.forEach(([label, value, delta]) => {
    const item = document.createElement('div');
    item.append(createTextElement('span', '', label), createTextElement('strong', '', value), createTextElement('small', '', `${delta} vs prior period`));
    kpis.append(item);
  });
  setText('#share-trend-value', brief.trendValue);
  setText('#share-trend-note', brief.trendNote);
  document.querySelector('#share-chart').innerHTML = makeTrendChart(brief.trend);

  setText('#share-audience-age', brief.ages[0][0]);
  setText('#share-audience-note', brief.audienceNote);
  const ageBars = document.querySelector('#share-age-bars');
  brief.ages.forEach(([label, value]) => {
    const row = document.createElement('div');
    const heading = document.createElement('p');
    heading.append(createTextElement('span', '', label), createTextElement('strong', '', `${value}%`));
    const track = document.createElement('i');
    const fill = document.createElement('b');
    fill.style.width = `${value}%`;
    track.append(fill); row.append(heading, track); ageBars.append(row);
  });

  const platforms = document.querySelector('#share-platforms');
  brief.platforms.forEach(([name, reach, engagement, strength], index) => {
    const row = document.createElement('div');
    const rank = createTextElement('span', 'share-platform-rank', String(index + 1).padStart(2, '0'));
    const copy = document.createElement('div');
    const heading = document.createElement('p');
    heading.append(createTextElement('strong', '', name), createTextElement('span', '', reach));
    const track = document.createElement('i'); const fill = document.createElement('b'); fill.style.width = `${strength}%`; track.append(fill);
    copy.append(heading, track); row.append(rank, copy, createTextElement('small', '', `${engagement} engagement`)); platforms.append(row);
  });

  const posts = document.querySelector('#share-posts');
  brief.posts.forEach(([type, title, views, engagement], index) => {
    const item = document.createElement('article');
    item.append(createTextElement('span', '', type), createTextElement('strong', '', title));
    const stats = document.createElement('div');
    stats.append(createTextElement('p', '', `${views} views`), createTextElement('p', '', `${engagement} engagement`));
    item.append(stats); item.dataset.rank = String(index + 1).padStart(2, '0'); posts.append(item);
  });

  setText('#share-positive-score', brief.conversation);
  const themes = document.querySelector('#share-themes');
  brief.themes.forEach(([theme, value]) => {
    const item = document.createElement('div');
    item.append(createTextElement('span', '', theme), createTextElement('strong', '', value)); themes.append(item);
  });
  document.querySelector('#back-to-workspace').href = `index.html?artist=${artistKey}`;
  document.title = `${brief.artist} · ${brief.track} artist report`;
}

if (params.get('protected') === '1') document.querySelector('.share-demo-badge').textContent = 'Password protected';

document.querySelector('#copy-public-link').addEventListener('click', async (event) => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    event.currentTarget.textContent = 'Copied ✓';
  } catch {
    event.currentTarget.textContent = 'Copy unavailable';
  }
});
