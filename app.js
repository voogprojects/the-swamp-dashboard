import kenthemanImage from './assets/artists/kentheman.jpg';
import strayKidsImage from './assets/artists/stray-kids.jpg';
import merguiImage from './assets/artists/mergui.jpg';

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const artists = {
  kentheman: {
    name: 'KenTheMan', genre: 'Hip hop', image: kenthemanImage, campaign: 'OMG · release momentum', track: 'OMG', initials: 'KM',
    exact: { listeners: '823,708', instagram: '666K', tiktok: '476K', usStreams: '610.7M', worldStreams: '662M' },
    summary: { audience: '1.14M', socialGrowth: '+3.8%', engagement: '6.8%', listenerGrowth: '+6.2%', reach: '58.6M' },
    histories: {
      audience: [890, 914, 938, 966, 990, 1015, 1041, 1069, 1090, 1115, 1134, 1142],
      engagement: [4.2, 4.6, 4.4, 5.0, 5.3, 5.1, 5.7, 6.0, 5.8, 6.3, 6.5, 6.8],
      listeners: [482, 501, 529, 552, 580, 609, 642, 677, 706, 745, 789, 824]
    },
    alert: { level: 'opportunity', label: 'Momentum', title: 'Entrance videos are outperforming the content baseline', detail: 'The “walk-in confidence” pattern appeared 286 times in 48 hours across three platforms.', change: '+253%', metric: 'pattern velocity', recommendation: 'Shift the next 72 hours of creative toward entrance reveals and getting-ready edits, led by Houston and Atlanta creators.' },
    alerts: [
      { level: 'opportunity', label: 'Creative opportunity', title: 'Walk-in edits are 3.5× above baseline', detail: '286 matches · 48h · TikTok, Reels, Shorts', recommendation: 'Prioritize entrance reveals in the next three posts.', trigger: 'Volume +253% vs prior 48h' },
      { level: 'watch', label: 'Audience shift', title: 'Houston and Atlanta are gaining share', detail: 'Ages 18–24 now account for 61% of matched posts', recommendation: 'Move the first regional creator test into these markets.', trigger: '+14 pts concentration in 7d' },
      { level: 'risk', label: 'Monitor', title: 'Instagram reach is flattening', detail: 'Reach is down while saves remain above baseline', recommendation: 'Keep the concept, but shorten the Reel opening to two seconds.', trigger: 'Reach −8% · saves +11%' }
    ],
    platforms: [
      ['Instagram', 'I', '666K', '+1.1%', '5.9%', '12.8M', '7'], ['TikTok', 'T', '476K', '+9.4%', '13.2%', '34.6M', '11'],
      ['YouTube', 'Y', '184K', '+2.2%', '6.1%', '6.4M', '4'], ['X', 'X', '142K', '+0.4%', '2.8%', '3.1M', '9'], ['Facebook', 'F', '219K', '+0.2%', '1.9%', '1.7M', '5']
    ],
    platformInsight: {
      title: 'TikTok is converting a smaller audience into significantly more traction',
      detail: 'Despite having 29% fewer followers than Instagram, TikTok generated 2.7× the reach and 2.2× the engagement rate this week. The entrance-video trend is concentrating with ages 18–24 in Houston and Atlanta.',
      metrics: [['TikTok engagement', '13.2%'], ['vs Instagram', '2.2× higher'], ['TikTok reach', '34.6M']],
      action: 'Put two of the next three short-form drops—and the first Houston/Atlanta paid test—on TikTok. Recut the winner for Reels instead of building Instagram-first.',
      sources: 'platform performance, content matching, and audience geography'
    },
    formats: [['TikTok video', '11.4M', '13.2%', '+86%'], ['Instagram Reel', '3.4M', '5.9%', '+18%'], ['YouTube Short', '2.1M', '6.1%', '+27%'], ['Carousel', '814K', '4.2%', '−6%']],
    posts: [
      { platform: 'TikTok', format: 'Video', title: 'POV: the room was waiting', age: '18h', views: '12.9M', engagement: '14.8%', shares: '612K', saves: '386K', position: '53% 24%', tone: 'warm' },
      { platform: 'Instagram', format: 'Reel', title: 'The entrance before the entrance', age: '1d', views: '4.2M', engagement: '7.8%', shares: '184K', saves: '221K', position: '46% 38%', tone: 'mono' },
      { platform: 'YouTube', format: 'Short', title: 'OMG live walk-in', age: '3d', views: '2.6M', engagement: '6.4%', shares: '78K', saves: '94K', position: '63% 30%', tone: 'cool' }
    ],
    audience: { countries: [['United States', '62%', 100], ['Canada', '8%', 41], ['United Kingdom', '7%', 36], ['Germany', '4%', 25]], cities: 'Houston · Atlanta · Dallas · Chicago', ages: [['18–24', '46%', 100], ['25–34', '31%', 67], ['13–17', '12%', 26], ['35–44', '8%', 17]], gender: '68% women · 29% men · 3% self-described', returning: '57% returning · 43% new' },
    overlap: [['Mergui', '18%', 'Pop discovery + ages 18–24'], ['Stray Kids', '12%', 'High-engagement short-form viewers']],
    sentiment: { positive: 78, neutral: 14, negative: 8, themes: [['Confidence', '34%'], ['Entrance / reveal', '27%'], ['Houston pride', '18%'], ['Overexposure', '8%']], comments: ['“Put this on before you walk in like the room was waiting for you.”', '“Houston confidence needs its own volume setting.”', '“I’ve heard this hook all day—but it still works.”'] },
    note: 'The energy is confident and communal. Keep the execution rooted in personality and regional culture; avoid polishing it into a generic empowerment trend.',
    series: [5, 6, 8, 7, 9, 10, 12, 15, 14, 24, 33, 41]
  },
  straykids: {
    name: 'Stray Kids', genre: 'K-pop', image: strayKidsImage, campaign: 'THIS & THAT · release campaign', track: 'THIS & THAT', initials: 'SK',
    exact: { listeners: '10,940,227', instagram: '33.4M', tiktok: '37.6M', usStreams: '5.2B', worldStreams: '29.8B' },
    summary: { audience: '71.0M', socialGrowth: '+2.9%', engagement: '8.4%', listenerGrowth: '+7.5%', reach: '821M' },
    histories: {
      audience: [55.9, 57.2, 58.3, 59.9, 61.2, 62.8, 64.2, 65.7, 67.0, 68.4, 69.7, 71.0],
      engagement: [7.7, 8.2, 7.9, 8.8, 8.1, 8.5, 9.0, 8.4, 8.9, 8.1, 8.7, 8.4],
      listeners: [8.82, 9.14, 8.76, 9.58, 9.21, 9.87, 10.31, 9.94, 10.62, 10.18, 10.71, 10.94]
    },
    alert: { level: 'opportunity', label: 'Breakout format', title: 'Split-screen edits are moving between global fan markets', detail: '473 matched posts in 48 hours, with repeated peaks across Asian and North American time zones.', change: '+311%', metric: 'format velocity', recommendation: 'Publish an official editable split-screen template and localize the prompt for Indonesia and Mexico.' },
    alerts: [
      { level: 'opportunity', label: 'Creative opportunity', title: 'Split-screen edits are 3.8× above baseline', detail: '473 matches · 48h · four platforms', recommendation: 'Release a member-led template while remix velocity is rising.', trigger: 'Volume +311% vs prior 48h' },
      { level: 'watch', label: 'Market shift', title: 'Mexico moved into the top-three growth markets', detail: 'Follower growth accelerated across TikTok and YouTube', recommendation: 'Add Spanish copy to the next fan prompt.', trigger: '+19% audience growth in 7d' }
    ],
    platforms: [
      ['Instagram', 'I', '33.4M', '+4.8%', '12.3%', '312M', '9'], ['TikTok', 'T', '37.6M', '+2.6%', '8.0%', '218M', '15'],
      ['YouTube', 'Y', '21.2M', '+2.4%', '8.3%', '198M', '8'], ['X', 'X', '11.1M', '+1.1%', '4.6%', '82M', '18'], ['Facebook', 'F', '6.7M', '+0.6%', '3.2%', '31M', '6']
    ],
    platformInsight: {
      title: 'Instagram Reels are delivering more value per post than TikTok',
      detail: 'Reels produced a 54% higher engagement rate and 2.4× more reach per post, even with a smaller follower base. Visual reveal posts are also earning the strongest save rate in Mexico and Indonesia.',
      metrics: [['Instagram engagement', '12.3%'], ['vs TikTok', '54% higher'], ['Reach per Reel', '34.7M']],
      action: 'Lead the next visual reveal on Instagram, then use TikTok for the editable fan-participation version. Localize both captions for Mexico and Indonesia.',
      sources: 'platform performance, post efficiency, and market-level saves'
    },
    formats: [['Instagram Reel', '46.2M', '12.3%', '+58%'], ['TikTok video', '36.4M', '8.0%', '+24%'], ['YouTube Short', '29.1M', '8.3%', '+34%'], ['Carousel', '8.2M', '5.7%', '+9%']],
    posts: [
      { platform: 'Instagram', format: 'Reel', title: 'Why choose one?', age: '9h', views: '72.4M', engagement: '15.1%', shares: '2.8M', saves: '1.9M', position: '58% 45%', tone: 'warm' },
      { platform: 'TikTok', format: 'Video', title: 'This side & that side', age: '1d', views: '61.8M', engagement: '9.4%', shares: '3.8M', saves: '2.1M', position: '50% 40%', tone: 'cool' },
      { platform: 'YouTube', format: 'Short', title: 'One sound, two moods', age: '2d', views: '34.2M', engagement: '9.2%', shares: '1.4M', saves: '982K', position: '42% 54%', tone: 'mono' }
    ],
    audience: { countries: [['Indonesia', '14%', 100], ['United States', '12%', 86], ['Mexico', '10%', 71], ['Japan', '9%', 64]], cities: 'Jakarta · Mexico City · Los Angeles · Tokyo', ages: [['18–24', '42%', 100], ['13–17', '29%', 69], ['25–34', '21%', 50], ['35–44', '5%', 12]], gender: '74% women · 23% men · 3% self-described', returning: '71% returning · 29% new' },
    overlap: [['Mergui', '9%', 'International pop + ages 18–24'], ['KenTheMan', '12%', 'High-engagement short-form viewers']],
    sentiment: { positive: 84, neutral: 10, negative: 6, themes: [['Dual identity', '31%'], ['Member pairings', '28%'], ['Edit templates', '24%'], ['Format fatigue', '6%']], comments: ['“The whole point is I’m this AND that. Pick a side? No thanks.”', '“Every member pairing creates a completely different edit.”', '“Please keep the template open for international fans.”'] },
    note: 'Participation is native to how the fandom already creates and remixes. Let the members model the contrast, then leave room for fans to interpret it.',
    series: [14, 18, 16, 21, 25, 19, 31, 45, 38, 62, 74, 66]
  },
  mergui: {
    name: 'Mergui', genre: 'Pop / singer-songwriter', image: merguiImage, campaign: 'Alien · growth campaign', track: 'Alien', initials: 'M',
    exact: { listeners: '426,924', instagram: '436K', tiktok: '336K', usStreams: '32.5M', worldStreams: '244.7M' },
    summary: { audience: '772K', socialGrowth: '+1.7%', engagement: '4.9%', listenerGrowth: '+3.0%', reach: '19.9M' },
    histories: {
      audience: [620, 635, 654, 672, 687, 704, 718, 735, 748, 757, 766, 772],
      engagement: [3.8, 4.1, 4.5, 4.0, 4.7, 5.2, 4.8, 5.4, 5.1, 4.7, 5.0, 4.9],
      listeners: [248, 268, 292, 282, 319, 344, 332, 370, 398, 386, 415, 427]
    },
    alert: { level: 'watch', label: 'Emerging pattern', title: 'Relocation stories are driving discovery and saves', detail: 'The signal is smaller than the rest of the portfolio but has held above baseline for three consecutive days.', change: '+171%', metric: 'discovery velocity', recommendation: 'Test intimate, first-day-in-a-new-place creative before increasing paid reach.' },
    alerts: [
      { level: 'opportunity', label: 'Discovery opportunity', title: 'Relocation edits are 2.8× above baseline', detail: '139 matches · 48h · led by Instagram Reels', recommendation: 'Publish the live-room cut with a personal story prompt.', trigger: 'Saves +24% vs prior 48h' },
      { level: 'risk', label: 'Sentiment watch', title: 'Negative comments rose on paid placements', detail: 'Organic sentiment remains stable; paid reach is the outlier', recommendation: 'Pause the broadest audience set and keep organic discovery live.', trigger: 'Negative sentiment +5 pts' }
    ],
    platforms: [
      ['Instagram', 'I', '436K', '+4.6%', '9.4%', '12.8M', '6'], ['TikTok', 'T', '336K', '+1.2%', '4.7%', '4.1M', '8'],
      ['YouTube', 'Y', '97K', '+1.1%', '4.4%', '1.9M', '3'], ['X', 'X', '58K', '+0.2%', '2.1%', '640K', '5'], ['Facebook', 'F', '122K', '−0.1%', '1.6%', '410K', '3']
    ],
    platformInsight: {
      title: 'Instagram is the clearest discovery engine for “Alien” right now',
      detail: 'Reels delivered 2.0× TikTok’s engagement rate and 3.1× its total reach with fewer posts. The strongest saves are coming from intimate relocation stories, not polished performance clips.',
      metrics: [['Instagram engagement', '9.4%'], ['vs TikTok', '2.0× higher'], ['Instagram reach', '12.8M']],
      action: 'Lead the next “Alien” story on Reels and keep the personal first-day-in-a-new-city framing. Use TikTok for cutdowns after the Instagram concept proves out.',
      sources: 'platform performance, format saves, and conversation themes'
    },
    formats: [['Instagram Reel', '3.8M', '9.4%', '+71%'], ['TikTok video', '1.0M', '4.7%', '−4%'], ['YouTube Short', '684K', '4.4%', '+8%'], ['Static post', '216K', '3.0%', '−14%']],
    posts: [
      { platform: 'Instagram', format: 'Reel', title: 'First night in a new city', age: '14h', views: '2.4M', engagement: '7.1%', shares: '92K', saves: '148K', position: '50% 30%', tone: 'mono' },
      { platform: 'TikTok', format: 'Video', title: 'For everyone still finding home', age: '2d', views: '1.6M', engagement: '5.8%', shares: '61K', saves: '104K', position: '45% 45%', tone: 'cool' },
      { platform: 'YouTube', format: 'Short', title: 'Alien · live room', age: '4d', views: '742K', engagement: '4.9%', shares: '18K', saves: '43K', position: '62% 34%', tone: 'warm' }
    ],
    audience: { countries: [['United States', '31%', 100], ['Israel', '19%', 61], ['Germany', '12%', 39], ['United Kingdom', '9%', 29]], cities: 'Los Angeles · Tel Aviv · Berlin · London', ages: [['18–24', '38%', 100], ['25–34', '34%', 89], ['35–44', '14%', 37], ['13–17', '9%', 24]], gender: '61% women · 36% men · 3% self-described', returning: '44% returning · 56% new' },
    overlap: [['KenTheMan', '18%', 'Pop discovery + ages 18–24'], ['Stray Kids', '9%', 'International pop audiences']],
    sentiment: { positive: 69, neutral: 19, negative: 12, themes: [['Belonging', '29%'], ['New city', '24%'], ['Artist discovery', '21%'], ['Ad repetition', '12%']], comments: ['“For everyone building a life somewhere unfamiliar.”', '“I found him through this song and now I need the whole story.”', '“This ad showed up too many times today.”'] },
    note: 'The outsider interpretation can introduce Mergui without over-explaining him. Keep it intimate and human; avoid science-fiction visual shorthand.',
    series: [4, 5, 4, 6, 5, 7, 8, 7, 10, 12, 18, 26]
  }
};

