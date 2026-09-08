const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const campaigns = {
  kentheman: {
    artist: 'KenTheMan', initials: 'KM', theme: 'kentheman', image: 'assets/artists/kentheman.jpg', campaign: 'OMG · release momentum', track: 'OMG',
    profile: { genre: 'Hip hop', monthlyListeners: '823,708', instagramFollowers: '666K', tiktokFollowers: '476K', usStreamsAtd: '610.7M', worldwideStreamsAtd: '662M' },
    confidence: 'Momentum signal · high confidence', pattern: '“Walk-in confidence”', patternLabel: 'theme', sources: 41,
    ranges: { 24: { count: 176, multiple: '4.0×' }, 48: { count: 286, multiple: '3.5×' }, 168: { count: 468, multiple: '2.7×' } },
    keepTitle: 'Walk-in confidence is the leading repeat pattern',
    keepCopy: 'Fans are using “OMG” for entrance clips, getting-ready reveals, and captions about taking up space without apology.',
    platforms: 3, sentiment: '92%',
    meaningTitle: 'Ages 18–24 lead the pattern in Houston and Atlanta',
    meaningCopy: 'This segment accounts for 61% of matched posts and is growing faster than the campaign baseline.',
    quote: '“Put this on before you walk in like the room was waiting for you.”',
    moveTitle: 'Launch a 72-hour walk-in challenge',
    actions: [['Today', 'Seed “the room was waiting” creator prompts'], ['Tomorrow', 'Cut an entrance-ready hook loop'], ['72h', 'Test in Houston + Atlanta, ages 18–24']],
    owner: { initials: 'DM', name: 'Dani Moore · Culture' },
    chart: { heading: 'Entrance-video mentions accelerated after 8 PM', delta: '+253%', title: 'Walk-in confidence pattern mentions', time: '20:18 · TikTok', event: 'Reveal format breaks out' },
    mix: ['67%', '18%', '15%'], audience: { age: '18–24', regions: 'Houston + Atlanta', share: '61%', coverage: '72%', bars: [['Houston · 18–24', '29%', 92], ['Atlanta · 18–24', '24%', 76], ['Dallas · 18–24', '16%', 51], ['Chicago · 25–34', '10%', 32]] },
    lens: 'The energy is distinctly confident and communal. Keep the execution rooted in personality and regional culture; avoid polishing it into a generic empowerment trend.',
    briefHeadline: '“Walk-in confidence” is the leading 48-hour pattern for “OMG.”',
    briefActions: 'Creator prompt today · entrance hook tomorrow · Houston + Atlanta test within 72 hours',
    comments: [
      ['T', '@frontdoorenergy', '2.1K likes', '“Put this on before you walk in like the room was waiting for you.”', 'Matched: entrance · confidence · taking space'],
      ['Y', '@southsideframe', '1.3K likes', '“The song for when the fit is right and the answer is already yes.”', 'Matched: getting ready · certainty · reveal'],
      ['I', '@bigstepfiles', '779 likes', '“Houston confidence needs its own volume setting.”', 'Matched: Houston · confidence · culture']
    ]
  },
  straykids: {
    artist: 'Stray Kids', initials: 'SK', theme: 'straykids', image: 'assets/artists/stray-kids.jpg', campaign: 'THIS & THAT · release campaign', track: 'THIS & THAT',
    profile: { genre: 'K-pop', monthlyListeners: '10,940,227', instagramFollowers: '33.4M', tiktokFollowers: '37.6M', usStreamsAtd: '5.2B', worldwideStreamsAtd: '29.8B' },
    confidence: 'Momentum signal · high confidence', pattern: '“Why choose one?”', patternLabel: 'format', sources: 57,
    ranges: { 24: { count: 294, multiple: '4.4×' }, 48: { count: 473, multiple: '3.8×' }, 168: { count: 812, multiple: '3.0×' } },
    keepTitle: 'Split-screen edits are the leading repeat format',
    keepCopy: 'Fans are using “THIS & THAT” for high-contrast edits that pair two moods, styles, biases, or sides of the same identity.',
    platforms: 4, sentiment: '94%',
    meaningTitle: 'Ages 13–24 lead the pattern in Indonesia and Mexico',
    meaningCopy: 'This segment accounts for 58% of matched posts and has the highest localized participation growth.',
    quote: '“The whole point is I’m this AND that. Pick a side? No thanks.”',
    moveTitle: 'Give the fandom an official “both” template',
    actions: [['Today', 'Release member-led split-screen prompts'], ['Tomorrow', 'Publish an editable beat-switch template'], ['72h', 'Localize for Indonesia + Mexico, ages 13–24']],
    owner: { initials: 'HL', name: 'Hana Lee · Global' },
    chart: { heading: 'Split-screen edits surged after midnight KST', delta: '+311%', title: 'This-and-that format mentions', time: '00:34 · TikTok', event: 'Fan template takes off' },
    mix: ['55%', '29%', '16%'], audience: { age: '13–24', regions: 'Indonesia + Mexico', share: '58%', coverage: '78%', bars: [['Indonesia · 13–17', '27%', 90], ['Mexico · 18–24', '23%', 77], ['United States · 18–24', '18%', 60], ['Japan · 18–24', '14%', 47]] },
    lens: 'The participation is native to how STAY already creates and remixes. Let the members model the contrast, then leave enough structure open for fandom interpretation.',
    briefHeadline: 'Split-screen edits are the leading 48-hour pattern for “THIS & THAT.”',
    briefActions: 'Member prompts today · editable template tomorrow · Indonesia + Mexico localization within 72 hours',
    comments: [
      ['T', '@twosidesstay', '4.8K likes', '“The whole point is I’m this AND that. Pick a side? No thanks.”', 'Matched: both sides · identity · participation'],
      ['Y', '@skzframe', '2.7K likes', '“Every member pairing creates a completely different version of this trend.”', 'Matched: members · pairing · remixability'],
      ['I', '@staymakes', '1.9K likes', '“One sound, two moods, unlimited edits.”', 'Matched: dual mood · edit format']
    ]
  },
  txt: {
    artist: 'TOMORROW X TOGETHER', initials: 'TXT', theme: 'txt', image: 'assets/artists/txt.jpg', campaign: 'Beautiful Strangers · catalog pulse', track: 'Beautiful Strangers',
    confidence: 'Momentum signal · high confidence', pattern: '“Different together”', patternLabel: 'story', sources: 46,
    ranges: { 24: { count: 238, multiple: '3.9×', verb: 'is accelerating' }, 48: { count: 391, multiple: '3.3×', verb: 'is organizing the fan conversation' }, 168: { count: 667, multiple: '2.8×', verb: 'has become the week’s strongest story' } },
    keepTitle: 'A friendship story is repeating globally',
    keepCopy: 'Fans are pairing “Beautiful Strangers” with friendship transformations, found-family edits, and stories about growing through difference.',
    platforms: 4, sentiment: '96%',
    meaningTitle: 'Uniqueness is landing as a source of connection',
    meaningCopy: 'The release is giving fans language for relationships where differences make both people feel stronger rather than farther apart.',
    quote: '“We didn’t become the same. We just became more ourselves together.”',
    moveTitle: 'Invite fans to name their beautiful stranger',
    actions: [['Today', 'Launch a paired found-family story prompt'], ['Tomorrow', 'Cut a five-member transformation sequence'], ['72h', 'Localize for Japan + United States, ages 13–24']],
    owner: { initials: 'EK', name: 'Eun Kim · Fandom' },
    chart: { heading: 'Friendship-story mentions rose after 6 PM', delta: '+276%', title: 'Different-together story mentions', time: '18:46 · Shorts', event: 'Friend edit crosses over' },
    mix: ['48%', '33%', '19%'], audience: { age: '13–24', regions: 'Japan + United States', share: '56%', coverage: '81%', bars: [['Japan · 18–24', '25%', 88], ['United States · 13–17', '22%', 78], ['Philippines · 18–24', '17%', 60], ['South Korea · 18–24', '13%', 46]] },
    lens: 'The found-family interpretation is aligned with the group’s larger storytelling. Keep the execution emotionally specific and member-led, not like a generic friendship montage.',
    briefHeadline: '“Beautiful Strangers” is becoming a fan language for growing stronger through difference.',
    briefActions: 'Found-family prompt today · member sequence tomorrow · Japan + US localization within 72 hours',
    comments: [
      ['T', '@tomorrowfound', '3.9K likes', '“We didn’t become the same. We just became more ourselves together.”', 'Matched: difference · growth · together'],
      ['Y', '@moastories', '2.2K likes', '“For the friend who changed your life without asking you to change who you are.”', 'Matched: friendship · identity · change'],
      ['I', '@fivebrightstars', '1.4K likes', '“Found family in one song.”', 'Matched: found family · belonging']
    ]
  },
  mergui: {
    artist: 'Mergui', initials: 'M', theme: 'mergui', image: 'assets/artists/mergui.jpg', campaign: 'Alien · growth campaign', track: 'Alien',
    profile: { genre: 'Pop / singer-songwriter', monthlyListeners: '426,924', instagramFollowers: '436K', tiktokFollowers: '336K', usStreamsAtd: '32.5M', worldwideStreamsAtd: '244.7M' },
    confidence: 'Emerging signal · medium-high confidence', pattern: '“Beautifully out of place”', patternLabel: 'theme', sources: 26,
    ranges: { 24: { count: 81, multiple: '3.2×' }, 48: { count: 139, multiple: '2.8×' }, 168: { count: 254, multiple: '2.3×' } },
    keepTitle: 'Relocation and reinvention are the leading repeat themes',
    keepCopy: 'New listeners are using “Alien” for relocation, reinvention, and first-day-in-a-new-city edits centered on not quite fitting yet.',
    platforms: 3, sentiment: '88%',
    meaningTitle: 'Ages 18–24 lead the pattern in the US and Germany',
    meaningCopy: 'This segment accounts for 49% of matched posts and shows the highest new-listener activity.',
    quote: '“For everyone building a life somewhere that still feels a little unfamiliar.”',
    moveTitle: 'Make discovery personal, not promotional',
    actions: [['Today', 'Invite first-day-in-a-new-place stories'], ['Tomorrow', 'Release an intimate live-room cut'], ['72h', 'Test in United States + Germany, ages 18–24']],
    owner: { initials: 'AR', name: 'Alex Rivera · Growth' },
    chart: { heading: 'Discovery mentions climbed after 9 PM', delta: '+171%', title: 'Beautifully-out-of-place mentions', time: '21:12 · Reels', event: 'Relocation edit lifts' },
    mix: ['44%', '36%', '20%'], audience: { age: '18–24', regions: 'United States + Germany', share: '49%', coverage: '67%', bars: [['United States · 18–24', '22%', 84], ['Germany · 18–24', '18%', 69], ['United Kingdom · 25–34', '14%', 54], ['Israel · 18–24', '12%', 46]] },
    lens: 'The outsider interpretation can introduce Mergui without over-explaining him. Keep it intimate and human; avoid turning “Alien” into science-fiction visual shorthand.',
    briefHeadline: '“Beautifully out of place” is the leading 48-hour pattern for “Alien.”',
    briefActions: 'Listener story prompt today · live-room cut tomorrow · US + Germany test within 72 hours',
    comments: [
      ['T', '@newcitynotes', '1.1K likes', '“For everyone building a life somewhere that still feels a little unfamiliar.”', 'Matched: new city · outsider · becoming'],
      ['Y', '@roomtonepop', '746 likes', '“I found him through this song and now I need the whole story.”', 'Matched: discovery · artist curiosity'],
      ['I', '@softlanding', '508 likes', '“Not belonging yet can still look beautiful.”', 'Matched: belonging · vulnerability · beauty']
    ]
  },
  taylor: {
    artist: 'Taylor Swift', initials: 'TS', theme: 'taylor', campaign: 'Midnight Rain · catalog moment', track: 'Midnight Rain',
    confidence: 'Momentum signal · high confidence', pattern: '“Choosing ambition”', patternLabel: 'interpretation', sources: 44,
    ranges: { 24: { count: 201, multiple: '4.2×', verb: 'is accelerating' }, 48: { count: 312, multiple: '3.6×', verb: 'is becoming the fan-made story' }, 168: { count: 504, multiple: '2.9×', verb: 'has become the week’s clearest story' } },
    keepTitle: 'One lyric interpretation is repeating',
    keepCopy: 'Fans are using “Midnight Rain” to frame choosing ambition, reinvention, and the life they built for themselves.',
    platforms: 3, sentiment: '89%',
    meaningTitle: 'The song is becoming a self-definition anthem',
    meaningCopy: 'Conversation is shifting away from nostalgia and toward proud, forward-looking identity stories.',
    quote: '“It stopped feeling sad when I realized she chose the life she wanted.”',
    moveTitle: 'Turn the next 72 hours into a fan-story prompt',
    actions: [['Today', 'Invite fans to name the path they chose'], ['Tomorrow', 'Cut a lyric-led vertical template'], ['72h', 'Test in the UK + Philippines, ages 18–24']],
    owner: { initials: 'KP', name: 'Kira Patel · Audience' },
    chart: { heading: 'Identity-story mentions accelerated after 9 PM', delta: '+268%', title: 'Choosing ambition pattern mentions', time: '21:07 · TikTok', event: 'Story prompt breaks out' },
    mix: ['58%', '27%', '15%'], audience: { age: '18–24', regions: 'UK + Philippines', share: '54%', coverage: '74%', bars: [['United Kingdom · 18–24', '24%', 88], ['Philippines · 18–24', '21%', 77], ['United States · 18–24', '18%', 66], ['Australia · 25–34', '12%', 44]] },
    lens: 'This is strongest when it celebrates agency, not when it re-litigates old relationships. Keep the prompt centered on fans’ own choices.',
    briefHeadline: '“Midnight Rain” is becoming a fan shorthand for choosing your own path.',
    briefActions: 'Fan prompt today · lyric-led template tomorrow · UK + Philippines test within 72 hours',
    comments: [
      ['T', '@ownmyorbit', '2.4K likes', '“It stopped feeling sad when I realized she chose the life she wanted.”', 'Matched: chose her path · ambition · reinvention'],
      ['Y', '@chapterthirteen', '1.1K likes', '“For everyone who picked the dream and built a home inside it.”', 'Matched: chose the dream · self-definition'],
      ['I', '@cityofpages', '884 likes', '“Midnight Rain feels different when the life you chose finally fits.”', 'Matched: life you chose · personal growth']
    ]
  },
  ariana: {
    artist: 'Ariana Grande', initials: 'AG', theme: 'ariana', campaign: 'we can’t be friends · reactivation', track: 'we can’t be friends',
    confidence: 'Momentum signal · high confidence', pattern: '“Quiet healing”', patternLabel: 'theme', sources: 38,
    ranges: { 24: { count: 148, multiple: '3.7×', verb: 'is accelerating' }, 48: { count: 226, multiple: '3.1×', verb: 'is organizing the conversation' }, 168: { count: 389, multiple: '2.5×', verb: 'has become the week’s clearest theme' } },
    keepTitle: 'A new emotional use-case is repeating',
    keepCopy: 'Fans are pairing “we can’t be friends” with soft-transition edits, boundary-setting captions, and closing-chapter stories.',
    platforms: 3, sentiment: '86%',
    meaningTitle: 'Fans are hearing emotional restraint as strength',
    meaningCopy: 'The conversation is less about heartbreak and more about protecting peace without needing a dramatic ending.',
    quote: '“Healing can be quiet. You don’t have to prove you’re over it.”',
    moveTitle: 'Own the “quiet healing” story before it peaks',
    actions: [['Today', 'Brief creators on soft-reset storytelling'], ['Tomorrow', 'Release a stripped vocal-led edit'], ['72h', 'Test in Brazil + Mexico, ages 18–24']],
    owner: { initials: 'SR', name: 'Sofia Reyes · Digital' },
    chart: { heading: 'Healing-language mentions rose after 7 PM', delta: '+219%', title: 'Quiet healing pattern mentions', time: '19:22 · TikTok', event: 'Transition edit lifts' },
    mix: ['64%', '20%', '16%'], audience: { age: '18–24', regions: 'Brazil + Mexico', share: '59%', coverage: '69%', bars: [['Brazil · 18–24', '31%', 92], ['Mexico · 18–24', '25%', 74], ['United States · 18–24', '16%', 47], ['Philippines · 18–24', '10%', 30]] },
    lens: 'The signal fits Ariana’s emotional precision, but the tone must stay understated. Avoid turning a personal boundary into generic breakup motivation.',
    briefHeadline: '“we can’t be friends” is becoming a soundtrack for quiet, self-protective healing.',
    briefActions: 'Soft-reset prompt today · stripped edit tomorrow · Brazil + Mexico test within 72 hours',
    comments: [
      ['T', '@softreset', '1.9K likes', '“Healing can be quiet. You don’t have to prove you’re over it.”', 'Matched: quiet healing · boundaries · moving on'],
      ['Y', '@cloudroom', '1.2K likes', '“This sounds like choosing peace without needing the last word.”', 'Matched: choosing peace · restraint'],
      ['I', '@mariacuts', '703 likes', '“For the chapter you close gently instead of burning.”', 'Matched: closing chapter · gentle ending']
    ]
  },
  weeknd: {
    artist: 'The Weeknd', initials: 'TW', theme: 'weeknd', campaign: 'Blinding Lights · catalog resurgence', track: 'Blinding Lights',
    confidence: 'Emerging signal · medium-high confidence', pattern: '“Night run”', patternLabel: 'use-case', sources: 29,
    ranges: { 24: { count: 92, multiple: '3.4×', verb: 'is accelerating' }, 48: { count: 147, multiple: '2.9×', verb: 'is becoming a repeat use-case' }, 168: { count: 281, multiple: '2.2×', verb: 'has become a durable weekly pattern' } },
    keepTitle: 'A performance use-case is crossing platforms',
    keepCopy: 'Fans are using “Blinding Lights” for night-running, gym-comeback, and neon-city training edits.',
    platforms: 3, sentiment: '91%',
    meaningTitle: 'A familiar hit is being recoded as momentum',
    meaningCopy: 'The catalog conversation is moving from nostalgia toward personal performance, discipline, and after-dark energy.',
    quote: '“Apparently this song adds a mile to every night run.”',
    moveTitle: 'Test performance-led nighttime creative',
    actions: [['Today', 'Seed a night-run visual prompt'], ['Tomorrow', 'Cut a tempo-matched training loop'], ['72h', 'Test in Germany + Mexico, ages 18–34']],
    owner: { initials: 'MN', name: 'Maya Nguyen · Growth' },
    chart: { heading: 'Performance mentions climbed after 8 PM', delta: '+184%', title: 'Night-run pattern mentions', time: '20:41 · Reels', event: 'Run-club edit lifts' },
    mix: ['49%', '31%', '20%'], audience: { age: '18–34', regions: 'Germany + Mexico', share: '52%', coverage: '76%', bars: [['Germany · 25–34', '23%', 82], ['Mexico · 18–24', '20%', 71], ['United States · 25–34', '17%', 61], ['Brazil · 18–24', '13%', 46]] },
    lens: 'This works because the catalog already carries nocturnal energy. Keep it performance-forward and cinematic; avoid a forced fitness-brand tone.',
    briefHeadline: '“Blinding Lights” is finding fresh catalog momentum as a night-training soundtrack.',
    briefActions: 'Night-run prompt today · tempo loop tomorrow · Germany + Mexico test within 72 hours',
    comments: [
      ['T', '@runafterdark', '1.5K likes', '“Apparently this song adds a mile to every night run.”', 'Matched: night run · performance · momentum'],
      ['Y', '@neonmiles', '892 likes', '“Still the fastest way to make a treadmill feel cinematic.”', 'Matched: training · cinematic · tempo'],
      ['I', '@paceclubmx', '655 likes', '“The unofficial soundtrack for starting again after sunset.”', 'Matched: comeback · after dark · running']
    ]
  }
};

