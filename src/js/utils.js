import moment from 'moment';
import snoowrap from 'snoowrap';
import settings from './settings';

const client = {
  connect() {
    return new snoowrap(settings.reddit);
  },
};

const formatNumber = num =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const plural = (int, words) =>
  (int === 1 ? words[0] : words[1]);

const timeAgo = timestamp =>
  moment.unix(timestamp).fromNow();

export {
  client,
  formatNumber,
  plural,
  timeAgo,
};
