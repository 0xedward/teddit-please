function saveOptions() {
  const userInputString = document.getElementById('teddit-url-input').value;
  const status = document.getElementById('status');
  try {
    // Create a throwaway URL object to pass validating URLs to the URL constructor
    new URL(userInputString);
    chrome.storage.sync.set({
      tedditURL: userInputString,
    }, function() {
      status.textContent = `Default teddit URL updated to ${userInputString}`;
      setTimeout(function() {
        status.textContent = '';
      }, 1000);
    });
  } catch (err) {
    console.log(err);
    if (err instanceof TypeError) {
      status.textContent = `${userInputString} is not a valid URL`;
    } else {
      status.textContent = `An unexpected error occurred: ${err}`;
    }
  }
}

function restoreOptions() {
  const urlInputField = document.getElementById('teddit-url-input');
  chrome.storage.sync.get(['tedditURL'], function(items) {
    if (items.tedditURL !== undefined) {
      urlInputField.value = items.tedditURL;
    } else {
      urlInputField.value = 'https://teddit.net';
    }
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