const artistKeys = Object.keys(artists);
const rangeLabels = { '24': '24 hours', '48': '48 hours', '168': '7 days', '720': '30 days', campaign: 'Campaign to date' };
let activeArtist = null;

const sparkline = (values, className = '') => {
  const width = 240; const height = 68; const padding = 4;
  const min = Math.min(...values); const max = Math.max(...values); const spread = max - min || 1;
  const points = values.map((value, index) => ({ x: padding + index * ((width - padding * 2) / (values.length - 1)), y: height - padding - ((value - min) / spread) * (height - padding * 2) }));
  const path = points.reduce((result, point, index) => `${result}${index ? ' L' : 'M'}${point.x.toFixed(1)} ${point.y.toFixed(1)}`, '');
  const end = points.at(-1);
  return `<svg class="data-sparkline ${className}" viewBox="0 0 ${width} ${height}" aria-hidden="true"><path class="spark-fill" d="${path} L${end.x} ${height} L${padding} ${height} Z"/><path class="spark-line" d="${path}"/><circle cx="${end.x}" cy="${end.y}" r="3"/></svg>`;
};

const rangeControl = (selected = '168', scope = 'portfolio') => `<div class="executive-range" aria-label="Reporting period">${[['24','24h'],['48','48h'],['168','7d'],['720','30d'],['campaign','Campaign']].map(([value, label]) => `<button type="button" data-range="${value}" data-scope="${scope}" aria-pressed="${value === selected}" class="${value === selected ? 'is-selected' : ''}">${label}</button>`).join('')}<button type="button" class="range-calendar" data-custom-date aria-label="Choose custom date range"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4m8-4v4M4 10h16"/></svg></button></div>`;

