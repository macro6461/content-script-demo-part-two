# Content Script Demo Part Two

This is the source code for my Medium blog post, "Add A Content Script To Your Chrome Extension (Part Two)".

## Usage

1. Go to [chrome://extensions](chrome://extensions).
2. Click "Load unpacked".
3. Load your code for this project.
4. Pin extension to your browser extensions.
5. Refresh the page.

### Messaging

1. In your `manifest.json` file, make sure to use
    ```
    "background":{
        "service_worker": "background.js"
    }
    ```
2. Also in your `manifest.json` file, make sure to use
    ```
    "content_scripts": [
        {
          "matches": ["https://medium.com/me/stats"],
          "runAt": "document_end",
          "js": ["content.js"]
        }
    ]
    ```

### Injection

1. In your `manifest.json` file, make sure to use
    ```
    "background":{
        "service_worker": "background-injection.js"
    }
    ```
2. Also in your `manifest.json` file, make sure to use
    ```
    "content_scripts": [
        {
          "matches": ["https://medium.com/me/stats"],
          "runAt": "document_end",
          "js": ["content-injection.js"]
        }
    ]
    ```
3. Finally, add the below to your `manifest.json`
    ```
    "permissions": [
        "scripting",
        "webRequest"
    ],
    ```

## Part One

To see code for Part One of this series, go [this repo](https://github.com/macro6461/content-script-demo-part-one). 

To see the blog post for Part One of this series, it can be found on [Medium](https://levelup.gitconnected.com/add-a-content-script-to-your-chrome-extension-part-one-3e96b62b9426).

[Upgrade your free Medium membership](https://matt-croak.medium.com/membership) and receive unlimited, ad-free, stories from thousands of writers on a wide variety of publications. This is an affiliate link and a portion of your membership helps me be rewarded for the content I create.

You can also [subscribe via email](https://matt-croak.medium.com/subscribe) and get notified whenever I post something new!

Connect with me on socials, or pay an invoice [here](https://linktr.ee/mattcroak)!