// The final value in each series is anchored to the current figures supplied by
// the team. Earlier points are intentionally illustrative mock history.
const profileHistory = {
  kentheman: {
    monthlyListeners: [482100, 501400, 528700, 551600, 579800, 608900, 642400, 676800, 705600, 744900, 789400, 823708],
    instagramFollowers: [572000, 580000, 589000, 598000, 609000, 620000, 633000, 645000, 654000, 660000, 664000, 666000],
    tiktokFollowers: [318000, 333000, 349000, 366000, 384000, 402000, 421000, 438000, 451000, 462000, 470000, 476000],
    usStreamsAtd: [398.4, 418.8, 439.9, 460.7, 482.1, 503.8, 526.9, 548.7, 566.5, 582.9, 597.4, 610.7],
    worldwideStreamsAtd: [431.2, 453.7, 476.8, 499.4, 522.6, 546.5, 571.9, 596.1, 615.8, 633.4, 648.8, 662]
  },
  straykids: {
    monthlyListeners: [8.82, 9.14, 8.76, 9.58, 9.21, 9.87, 10.31, 9.94, 10.62, 10.18, 10.71, 10.940227],
    instagramFollowers: [27.1, 27.6, 28.1, 28.9, 29.3, 30.0, 30.6, 31.2, 31.8, 32.4, 32.9, 33.4],
    tiktokFollowers: [28.8, 29.6, 30.2, 31.0, 31.9, 32.8, 33.6, 34.5, 35.2, 36.0, 36.8, 37.6],
    usStreamsAtd: [3.92, 4.02, 4.12, 4.25, 4.37, 4.48, 4.61, 4.73, 4.85, 4.97, 5.09, 5.2],
    worldwideStreamsAtd: [23.9, 24.4, 24.9, 25.5, 26.0, 26.6, 27.1, 27.7, 28.2, 28.8, 29.3, 29.8]
  },
  mergui: {
    monthlyListeners: [248300, 267900, 292400, 281600, 318700, 344100, 331900, 369600, 397800, 386200, 414500, 426924],
    instagramFollowers: [376000, 382000, 389000, 395000, 402000, 408000, 414000, 420000, 426000, 429000, 433000, 436000],
    tiktokFollowers: [244000, 253000, 265000, 277000, 285000, 296000, 304000, 315000, 322000, 328000, 333000, 336000],
    usStreamsAtd: [20.1, 21.2, 22.4, 23.5, 24.8, 25.9, 27.1, 28.2, 29.3, 30.4, 31.5, 32.5],
    worldwideStreamsAtd: [181.3, 186.9, 192.8, 198.4, 204.9, 211.5, 218.1, 224.8, 230.6, 235.4, 240.1, 244.7]
  }
};

