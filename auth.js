const ACCESS_KEY = 'the-swamp-preview-access';
const ACCESS_HASH = '2f288245501c6d8b2a9426ec9912fcb79fd0cbe13668600e1c2d3372189210d1';

document.documentElement.classList.add('auth-pending');

const readAccess = () => {
  try {
    return window.sessionStorage.getItem(ACCESS_KEY) === 'granted';
  } catch {
    return false;
  }
};

const saveAccess = () => {
  try {
    window.sessionStorage.setItem(ACCESS_KEY, 'granted');
  } catch {
    // Access still works for the current page when storage is unavailable.
  }
};

const clearAccess = () => {
  try {
    window.sessionStorage.removeItem(ACCESS_KEY);
  } catch {
    // Continue to the gate when storage is unavailable.
  }
};

const hashValue = async (value) => {
  if (!window.crypto?.subtle) throw new Error('Secure password checks are unavailable.');
  const bytes = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
};

const unlockPage = (gate) => {
  saveAccess();
  document.documentElement.classList.remove('auth-pending');
  gate.classList.add('is-unlocking');
  window.setTimeout(() => {
    gate.remove();
    const pageMain = document.querySelector('main');
    if (pageMain) {
      pageMain.setAttribute('tabindex', '-1');
      pageMain.focus({ preventScroll: true });
    }
  }, 180);
};

const renderGate = () => {
  const params = new URL(window.location.href).searchParams;
  if (params.get('lock') === '1') {
    clearAccess();
    params.delete('lock');
    const cleanUrl = `${window.location.pathname}${params.size ? `?${params}` : ''}${window.location.hash}`;
    window.history.replaceState(null, '', cleanUrl);
  }

  if (readAccess()) {
    document.documentElement.classList.remove('auth-pending');
    return;
  }

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="site-auth" data-site-auth role="dialog" aria-modal="true" aria-labelledby="site-auth-title" aria-describedby="site-auth-description">
      <section class="site-auth__card">
        <div class="site-auth__brand" aria-label="The Swamp">
          <svg class="brand-mark" aria-hidden="true" viewBox="0 0 32 28"><path class="reed" d="M9 20V8m10 12V5m7 15v-9"/><rect class="cattail" x="7" y="3" width="4" height="7" rx="2"/><rect class="cattail" x="17" y="0" width="4" height="7" rx="2"/><rect class="cattail" x="24" y="7" width="4" height="6" rx="2"/><path class="water" d="M2 21c4-2 8-2 12 0s8 2 16 0M5 25c3-1.5 6-1.5 9 0s6 1.5 13 0"/></svg>
          <strong>The Swamp</strong>
        </div>
        <div class="site-auth__heading">
          <span>Protected preview</span>
          <h1 id="site-auth-title">Enter presentation password</h1>
          <p id="site-auth-description">This dashboard is available to invited reviewers.</p>
        </div>
        <form class="site-auth__form" data-site-auth-form novalidate>
          <label for="site-auth-password">Password</label>
          <input id="site-auth-password" name="password" type="password" autocomplete="current-password" spellcheck="false" required />
          <p class="site-auth__error" data-site-auth-error aria-live="polite"></p>
          <button type="submit">Open dashboard</button>
        </form>
        <p class="site-auth__meta">Private presentation · Group 1:A</p>
      </section>
    </div>
  `);

  const gate = document.querySelector('[data-site-auth]');
  const form = document.querySelector('[data-site-auth-form]');
  const input = document.querySelector('#site-auth-password');
  const error = document.querySelector('[data-site-auth-error]');
  const button = form.querySelector('button');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    error.textContent = '';
    input.removeAttribute('aria-invalid');
    button.disabled = true;
    button.textContent = 'Checking…';

    try {
      const isValid = await hashValue(input.value) === ACCESS_HASH;
      if (!isValid) {
        input.setAttribute('aria-invalid', 'true');
        error.textContent = 'Incorrect password. Try again.';
        input.select();
        return;
      }
      unlockPage(gate);
    } catch (authError) {
      error.textContent = authError.message;
    } finally {
      button.disabled = false;
      button.textContent = 'Open dashboard';
    }
  });

  window.setTimeout(() => input.focus(), 0);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderGate, { once: true });
} else {
  renderGate();
}