const renderTopbar = (artist) => {
  const context = qs('#topbar-context');
  if (!artist) {
    context.innerHTML = `<div class="portfolio-context-mark" aria-hidden="true"><span></span><span></span><span></span></div><div><span class="eyebrow">Daily workspace</span><strong>Artist portfolio</strong></div>`;
    qs('#share-button').hidden = true;
    qs('#report-button').textContent = 'Export summary';
    return;
  }
  context.innerHTML = `<img class="topbar-artist" src="${artist.image}" alt=""/><div><label class="eyebrow" for="artist-selector">Artist</label><select id="artist-selector">${artistKeys.map((key) => `<option value="${key}" ${artists[key] === artist ? 'selected' : ''}>${artists[key].name}</option>`).join('')}</select></div>`;
  qs('#artist-selector').addEventListener('change', (event) => { window.location.href = `index.html?artist=${event.target.value}`; });
  qs('#share-button').hidden = false;
  qs('#report-button').textContent = 'Export PDF';
};

const portfolioCard = (key, artist, index) => `<a class="portfolio-artist portfolio-artist--${index + 1}" href="index.html?artist=${key}" aria-label="Open ${artist.name} dashboard">
  <div class="portfolio-artist-image"><img src="${artist.image}" alt=""/><span>${artist.genre}</span><i aria-hidden="true">↗</i></div>
  <div class="portfolio-artist-body">
    <div class="portfolio-artist-title"><div><h2>${artist.name}</h2><p>${artist.campaign}</p></div><span class="status-chip status-chip--${artist.alert.level}">${artist.alert.label}</span></div>
    <div class="portfolio-headline-metrics">
      <div><span>Social followers</span><strong>${artist.summary.audience}</strong><small>${artist.summary.socialGrowth} vs prior 7d</small></div>
      <div><span>Engagement rate</span><strong>${artist.summary.engagement}</strong><small>${index === 1 ? '+0.6 pts' : index === 2 ? '−0.1 pts' : '+0.8 pts'} vs prior 7d</small></div>
      <div><span>Monthly listeners</span><strong>${artist.exact.listeners}</strong><small>${artist.summary.listenerGrowth} vs prior 30d</small></div>
    </div>
    <div class="portfolio-chart"><div><span>Follower trajectory</span><small>12-month mock history</small></div>${sparkline(artist.histories.audience)}</div>
    <div class="portfolio-card-alert"><span>${artist.alert.label}</span><strong>${artist.alert.title}</strong><small>${artist.alert.change} ${artist.alert.metric}</small></div>
  </div>
</a>`;