const evidenceHistory = {
  kentheman: {
    24: { series: [7, 8, 7, 9, 10, 11, 14, 13, 18, 24, 31, 36], baseline: [8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12], delta: '+214%', interval: '2h', eventIndex: 8, time: '20:18 · TikTok', event: 'Entrance edit lifts', heading: 'Entrance clips broke out after the evening commute', mix: ['71%', '16%', '13%'], description: 'Pattern mentions build through the evening after an entrance-format TikTok post gains traction.' },
    48: { series: [5, 6, 8, 7, 9, 10, 12, 15, 14, 24, 33, 41], baseline: [7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11], delta: '+253%', interval: '4h', eventIndex: 9, time: '20:18 · TikTok', event: 'Reveal format breaks out', heading: 'Entrance-video mentions accelerated after 8 PM', mix: ['67%', '18%', '15%'], description: 'Mentions stay close to baseline before a representative entrance edit creates a sustained second-day rise.' },
    168: { series: [13, 14, 12, 16, 15, 20, 19, 25, 31, 28, 43, 57], baseline: [14, 14, 15, 15, 16, 16, 17, 18, 18, 19, 19, 20], delta: '+189%', interval: 'daypart', eventIndex: 8, time: 'Fri 20:18 · TikTok', event: 'Houston cluster forms', heading: 'Confidence edits held after the first spike', mix: ['58%', '24%', '18%'], description: 'The week shows an initial lift, a brief reset, and a stronger second wave concentrated in Houston and Atlanta.' }
  },
  straykids: {
    24: { series: [18, 22, 19, 27, 24, 35, 31, 42, 36, 55, 68, 59], baseline: [16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21], delta: '+278%', interval: '2h', eventIndex: 7, time: '00:34 · TikTok', event: 'Member pairing spikes', heading: 'Member-led edits created three distinct peaks', mix: ['61%', '25%', '14%'], description: 'Mentions rise in repeated waves as member pairings move between Asian and North American fan communities.' },
    48: { series: [14, 18, 16, 21, 25, 19, 31, 45, 38, 62, 74, 66], baseline: [15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21], delta: '+311%', interval: '4h', eventIndex: 7, time: '00:34 · TikTok', event: 'Fan template takes off', heading: 'Split-screen edits surged after midnight KST', mix: ['55%', '29%', '16%'], description: 'The split-screen format produces multiple sharp peaks as the editable template crosses markets and time zones.' },
    168: { series: [22, 31, 27, 46, 39, 58, 49, 71, 61, 83, 98, 91], baseline: [24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], delta: '+241%', interval: 'daypart', eventIndex: 9, time: 'Sat 16:10 · Shorts', event: 'Mexico edits cross over', heading: 'The format renewed with each regional handoff', mix: ['48%', '35%', '17%'], description: 'A sawtooth weekly pattern reflects successive regional handoffs rather than one isolated viral post.' }
  },
  mergui: {
    24: { series: [3, 4, 5, 4, 6, 7, 6, 8, 10, 13, 18, 22], baseline: [4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7], delta: '+126%', interval: '2h', eventIndex: 9, time: '21:12 · Reels', event: 'New-city edit lifts', heading: 'Discovery built slowly, then doubled after 9 PM', mix: ['39%', '25%', '36%'], description: 'Discovery stays near baseline for most of the day before an intimate relocation edit starts a late rise.' },
    48: { series: [4, 5, 4, 6, 5, 7, 8, 7, 10, 12, 18, 26], baseline: [5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8], delta: '+171%', interval: '4h', eventIndex: 10, time: '21:12 · Reels', event: 'Relocation edit lifts', heading: 'Discovery mentions climbed after 9 PM', mix: ['44%', '36%', '20%'], description: 'Mentions remain modest but show a clear late inflection led by first-time listeners and relocation stories.' },
    168: { series: [5, 7, 6, 8, 7, 10, 9, 13, 12, 18, 24, 31], baseline: [6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 10, 10], delta: '+108%', interval: 'daypart', eventIndex: 9, time: 'Sun 19:40 · YouTube', event: 'Live cut drives saves', heading: 'A small signal became a durable discovery curve', mix: ['35%', '44%', '21%'], description: 'The weekly curve is lower-volume but increasingly durable, with a second lift after the live-room cut.' }
  }
};

