const briefs = {
  kentheman: {
    artist: 'KenTheMan', track: 'OMG', image: 'assets/artists/kentheman.jpg',
    headline: '“Walk-in confidence” is the leading 48-hour pattern for “OMG.”',
    summary: '286 matches across social platforms. Houston and Atlanta audiences ages 18–24 show the highest concentration.',
    sentiment: '92%', audience: 'Houston + Atlanta · 18–24',
    move: 'Launch a 72-hour walk-in challenge.',
    actions: ['Seed “the room was waiting” creator prompts today.', 'Cut an entrance-ready hook loop tomorrow.', 'Test in Houston and Atlanta within 72 hours.'],
    kpi: 'Creator participation rate', success: 'Review after 72 hours and compare participation among the target audience with the campaign’s prior 72-hour baseline.',
    ranges: { 24: ['176 / 24h', '4.0×'], 48: ['286 / 48h', '3.5×'], 168: ['468 / 7d', '2.7×'] }
  },
  straykids: {
    artist: 'Stray Kids', track: 'THIS & THAT', image: 'assets/artists/stray-kids.jpg',
    headline: 'Split-screen edits are the leading 48-hour pattern for “THIS & THAT.”',
    summary: '473 matches across social platforms. Indonesia and Mexico audiences ages 13–24 show the highest concentration.',
    sentiment: '94%', audience: 'Indonesia + Mexico · 13–24',
    move: 'Give the fandom an official “both” template.',
    actions: ['Release member-led split-screen prompts today.', 'Publish an editable beat-switch template tomorrow.', 'Localize for Indonesia and Mexico within 72 hours.'],
    kpi: 'Localized template uses', success: 'Review after 72 hours and compare localized participation with the global campaign control.',
    ranges: { 24: ['294 / 24h', '4.4×'], 48: ['473 / 48h', '3.8×'], 168: ['812 / 7d', '3.0×'] }
  },
  mergui: {
    artist: 'Mergui', track: 'Alien', image: 'assets/artists/mergui.jpg',
    headline: '“Beautifully out of place” is the leading 48-hour pattern for “Alien.”',
    summary: '139 matches across social platforms. United States and Germany audiences ages 18–24 show the highest concentration.',
    sentiment: '88%', audience: 'United States + Germany · 18–24',
    move: 'Make discovery personal, not promotional.',
    actions: ['Invite first-day-in-a-new-place stories today.', 'Release an intimate live-room cut tomorrow.', 'Test in the United States and Germany within 72 hours.'],
    kpi: 'New-listener save rate', success: 'Review after 72 hours and compare saves among new listeners with the prior discovery baseline.',
    ranges: { 24: ['81 / 24h', '3.2×'], 48: ['139 / 48h', '2.8×'], 168: ['254 / 7d', '2.3×'] }
  }
};

const params = new URL(window.location.href).searchParams;
const artistKey = params.get('artist') || 'kentheman';
const range = ['24', '48', '168'].includes(params.get('range')) ? params.get('range') : '48';
const brief = briefs[artistKey];

const setText = (selector, value) => { document.querySelector(selector).textContent = value; };

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
  document.querySelector('#back-to-workspace').href = `index.html?artist=${artistKey}`;
  document.title = `${brief.artist} · ${brief.track} artist report`;
}

document.querySelector('#copy-public-link').addEventListener('click', async (event) => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    event.currentTarget.textContent = 'Copied ✓';
  } catch {
    event.currentTarget.textContent = 'Copy unavailable';
  }
});