const renderPortfolio = () => {
  const view = qs('#portfolio-view');
  view.innerHTML = `
    <div class="portfolio-heading">
      <div><p class="page-label">Tuesday, September 8</p><h1 id="portfolio-title">Artist portfolio</h1><p class="page-description">A daily view of audience growth, content performance, and signals that may change social strategy.</p></div>
      ${rangeControl('168', 'portfolio')}
    </div>

    <div class="portfolio-status" aria-label="Portfolio status">
      <div><span>Artists monitored</span><strong>3</strong><small>of 10 available slots</small></div>
      <div><span>Active alerts</span><strong>5</strong><small>2 new since yesterday</small></div>
      <div><span>Fastest growth</span><strong>+5.5%</strong><small>KenTheMan · TikTok</small></div>
      <div><span>Average engagement</span><strong>6.7%</strong><small>+0.4 pts vs prior 7d</small></div>
    </div>

    <section class="roster-section" aria-labelledby="roster-title">
      <div class="section-title-row"><div><span class="page-label">Roster</span><h2 id="roster-title">Artist performance</h2></div><span class="data-key"><i></i> Follower and listener totals provided · other metrics and history are mock</span></div>
      <div class="portfolio-grid">${artistKeys.map((key, index) => portfolioCard(key, artists[key], index)).join('')}</div>
    </section>

    <section class="daily-brief" aria-labelledby="daily-brief-title">
      <div class="daily-brief-head"><div><span class="page-label">Since yesterday</span><h2 id="daily-brief-title">What changed</h2></div><a href="signal-library.html">View all alerts <span aria-hidden="true">→</span></a></div>
      <div class="daily-brief-grid">
        ${artistKeys.map((key) => { const artist = artists[key]; return `<a href="index.html?artist=${key}#alerts" class="brief-row"><img src="${artist.image}" alt=""/><div><span>${artist.name} · ${artist.alert.label}</span><strong>${artist.alert.title}</strong><small>${artist.alert.detail}</small></div><b>${artist.alert.change}</b></a>`; }).join('')}
      </div>
    </section>

    <section class="comparison-section" aria-labelledby="comparison-title">
      <div class="section-title-row"><div><span class="page-label">Comparison</span><h2 id="comparison-title">Portfolio benchmarks</h2></div><a href="audiences.html">Compare audiences <span aria-hidden="true">→</span></a></div>
      <div class="comparison-table" role="table" aria-label="Artist benchmark comparison">
        <div class="comparison-row comparison-row--head" role="row"><span role="columnheader">Artist</span><span role="columnheader">Social followers</span><span role="columnheader">Follower growth</span><span role="columnheader">Engagement</span><span role="columnheader">Monthly listeners</span><span role="columnheader">7d reach</span></div>
        ${artistKeys.map((key) => { const a = artists[key]; return `<a class="comparison-row" role="row" href="index.html?artist=${key}"><span role="cell"><img src="${a.image}" alt=""/><strong>${a.name}</strong></span><span role="cell">${a.summary.audience}</span><span role="cell" class="metric-up">${a.summary.socialGrowth}</span><span role="cell">${a.summary.engagement}</span><span role="cell">${a.exact.listeners}</span><span role="cell">${a.summary.reach}</span></a>`; }).join('')}
      </div>
    </section>`;
};