const briefModal = qs('#brief-modal');
const shareModal = qs('#share-modal');
const sourcesModal = qs('#sources-modal');
const commentsModal = qs('#comments-modal');
const toast = qs('#toast');
const campaignButton = qs('#campaign-button');
const campaignMenu = qs('#campaign-menu');
const artistCoverImage = qs('#artist-cover-image');

artistCoverImage.addEventListener('error', () => {
  artistCoverImage.hidden = true;
});
const savedNotes = {};
const approvedCampaigns = new Set();
const learnedCampaigns = new Set();
let activeArtist = 'kentheman';

const outcomePlans = {
  kentheman: { question: 'Target audience participation · Houston + Atlanta', kpi: 'Creator participation rate', result: '+28% participation', detail: 'Performance is above the prior 72-hour baseline. Recommended status: repeat.' },
  straykids: { question: 'Localized template adoption · Indonesia + Mexico', kpi: 'Localized template uses', result: '+41% template uses', detail: 'Performance is above the global campaign control. Recommended status: scale.' },
  mergui: { question: 'New-listener conversion · US + Germany', kpi: 'New-listener save rate', result: '+19% save rate', detail: 'Performance is above the prior discovery baseline. Recommended status: iterate.' }
};

const rangeLabel = { 24: '24-hour', 48: '48-hour', 168: '7-day' };
const periodCopy = { 24: '24 hours', 48: '48 hours', 168: '7 days' };
const rangeAxisLabels = {
  24: ['12am', '6am', '12pm', '6pm', 'Now'],
  48: ['Mon 8am', 'Mon 8pm', 'Tue 8am', 'Tue 8pm', 'Now'],
  168: ['Wed', 'Fri', 'Sun', 'Tue', 'Now']
};
const profileMetricLabels = {
  monthlyListeners: 'Monthly listeners',
  instagramFollowers: 'Instagram followers',
  tiktokFollowers: 'TikTok followers',
  usStreamsAtd: 'US streams ATD',
  worldwideStreamsAtd: 'Worldwide streams ATD'
};
const currentRange = () => qs('.range-control button.is-selected').dataset.range;
const setText = (selector, value) => { qs(selector).textContent = value; };

