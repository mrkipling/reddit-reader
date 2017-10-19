import moment from 'moment';
import settings from './settings';

const client = {
  connect() {
    return new snoowrap(settings.reddit);
  },
};

const plural = (int, words) =>
  (int === 1 ? words[0] : words[1]);

const timeAgo = timestamp =>
  moment.unix(timestamp).fromNow();

export {
  client,
  plural,
  timeAgo,
};
