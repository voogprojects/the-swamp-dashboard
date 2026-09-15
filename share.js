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
    ranges: { 24: ['176 / 24h', '4.0×'], 48: ['286 / 48h', '3.5×'], 168: ['468 / 7d', '2.7×'] }
  },
  straykids: {
    artist: 'Stray Kids', track: 'THIS & THAT', image: strayKidsImage,
    headline: 'Split-screen edits are the leading 48-hour pattern for “THIS & THAT.”',
    summary: '473 matches across social platforms. Indonesia and Mexico audiences ages 13–24 show the highest concentration.',
    sentiment: '94%', audience: 'Indonesia + Mexico · 13–24',
    move: 'Give the fandom an official “both” template.',
    actions: ['Release member-led split-screen prompts today.', 'Publish an editable beat-switch template tomorrow.', 'Localize for Indonesia and Mexico within 72 hours.'],
    kpi: 'Localized template uses', success: 'Review after 72 hours and compare localized participation with the global campaign control.',
    ranges: { 24: ['294 / 24h', '4.4×'], 48: ['473 / 48h', '3.8×'], 168: ['812 / 7d', '3.0×'] }
  },
  mergui: {
    artist: 'Mergui', track: 'Alien', image: merguiImage,
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

if (params.get('protected') === '1') document.querySelector('.share-demo-badge').textContent = 'Password protected';

document.querySelector('#copy-public-link').addEventListener('click', async (event) => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    event.currentTarget.textContent = 'Copied ✓';
  } catch {
    event.currentTarget.textContent = 'Copy unavailable';
  }
});