const copyText = async (value) => {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(value);
  const input = document.createElement('textarea');
  input.value = value;
  input.style.position = 'fixed';
  input.style.opacity = '0';
  document.body.append(input);
  input.select();
  document.execCommand('copy');
  input.remove();
};

const buildShareUrl = () => {
  const campaign = campaigns[activeArtist];
  const url = new URL('share.html', window.location.href);
  const slug = `${activeArtist}-${campaign.track.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${currentRange()}h`;
  url.search = '';
  url.searchParams.set('brief', slug);
  url.searchParams.set('artist', activeArtist);
  url.searchParams.set('range', currentRange());
  return url.href;
};

const renderShareLink = () => {
  const shareUrl = buildShareUrl();
  qs('#share-url').value = shareUrl;
  qs('#open-share-preview').href = shareUrl;
};

const updateDecisionState = () => {
  const approved = approvedCampaigns.has(activeArtist);
  const learned = learnedCampaigns.has(activeArtist);
  const lifecycleItems = qsa('[data-lifecycle]');

  lifecycleItems.forEach((item, index) => {
    item.classList.remove('is-complete', 'is-current');
    if (learned || index < (approved ? 5 : 3)) item.classList.add('is-complete');
    if (!learned && index === (approved ? 5 : 3)) item.classList.add('is-current');
  });
  if (learned) lifecycleItems.at(-1).classList.add('is-current');

  const recordSteps = qsa('li', qs('#state-track'));
  recordSteps.forEach((step, index) => {
    step.classList.remove('is-complete', 'is-current');
    if (learned || index < (approved ? 2 : 1)) step.classList.add('is-complete');
    if (!learned && index === (approved ? 2 : 1)) step.classList.add('is-current');
  });
  if (learned) recordSteps.at(-1).classList.add('is-current');

  const status = qs('#decision-status');
  status.classList.toggle('status-badge--good', approved || learned);
  status.textContent = learned ? 'Outcome recorded' : approved ? 'Approved · ready to activate' : 'Awaiting approval';
  setText('#decision-step-copy', learned ? 'Strategist approved · outcome recorded' : approved ? 'Approved by strategist' : 'Waiting on strategist approval');
  qs('#mock-result').hidden = !learned;
  qs('#preview-outcome').textContent = learned ? 'Mock result recorded ✓' : 'Preview mock result';
};