const platformTable = (artist) => `<div class="platform-table" role="table" aria-label="Social platform performance">
  <div class="platform-row platform-row--head" role="row"><span role="columnheader">Platform</span><span role="columnheader">Followers</span><span role="columnheader">Δ prior 7d</span><span role="columnheader">Engagement</span><span role="columnheader">Reach / views</span><span role="columnheader">Posts</span></div>
  ${artist.platforms.map(([name, icon, audience, change, engagement, reach, posts]) => `<div class="platform-row" role="row"><span role="cell"><i class="platform-mark platform-mark--${name.toLowerCase()}">${icon}</i><strong>${name}</strong></span><span role="cell">${audience}</span><span role="cell" class="${change.includes('−') ? 'metric-down' : 'metric-up'}">${change}</span><span role="cell">${engagement}</span><span role="cell">${reach}</span><span role="cell">${posts}</span></div>`).join('')}
</div>`;

const platformAIInsight = (artist) => {
  const insightId = `platform-insight-${artist.initials.toLowerCase()}`;
  return `<aside class="platform-ai-insight" aria-labelledby="${insightId}">
    <div class="platform-ai-copy">
      <header><span class="platform-ai-mark" aria-hidden="true">✦</span><div><span>AI-powered insight</span><small>Illustrative synthesis</small></div><em><i></i>High confidence</em></header>
      <h3 id="${insightId}">${artist.platformInsight.title}</h3>
      <p>${artist.platformInsight.detail}</p>
      <div class="platform-ai-metrics" aria-label="Evidence behind this insight">${artist.platformInsight.metrics.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join('')}</div>
    </div>
    <div class="platform-ai-action"><span>Recommended move</span><p>${artist.platformInsight.action}</p><small>Connected from ${artist.platformInsight.sources}.</small></div>
  </aside>`;
};

const topPost = (artist, post, index) => `<article class="post-card">
  <div class="post-visual post-visual--${post.tone}"><img src="${artist.image}" alt="Mock ${post.format} thumbnail for ${artist.name}" style="object-position:${post.position}"/><div class="post-visual-top"><span>${post.platform}</span><small>${post.age}</small></div><div class="post-play" aria-hidden="true">▶</div><div class="post-visual-bottom"><span>${post.format}</span><strong>${post.title}</strong></div></div>
  <div class="post-data"><div><span>Views</span><strong>${post.views}</strong></div><div><span>Engagement</span><strong>${post.engagement}</strong></div><div><span>Shares</span><strong>${post.shares}</strong></div><div><span>Saves</span><strong>${post.saves}</strong></div></div>
  ${index === 0 ? '<span class="top-post-label">Top post by views</span>' : ''}
</article>`;

const barList = (items) => `<div class="executive-bars">${items.map(([name, value, width]) => `<div><p><span>${name}</span><strong>${value}</strong></p><i><b style="width:${width}%"></b></i></div>`).join('')}</div>`;

const alertCard = (alert, index) => `<article class="alert-card alert-card--${alert.level}" data-alert-card>
  <div class="alert-card-top"><span class="status-chip status-chip--${alert.level}">${alert.label}</span><div><button type="button" data-save-alert aria-label="Save alert">☆</button><button type="button" data-dismiss-alert aria-label="Dismiss alert">×</button></div></div>
  <h3>${alert.title}</h3><p>${alert.detail}</p>
  <div class="alert-trigger"><span>Trigger analytics</span><strong>${alert.trigger}</strong></div>
  <div class="alert-recommendation"><span>Recommended strategy change</span><p>${alert.recommendation}</p></div>
</article>`;

const kenDecisionConnections = [
  {
    type: 'Content → streaming',
    confidence: 'Medium confidence',
    level: 'medium',
    title: 'Recent long-form video was followed by a 3.1% spike in daily “OMG” streams',
    meaning: 'The lift began within six hours of the YouTube premiere and was strongest among viewers who watched past the first minute. The timing suggests the story-led video helped convert interest into listening.',
    evidence: [
      ['YouTube premiere', '182K qualified views'],
      ['Tracked song clicks', '+14.6% vs baseline'],
      ['Spotify daily streams', '+3.1% in 36h']
    ],
    action: 'Lean into “OMG” with two short cutdowns from the long-form story, each ending on a direct listen prompt.',
    sources: ['YouTube Analytics', 'Smart-link clicks', 'Spotify for Artists']
  },
  {
    type: 'Creative → audience growth',
    confidence: 'High confidence',
    level: 'high',
    title: 'Entrance edits are turning attention into new followers—not just views',
    meaning: 'The walk-in format is outperforming KenTheMan’s normal content baseline and the lift carries through to profile visits and follows, especially in Houston and Atlanta.',
    evidence: [
      ['Matched posts', '3.5× view baseline'],
      ['Profile visits', '+18% after exposure'],
      ['TikTok followers', '+5.5% in 7d']
    ],
    action: 'Make the entrance reveal the opening beat of the next three posts and seed the format with Houston and Atlanta creators first.',
    sources: ['TikTok Business', 'Content matching', 'Audience geography']
  },
  {
    type: 'Cross-platform diagnosis',
    confidence: 'High confidence',
    level: 'high',
    title: 'Instagram’s slowdown looks like a packaging issue, not song fatigue',
    meaning: 'Reach is down, but saves and positive conversation remain above baseline while the same concept is still accelerating on TikTok. The creative idea is holding; the Reel opening is the likely weak point.',
    evidence: [
      ['Instagram reach', '−8% vs prior 7d'],
      ['Instagram saves', '+11% vs baseline'],
      ['Positive / neutral', '92% of comments']
    ],
    action: 'Keep the concept, recut the Reel to 12 seconds, and reveal the walk-in moment inside the first two seconds.',
    sources: ['Instagram Insights', 'TikTok Business', 'Comment sentiment']
  }
];

