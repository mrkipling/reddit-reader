import settings from './settings';

const client = {
  connect() {
    return new snoowrap(settings.reddit);
  },
};

const plural = (int, words) => (int === 1 ? words[0] : words[1]);

export {
  client,
  plural,
};