const pointsForSeries = (values, { left, right, top, bottom }, maximum = Math.max(...values)) => {
  const range = maximum || 1;
  return values.map((value, index) => ({
    x: left + ((right - left) * index) / Math.max(values.length - 1, 1),
    y: bottom - ((bottom - top) * value) / range,
    value
  }));
};

const smoothPath = (points) => points.reduce((path, point, index) => {
  if (index === 0) return `M${point.x.toFixed(1)},${point.y.toFixed(1)}`;
  const previous = points[index - 1];
  const midpoint = (previous.x + point.x) / 2;
  return `${path} C${midpoint.toFixed(1)},${previous.y.toFixed(1)} ${midpoint.toFixed(1)},${point.y.toFixed(1)} ${point.x.toFixed(1)},${point.y.toFixed(1)}`;
}, '');

const renderProfileHistory = (key, campaign) => {
  qsa('[data-profile-metric]').forEach((card) => {
    const metricKey = card.dataset.profileMetric;
    const values = profileHistory[key][metricKey];
    const svg = qs('.metric-sparkline', card);
    const bounds = { left: 1.5, right: 118.5, top: 3, bottom: 31 };
    const minimum = Math.min(...values);
    const normalized = values.map((value) => value - minimum);
    const points = pointsForSeries(normalized, bounds);
    const line = smoothPath(points);
    const end = points.at(-1);
    const comparison = values.at(-4);
    const change = ((values.at(-1) - comparison) / comparison) * 100;
    const displayChange = `${change >= 0 ? '+' : ''}${change.toFixed(1)}% / 90d`;
    const changeNode = qs('.metric-change', card);

    qs('.sparkline-line', svg).setAttribute('d', line);
    qs('.sparkline-area', svg).setAttribute('d', `${line} L${bounds.right},${bounds.bottom} L${bounds.left},${bounds.bottom} Z`);
    qs('.sparkline-end', svg).setAttribute('cx', end.x);
    qs('.sparkline-end', svg).setAttribute('cy', end.y);
    changeNode.textContent = displayChange;
    changeNode.classList.toggle('is-down', change < 0);
    svg.setAttribute('aria-label', `${profileMetricLabels[metricKey]} mock monthly history from September 2025 to August 2026; current value ${campaign.profile[metricKey]}; ${displayChange}`);
  });
};

const niceChartMaximum = (value) => {
  const roughStep = value / 4;
  const magnitude = 10 ** Math.floor(Math.log10(roughStep));
  const normalized = roughStep / magnitude;
  const step = (normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10) * magnitude;
  return Math.ceil(value / step) * step;
};

const renderEvidenceChart = (campaign, signal, range) => {
  const history = evidenceHistory[activeArtist][range];
  const bounds = { left: 40, right: 735, top: 25, bottom: 190 };
  const maximum = niceChartMaximum(Math.max(...history.series, ...history.baseline) * 1.08);
  const points = pointsForSeries(history.series, bounds, maximum);
  const baselinePoints = pointsForSeries(history.baseline, bounds, maximum);
  const line = smoothPath(points);
  const eventPoint = points[history.eventIndex];
  const labelX = eventPoint.x > 555 ? eventPoint.x - 174 : eventPoint.x + 10;
  const yTicks = [maximum, maximum * 2 / 3, maximum / 3, 0].map(Math.round);

  setText('#chart-heading', history.heading);
  setText('#chart-delta-label', `vs. prior ${periodCopy[range]}`);
  setText('#chart-delta', history.delta);
  setText('#chart-title', `${campaign.chart.title} over ${periodCopy[range]}`);
  setText('#chart-desc', history.description);
  setText('#event-time', history.time);
  setText('#event-detail', history.event);
  setText('#current-pace', `${history.series.at(-1)} / ${history.interval}`);
  setText('#peak-pace', `${Math.max(...history.series)} / ${history.interval}`);
  setText('#baseline-lift', signal.multiple);
  setText('#data-point-count', `${history.series.length} intervals`);
  setText('#source-tiktok', history.mix[0]);
  setText('#source-youtube', history.mix[1]);
  setText('#source-instagram', history.mix[2]);
  yTicks.forEach((tick, index) => setText(`#axis-y-${index + 1}`, tick));
  rangeAxisLabels[range].forEach((label, index) => setText(`#axis-x-${index + 1}`, label));

  qs('#chart-actual').setAttribute('d', line);
  qs('#chart-baseline').setAttribute('d', smoothPath(baselinePoints));
  qs('#chart-area').setAttribute('d', `${line} L${bounds.right},${bounds.bottom} L${bounds.left},${bounds.bottom} Z`);
  qs('#chart-points').innerHTML = points.map((point, index) => `<circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="2.25"><title>Interval ${index + 1}: ${point.value} mentions</title></circle>`).join('');
  qs('#event-line').setAttribute('x1', eventPoint.x);
  qs('#event-line').setAttribute('x2', eventPoint.x);
  qs('#event-dot').setAttribute('cx', eventPoint.x);
  qs('#event-dot').setAttribute('cy', eventPoint.y);
  qs('#event-label').setAttribute('transform', `translate(${labelX.toFixed(1)} 0)`);
};