const renderDecisionConnections = () => `<section id="decisions" class="artist-section decision-connections" aria-labelledby="decisions-heading">
  <div class="section-title-row decision-connections-heading">
    <div><span class="page-label">Decision intelligence</span><h2 id="decisions-heading">What the data means—and what to do next</h2></div>
    <p class="section-helper">Illustrative connections across content, audience, and streaming data. Directional signals, not proof of causation.</p>
  </div>
  <div class="decision-context" aria-label="Context used to prioritize these insights">
    <span>Backend context applied</span>
    <ul><li>Priority track: OMG</li><li>Focus markets: Houston + Atlanta</li><li>Decision window: next 72h</li></ul>
  </div>
  <div class="connection-grid">
    ${kenDecisionConnections.map((insight) => `<article class="connection-card">
      <header class="connection-card-header"><span>${insight.type}</span><em class="confidence confidence--${insight.level}"><i></i>${insight.confidence}</em></header>
      <h3>${insight.title}</h3>
      <div class="connection-evidence" aria-label="Connected evidence">
        ${insight.evidence.map(([label, value], index) => `<div><span>${label}</span><strong>${value}</strong></div>${index < insight.evidence.length - 1 ? '<i aria-hidden="true">→</i>' : ''}`).join('')}
      </div>
      <p class="connection-meaning"><span>What it means</span>${insight.meaning}</p>
      <div class="connection-action"><span>Recommended next move</span><p>${insight.action}</p></div>
      <footer><span>Connected sources</span><div>${insight.sources.map((source) => `<small>${source}</small>`).join('')}</div></footer>
    </article>`).join('')}
  </div>
  <p class="mock-caption">Mock decision examples for product demonstration. Production insights should retain source timestamps, attribution coverage, and the model logic behind each connection.</p>
</section>`;

