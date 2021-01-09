# Teddit Please

Teddit Please is a Chrome extension that redirects all your Reddit traffic to a lightweight, privacy-friendly, open source Reddit front-end called [Teddit](https://teddit.net/about) whenever you click on a reddit link or directly browse to reddit.

## Using your own teddit instance
If you are using your own [teddit instance](https://codeberg.org/teddit/teddit#instances) to browse reddit, you can redirect reddit links to your instance, by going to Options and pasting in URL to your instance.

## Permissions Audit
If you are curious or concerned about the permissions requested by this extension, the following is a brief explainer for each permission and where you can find it used in code:
- `webRequest` and `webRequestBlocking` are used to [redirect your traffic](https://github.com/0xedward/teddit-please/blob/main/src/background.js#L29-L36)
- `storage` is used to [store the URL you set](https://github.com/0xedward/teddit-please/blob/main/src/options.js#L1-L23) if you decide to use your own teddit instance 
- [`background` scripts can't be run with `persistent` key set to false when using the `webRequest` API](https://developer.chrome.com/docs/extensions/mv2/background_pages/)

## Credits
The [icon](https://codeberg.org/teddit/teddit/src/branch/main/static/favicon.png) used for the extension was found on [teddit's open source repo](https://codeberg.org/teddit/teddit)