const showToast = (title, detail = '') => {
  qs('strong', toast).textContent = title;
  qs('small', toast).textContent = detail;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
};

const renderSignal = () => {
  const campaign = campaigns[activeArtist];
  const range = currentRange();
  const signal = campaign.ranges[range];
  qs('#signal-summary').innerHTML = `<strong>${campaign.pattern} · ${signal.count} matches in ${periodCopy[range]}.</strong> Volume is ${signal.multiple} above baseline across TikTok, YouTube, and Instagram.`;
  setText('#match-count', signal.count);
  setText('#why-repeats', `${signal.count} / ${range === '168' ? '7d' : `${range}h`}`);
  setText('#why-velocity', signal.multiple);
  setText('#threshold-copy', `The pattern met the recurrence and velocity thresholds in ${periodCopy[range]}, with consistent sentiment across ${campaign.platforms} platforms.`);
  setText('#brief-modal-title', `${campaign.track} · ${rangeLabel[range]} signal brief`);
  setText('#brief-summary', `${signal.count} matches across TikTok, YouTube, and Instagram in ${periodCopy[range]}. ${campaign.audience.regions} audiences ages ${campaign.audience.age} show the highest concentration.`);
  renderEvidenceChart(campaign, signal, range);
  renderShareLink();
};

const renderComments = (comments) => {
  qs('#comments-list').innerHTML = comments.map(([platform, handle, likes, comment, match]) => `<article><div><i class="platform-icon">${platform}</i><strong>${handle}</strong><span>${likes}</span></div><p>${comment}</p><small>${match}</small></article>`).join('');
};

const renderBars = (bars) => {
  qs('#audience-bars').innerHTML = bars.map(([label, value, width]) => `<div class="bar-row"><div><span>${label}</span><strong>${value}</strong></div><div class="bar"><i style="--width: ${width}%"></i></div></div>`).join('');
};

const renderCampaign = (key, announce = true) => {
  if (!campaigns[key]) return;
  if (campaigns[activeArtist]) savedNotes[activeArtist] = qs('#lens-note').value;
  activeArtist = key;
  const campaign = campaigns[key];

  setText('#artist-name', campaign.artist);
  setText('#artist-cover-fallback', campaign.initials);
  const artistImage = qs('#artist-cover-image');
  artistImage.hidden = false;
  artistImage.src = campaign.image;
  artistImage.className = `artist-photo artist-photo--${campaign.theme}`;
  setText('#campaign-name', campaign.campaign);
  setText('#artist-genre', campaign.profile.genre);
  setText('#monthly-listeners', campaign.profile.monthlyListeners);
  setText('#instagram-followers', campaign.profile.instagramFollowers);
  setText('#tiktok-followers', campaign.profile.tiktokFollowers);
  setText('#us-streams-atd', campaign.profile.usStreamsAtd);
  setText('#worldwide-streams-atd', campaign.profile.worldwideStreamsAtd);
  renderProfileHistory(key, campaign);
  setText('#signal-confidence', campaign.confidence);
  setText('#source-count', campaign.sources);
  setText('#keep-title', campaign.keepTitle);
  setText('#keep-copy', campaign.keepCopy);
  setText('#platform-count', campaign.platforms);
  setText('#sentiment-score', campaign.sentiment);
  setText('#why-sentiment', campaign.sentiment);
  setText('#why-coverage', campaign.audience.coverage);
  setText('#why-platforms', `${campaign.platforms} platforms represented`);
  setText('#meaning-title', campaign.meaningTitle);
  setText('#meaning-copy', campaign.meaningCopy);
  setText('#lead-quote', campaign.quote);
  setText('#move-title', campaign.moveTitle);
  qs('#action-list').innerHTML = campaign.actions.map(([when, action]) => `<li><span>${when}</span> ${action}</li>`).join('');
  setText('#owner-initials', campaign.owner.initials);
  setText('#owner-name', campaign.owner.name);
  qs('#audience-lead').innerHTML = `<strong>${campaign.audience.regions} · ages ${campaign.audience.age}</strong> account for <strong>${campaign.audience.share}</strong> of matched posts.`;
  setText('#coverage-rate', campaign.audience.coverage);
  renderBars(campaign.audience.bars);
  qs('#lens-note').value = savedNotes[key] ?? campaign.lens;
  setText('#brief-artist', `THE SWAMP / ${campaign.artist.toUpperCase()}`);
  setText('#brief-headline', campaign.briefHeadline);
  setText('#brief-quote', campaign.quote);
  setText('#brief-move-title', `${campaign.moveTitle}.`);
  setText('#brief-actions', campaign.briefActions);
  setText('#share-preview-title', `${campaign.artist} · ${campaign.track} signal brief`);
  setText('#decision-record-title', campaign.moveTitle);
  const outcome = outcomePlans[key];
  setText('#measurement-question', outcome.question);
  setText('#primary-kpi', outcome.kpi);
  setText('#mock-result-primary', outcome.result);
  setText('#mock-result-copy', outcome.detail);
  renderComments(campaign.comments);
  renderSignal();

  const approveButton = qs('#approve-button');
  approveButton.disabled = approvedCampaigns.has(key);
  approveButton.textContent = approvedCampaigns.has(key) ? 'Approved ✓' : 'Approve action';
  setText('#brief-approval-status', approvedCampaigns.has(key) ? 'Approved by Marketing · Evidence available on request' : 'Draft · Strategist approval required · Evidence available on request');
  updateDecisionState();
  qsa('[data-artist]', campaignMenu).forEach((item) => {
    const selected = item.dataset.artist === key;
    item.setAttribute('aria-current', selected ? 'true' : 'false');
    qs('i', item).textContent = selected ? '✓' : '';
  });
  document.title = `The Swamp — ${campaign.artist} dashboard`;
  const url = new URL(window.location.href);
  url.searchParams.set('artist', key);
  history.replaceState(null, '', url);
  if (announce) showToast(`${campaign.artist} loaded`, `${campaign.campaign} · illustrative mock`);
};

