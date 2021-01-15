'use strict';

try {
  chrome.storage.sync.get({'tedditURL': 'https://teddit.net'}, function(items) {
    // https:// stackoverflow.com/questions/16928912/url-forwarding-using-chrome-webrequest-after-response-is-received#answer-16932715
    chrome.webRequest.onBeforeRequest.addListener(function(details) {
      const redditURL = new URL(details.url);
      const redirectURL = `${items.tedditURL}${redditURL.pathname}${redditURL.search}`;
      console.log(`Redirecting ${redditURL} to ${redirectURL}`);
      return {redirectUrl: redirectURL};
    }, {
      urls: ['*://*.reddit.com/*'],
    }, ['blocking']);
  });
} catch (err) {
  console.log(err);
}
