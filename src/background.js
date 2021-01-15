'use strict';

let tedditURL = '';

try {
  chrome.storage.sync.onChanged.addListener(function(changes) {
    if (changes.tedditURL !== undefined) {
      tedditURL = changes.tedditURL.newValue;
      console.log(`teddit URL changed to ${tedditURL}`);
    }
  });
} catch (err) {
  console.log(err);
}

if (tedditURL === '') {
  try {
    chrome.storage.sync.get(['tedditURL'], function(items) {
      if (items.tedditURL !== undefined) {
        tedditURL = items.tedditURL;
      } else {
        tedditURL = 'https://teddit.net';
      }
    });
  } catch (err) {
    console.log(err);
  }
}

// https:// stackoverflow.com/questions/16928912/url-forwarding-using-chrome-webrequest-after-response-is-received#answer-16932715
chrome.webRequest.onBeforeRequest.addListener(function(details) {
  const redditURL = new URL(details.url);
  const redirectURL = `${tedditURL}${redditURL.pathname}${redditURL.search}`;
  console.log(`Redirecting ${redditURL} to ${redirectURL}`);
  return {redirectUrl: redirectURL};
}, {
  urls: ['*://*.reddit.com/*'],
}, ['blocking']);