const closeCampaignMenu = () => {
  campaignMenu.hidden = true;
  campaignButton.setAttribute('aria-expanded', 'false');
};

campaignButton.addEventListener('click', () => {
  const opening = campaignMenu.hidden;
  campaignMenu.hidden = !opening;
  campaignButton.setAttribute('aria-expanded', String(opening));
  if (opening) qs('[aria-current="true"]', campaignMenu)?.focus();
});
campaignButton.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    campaignMenu.hidden = false;
    campaignButton.setAttribute('aria-expanded', 'true');
    qs('[role="menuitem"]', campaignMenu).focus();
  }
});
qsa('[data-artist]', campaignMenu).forEach((item) => item.addEventListener('click', () => {
  renderCampaign(item.dataset.artist);
  closeCampaignMenu();
  campaignButton.focus();
}));
document.addEventListener('click', (event) => {
  if (!qs('.campaign-picker').contains(event.target)) closeCampaignMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !campaignMenu.hidden) {
    closeCampaignMenu();
    campaignButton.focus();
  }
});

qs('#brief-button').addEventListener('click', () => briefModal.showModal());
qsa('.modal-close').forEach((button) => button.addEventListener('click', () => briefModal.close()));
qsa('.share-close').forEach((button) => button.addEventListener('click', () => shareModal.close()));
qs('#open-sources').addEventListener('click', () => sourcesModal.showModal());
qsa('.source-close').forEach((button) => button.addEventListener('click', () => sourcesModal.close()));
qs('#comments-button').addEventListener('click', () => commentsModal.showModal());
qs('#view-evidence').addEventListener('click', () => commentsModal.showModal());
qsa('.comments-close').forEach((button) => button.addEventListener('click', () => commentsModal.close()));
[briefModal, shareModal, sourcesModal, commentsModal].forEach((dialog) => dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); }));

qsa('.range-control button').forEach((button) => {
  button.addEventListener('click', () => {
    qsa('.range-control button').forEach((item) => {
      item.classList.remove('is-selected');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('is-selected');
    button.setAttribute('aria-pressed', 'true');
    renderSignal();
  });
});

qs('#approve-button').addEventListener('click', (event) => {
  approvedCampaigns.add(activeArtist);
  event.currentTarget.textContent = 'Approved ✓';
  event.currentTarget.disabled = true;
  setText('#brief-approval-status', 'Approved by Marketing · Evidence available on request');
  updateDecisionState();
  showToast('Decision approved', `${campaigns[activeArtist].owner.name} was notified.`);
});

qs('#preview-outcome').addEventListener('click', () => {
  approvedCampaigns.add(activeArtist);
  learnedCampaigns.add(activeArtist);
  qs('#approve-button').textContent = 'Approved ✓';
  qs('#approve-button').disabled = true;
  setText('#brief-approval-status', 'Approved by Marketing · Evidence available on request');
  updateDecisionState();
  showToast('Mock result recorded', 'Campaign status updated.');
});

qs('#save-note').addEventListener('click', () => {
  savedNotes[activeArtist] = qs('#lens-note').value;
  showToast('Strategy note saved', `Added to ${campaigns[activeArtist].artist}’s decision record.`);
});
qs('#share-button').addEventListener('click', () => {
  renderShareLink();
  shareModal.showModal();
});
qs('#copy-share-link').addEventListener('click', async () => {
  try { await copyText(qs('#share-url').value); showToast('Live-page link copied', 'Open it in a new tab to show the recipient view.'); }
  catch { showToast('Copy unavailable', 'Select the link and copy it manually.'); }
});
qs('#copy-brief').addEventListener('click', async () => {
  try { await copyText(qs('#brief-content').innerText); showToast('Brief copied', 'Paste it into Google Docs.'); }
  catch { showToast('Copy unavailable', 'Select the brief text to copy manually.'); }
});

qs('#download-brief').addEventListener('click', () => {
  const campaign = campaigns[activeArtist];
  const range = currentRange();
  const content = qs('#brief-content').innerHTML;
  const documentHtml = `<!doctype html><html><head><meta charset="utf-8"><title>${campaign.track} — ${rangeLabel[range]} signal brief</title><style>body{max-width:760px;margin:60px auto;padding:0 24px;color:#181916;font:16px Arial,sans-serif;line-height:1.5}.brief-masthead{display:flex;justify-content:space-between;border-bottom:2px solid;padding-bottom:10px;font-size:11px}.brief-overline{margin-top:36px;color:#b93b2c;font-size:11px;letter-spacing:.1em}.brief-preview h3,h3{font:600 38px Georgia,serif;line-height:1.05}.brief-quote{margin:28px 0;padding:18px;border-left:3px solid #e85e43;background:#f3f0e8;font:italic 20px Georgia,serif}.brief-move{padding:24px;color:white;background:#171713}.brief-move span{color:#c7dc68;font-size:11px}.brief-move strong{display:block;margin:7px 0;font:600 24px Georgia,serif}.brief-footnote{color:#777;font-size:11px}</style></head><body>${content}</body></html>`;
  const blob = new Blob([documentHtml], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${activeArtist}-${rangeLabel[range]}-signal-brief.html`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast('HTML brief downloaded', 'Client-safe and ready to share.');
});

const menuButton = qs('#menu-button');
const mobileMenu = qs('#mobile-menu');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  mobileMenu.hidden = expanded;
});
qsa('a', mobileMenu).forEach((link) => link.addEventListener('click', () => {
  mobileMenu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
}));

const visibleArtists = ['kentheman', 'straykids', 'mergui'];
const requestedArtist = new URL(window.location.href).searchParams.get('artist');
renderCampaign(visibleArtists.includes(requestedArtist) ? requestedArtist : 'kentheman', false);