const renderArtist = (key) => {
  const artist = artists[key]; activeArtist = key;
  const view = qs('#artist-view');
  view.innerHTML = `
    <a class="back-link" href="index.html"><span aria-hidden="true">←</span> All artists</a>
    <section class="artist-hero">
      <div class="artist-hero-image"><img src="${artist.image}" alt="${artist.name}"/><span>${artist.genre}</span></div>
      <div class="artist-hero-copy"><p class="page-label">${artist.campaign}</p><h1 id="artist-title">${artist.name}</h1><p>${artist.alert.title}. <strong>${artist.alert.change}</strong> ${artist.alert.metric} in the last 48 hours.</p><div class="artist-hero-meta"><span><i></i> Tracking normally</span><span>5 social platforms</span><span>Last sync 8 min ago</span></div></div>
      ${rangeControl('48', 'artist')}
    </section>

    <nav class="artist-tabs" aria-label="Artist dashboard sections"><a class="is-active" href="#overview">Overview</a>${key === 'kentheman' ? '<a href="#decisions">Decisions <span>3</span></a>' : ''}<a href="#social">Social</a><a href="#content">Content</a><a href="#audience">Audience</a><a href="#sentiment">Sentiment</a><a href="#alerts">Alerts <span>${artist.alerts.length}</span></a></nav>

    <section id="overview" class="artist-section artist-overview" aria-labelledby="overview-heading">
      <div class="section-title-row"><div><span class="page-label">Overview</span><h2 id="overview-heading">Performance snapshot</h2></div><span class="data-key"><i></i> Follower, listener, and stream totals supplied · other values illustrative</span></div>
      <div class="artist-kpi-grid">
        <article><span>Social followers</span><strong>${artist.summary.audience}</strong><small class="metric-up">${artist.summary.socialGrowth} vs prior 7d</small>${sparkline(artist.histories.audience)}</article>
        <article><span>Engagement rate</span><strong>${artist.summary.engagement}</strong><small class="metric-up">+0.${key === 'straykids' ? '6' : key === 'mergui' ? '1' : '8'} pts vs prior 7d</small>${sparkline(artist.histories.engagement)}</article>
        <article><span>Monthly listeners</span><strong>${artist.exact.listeners}</strong><small class="metric-up">${artist.summary.listenerGrowth} vs prior 30d</small>${sparkline(artist.histories.listeners)}</article>
        <article class="stream-kpi"><span>Streaming · all time</span><div><p><small>United States</small><strong>${artist.exact.usStreams}</strong></p><p><small>Worldwide</small><strong>${artist.exact.worldStreams}</strong></p></div><em>Provided figures</em></article>
      </div>

      <div class="headline-alert">
        <div class="headline-alert-copy"><span class="status-chip status-chip--${artist.alert.level}">${artist.alert.label}</span><h2>${artist.alert.title}</h2><p>${artist.alert.detail}</p><a href="#alerts">Review all alerts <span aria-hidden="true">↓</span></a></div>
        <div class="headline-alert-chart"><div><span>Pattern mentions</span><strong>${artist.alert.change}</strong><small>vs prior 48h</small></div>${sparkline(artist.series, 'sparkline--large')}<p><span>12am</span><span>Now</span></p></div>
        <aside><span>Recommended strategy change</span><p>${artist.alert.recommendation}</p><small>Generated from recurrence, velocity, sentiment, and audience concentration.</small></aside>
      </div>
    </section>

    ${key === 'kentheman' ? renderDecisionConnections() : ''}

    <section id="social" class="artist-section" aria-labelledby="social-heading">
      <div class="section-title-row"><div><span class="page-label">Social</span><h2 id="social-heading">Platform performance</h2></div><p class="section-helper">Followers, engagement, reach, and posting frequency compared with the prior seven days.</p></div>
      ${platformTable(artist)}
      ${platformAIInsight(artist)}
      <p class="mock-caption">Instagram and TikTok follower totals are supplied. YouTube, X, Facebook, engagement, reach, and posting metrics are presentation mock data.</p>
      <div class="streaming-strip"><div><i class="platform-mark platform-mark--spotify">S</i><span><small>Streaming performance</small><strong>Spotify for Artists</strong></span></div><dl><div><dt>Monthly listeners</dt><dd>${artist.exact.listeners}</dd></div><div><dt>US streams ATD</dt><dd>${artist.exact.usStreams}</dd></div><div><dt>Worldwide streams ATD</dt><dd>${artist.exact.worldStreams}</dd></div><div><dt>Save rate</dt><dd>${key === 'straykids' ? '12.8%' : key === 'mergui' ? '8.1%' : '10.4%'}</dd></div></dl></div>
    </section>

    <section id="content" class="artist-section" aria-labelledby="content-heading">
      <div class="section-title-row"><div><span class="page-label">Content</span><h2 id="content-heading">Top posts and formats</h2></div><p class="section-helper">Ranked by views · last 7 days</p></div>
      <div class="format-strip">${artist.formats.map(([format, views, engagement, delta]) => `<div><span>${format}</span><strong>${views}</strong><small>avg views · ${engagement} engagement</small><em class="${delta.includes('−') ? 'metric-down' : 'metric-up'}">${delta}</em></div>`).join('')}</div>
      <div class="post-grid">${artist.posts.map((post, index) => topPost(artist, post, index)).join('')}</div>
      <p class="mock-caption">Post visuals and performance metrics are presentation mock data; current follower and streaming totals are the supplied figures.</p>
    </section>

    <section id="audience" class="artist-section" aria-labelledby="audience-heading">
      <div class="section-title-row"><div><span class="page-label">Audience</span><h2 id="audience-heading">Who is responding</h2></div><a href="audiences.html">Cross-artist comparison <span aria-hidden="true">→</span></a></div>
      <div class="audience-grid">
        <article class="audience-card"><div class="card-heading"><div><span class="page-label">Geography</span><h3>Top countries</h3></div><span>7d</span></div>${barList(artist.audience.countries)}<p class="audience-detail"><span>Top cities</span><strong>${artist.audience.cities}</strong></p></article>
        <article class="audience-card"><div class="card-heading"><div><span class="page-label">Demographics</span><h3>Age distribution</h3></div><span>72% coverage</span></div>${barList(artist.audience.ages)}<div class="audience-facts"><p><span>Gender</span><strong>${artist.audience.gender}</strong></p><p><span>Fan status</span><strong>${artist.audience.returning}</strong></p></div></article>
        <article class="audience-card audience-card--overlap"><div class="card-heading"><div><span class="page-label">Portfolio opportunity</span><h3>Audience overlap</h3></div><a href="audiences.html">Open</a></div><p>Shared active audiences can inform creator lists, targeting, and content seeding.</p>${artist.overlap.map(([name, value, detail]) => `<div class="overlap-row"><span><i>${artists[artistKeys.find((k) => artists[k].name === name)]?.initials || name[0]}</i><strong>${name}</strong><small>${detail}</small></span><b>${value}</b></div>`).join('')}</article>
      </div>
    </section>

    <section id="sentiment" class="artist-section" aria-labelledby="sentiment-heading">
      <div class="section-title-row"><div><span class="page-label">Conversation</span><h2 id="sentiment-heading">Sentiment and recurring themes</h2></div><p class="section-helper">24–48h pattern monitoring across connected platforms.</p></div>
      <div class="sentiment-grid">
        <article class="sentiment-card"><div class="sentiment-donut" style="--positive:${artist.sentiment.positive};--neutral:${artist.sentiment.neutral}"><div><strong>${artist.sentiment.positive + artist.sentiment.neutral}%</strong><span>positive / neutral</span></div></div><div class="sentiment-legend"><span><i class="is-positive"></i>Positive <strong>${artist.sentiment.positive}%</strong></span><span><i class="is-neutral"></i>Neutral <strong>${artist.sentiment.neutral}%</strong></span><span><i class="is-negative"></i>Negative <strong>${artist.sentiment.negative}%</strong></span></div></article>
        <article class="theme-card"><div class="card-heading"><div><span class="page-label">Repeated language</span><h3>Conversation themes</h3></div><span>3,842 comments</span></div>${artist.sentiment.themes.map(([theme, value], index) => `<div><span>${String(index + 1).padStart(2, '0')}</span><strong>${theme}</strong><b>${value}</b></div>`).join('')}</article>
        <article class="comment-card"><div class="card-heading"><div><span class="page-label">Qualitative context</span><h3>Representative comments</h3></div><button type="button" data-open-comments>Show all</button></div>${artist.sentiment.comments.map((comment, index) => `<blockquote class="${index > 1 ? 'is-extra' : ''}">${comment}<footer>${['TikTok', 'Instagram', 'YouTube'][index]} · ${[2100, 1300, 779][index].toLocaleString()} likes</footer></blockquote>`).join('')}</article>
      </div>
    </section>

    <section id="alerts" class="artist-section" aria-labelledby="alerts-heading">
      <div class="section-title-row"><div><span class="page-label">Alerts</span><h2 id="alerts-heading">Signals to review</h2></div><p class="section-helper">Automatic recommendations; final strategy decisions stay with the team.</p></div>
      <div class="alerts-grid">${artist.alerts.map(alertCard).join('')}</div>
      <div class="strategy-note"><div><span class="page-label">Internal only</span><h3>Strategy note</h3><p>Capture the cultural context that analytics alone cannot provide.</p></div><div><label class="sr-only" for="strategy-note">Internal strategy note</label><textarea id="strategy-note" rows="4">${artist.note}</textarea><p><span>Not included in artist-facing reports</span><button class="text-action" id="save-note" type="button">Save note</button></p></div></div>
    </section>`;
};

