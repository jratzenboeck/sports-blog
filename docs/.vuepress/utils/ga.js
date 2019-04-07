import { event } from 'vue-analytics';

export function trackEvent(category, action, label, value) {
  event(category, action, label, value);
}

export function trackClick(category, action, label, value) {
  trackEvent(`page: ${category}`, `click: ${action}`, label, value);
}