const showToast = (title, detail = '') => {
  const toast = qs('#toast'); qs('strong', toast).textContent = title; qs('small', toast).textContent = detail;
  toast.classList.add('is-visible'); window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
};

const copyText = async (value) => {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(value);
  const input = document.createElement('textarea'); input.value = value; document.body.append(input); input.select(); document.execCommand('copy'); input.remove();
};

const buildShareUrl = () => {
  const artist = artists[activeArtist]; const url = new URL('share.html', window.location.href);
  url.searchParams.set('artist', activeArtist); url.searchParams.set('range', '48'); url.searchParams.set('brief', `${activeArtist}-${artist.track.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-report`);
  return url.href;
};

const wirePageInteractions = () => {
  const setActiveArtistTab = (activeLink) => qsa('.artist-tabs a').forEach((link) => link.classList.toggle('is-active', link === activeLink));
  qsa('.artist-tabs a').forEach((link) => link.addEventListener('click', () => setActiveArtistTab(link)));
  const initialTab = qsa('.artist-tabs a').find((link) => link.getAttribute('href') === window.location.hash);
  if (initialTab) {
    setActiveArtistTab(initialTab);
    window.requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView());
  }
  qsa('[data-range]').forEach((button) => button.addEventListener('click', () => {
    qsa(`[data-range][data-scope="${button.dataset.scope}"]`).forEach((item) => { item.classList.toggle('is-selected', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    showToast('Reporting window updated', `Showing ${rangeLabels[button.dataset.range]}.`);
  }));
  qsa('[data-custom-date]').forEach((button) => button.addEventListener('click', () => showToast('Custom range', 'Date picker is ready for production wiring.')));
  qsa('[data-save-alert]').forEach((button) => button.addEventListener('click', () => { const saved = button.textContent === '★'; button.textContent = saved ? '☆' : '★'; button.setAttribute('aria-label', saved ? 'Save alert' : 'Remove saved alert'); showToast(saved ? 'Alert removed from saved' : 'Alert saved', 'This demo keeps the signal in the review list.'); }));
  qsa('[data-dismiss-alert]').forEach((button) => button.addEventListener('click', () => { const card = button.closest('[data-alert-card]'); card.classList.add('is-dismissed'); showToast('Alert dismissed', 'The production version would record this feedback.'); }));
  qs('[data-open-comments]')?.addEventListener('click', (event) => { qsa('.comment-card .is-extra').forEach((node) => node.classList.toggle('is-revealed')); event.currentTarget.textContent = event.currentTarget.textContent === 'Show all' ? 'Show less' : 'Show all'; });
  qs('#save-note')?.addEventListener('click', () => { sessionStorage.setItem(`swamp-note-${activeArtist}`, qs('#strategy-note').value); showToast('Strategy note saved', 'Internal note updated for this session.'); });
  if (activeArtist) { const saved = sessionStorage.getItem(`swamp-note-${activeArtist}`); if (saved) qs('#strategy-note').value = saved; }
};

const requestedArtist = new URL(window.location.href).searchParams.get('artist');
if (requestedArtist && artists[requestedArtist]) {
  qs('#portfolio-view').hidden = true; qs('#artist-view').hidden = false; renderTopbar(artists[requestedArtist]); renderArtist(requestedArtist);
  document.title = `The Swamp — ${artists[requestedArtist].name}`;
} else {
  renderTopbar(null); renderPortfolio(); document.title = 'The Swamp — Artist portfolio';
}
wirePageInteractions();

qs('#report-button').addEventListener('click', () => { showToast('Preparing report', 'Use the print dialog to save a frozen PDF snapshot.'); window.setTimeout(() => window.print(), 450); });
qs('#share-button').addEventListener('click', () => { const artist = artists[activeArtist]; const url = buildShareUrl(); qs('#share-url').value = url; qs('#open-share-preview').href = url; qs('#share-preview-title').textContent = `${artist.name} · ${artist.track} report`; qs('#share-modal').showModal(); });
qs('#copy-share-link').addEventListener('click', async () => { try { await copyText(qs('#share-url').value); showToast('Share link copied', 'Open it in a new tab to preview the artist-facing view.'); } catch { showToast('Copy unavailable', 'Select the link and copy it manually.'); } });
qsa('.dialog-close').forEach((button) => button.addEventListener('click', () => qs('#share-modal').close()));
qs('#open-sources').addEventListener('click', () => qs('#sources-modal').showModal());
qsa('.source-close').forEach((button) => button.addEventListener('click', () => qs('#sources-modal').close()));
qsa('dialog').forEach((dialog) => dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); }));

const menuButton = qs('#menu-button'); const mobileMenu = qs('#mobile-menu');
menuButton.addEventListener('click', () => { const expanded = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!expanded)); mobileMenu.hidden = expanded; });
