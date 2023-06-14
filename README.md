# URL-Tracker-Chrome-Extension

This repository contains the code for a simple Chrome extension that allows users to save and manage a list of URLs and text entries. It provides functionality to save current tabs, save user-entered text, and delete all saved entries.

## Installation

To use this Chrome extension, follow the steps below:

1. Clone this repository to your local machine.
2. Open Google Chrome and type `chrome://extensions` in the address bar.
3. Enable the "Developer mode" toggle button located in the top-right corner.
4. Click on the "Load unpacked" button and select the cloned repository folder.

## Usage

Once the Chrome extension is installed, you can use it by following these steps:

1. Open a new tab in Google Chrome.
2. You will see an input field with the placeholder "Type Anything!".
3. Enter any text or URL in the input field and click the "SAVE" button to save it.
4. The saved entry will appear as a list item below the input field.
5. If you enter a valid URL starting with "http://" or "https://", the list item will be a clickable link.
6. To save the current tab's URL, click the "SAVE TAB" button.
7. To delete all saved entries, double-click the "DELETE ALL" button.
8. The saved entries will persist even if you close the browser, thanks to local storage.

## Files

This project contains the following files:

- `index.html`: The HTML file that defines the structure and layout of the extension's user interface.
- `onr.css`: The CSS file that styles the HTML elements in `index.html`.
- `index.js`: The JavaScript file that implements the functionality of the Chrome extension.

## Development

If you want to modify or enhance this Chrome extension, here are some tips:

- The `index.html` file contains the UI elements and their structure. You can modify it to change the layout or add new elements.
- The `onr.css` file contains the styles for the UI elements. Feel free to customize it to match your preferences.
- The `index.js` file contains the logic and event handlers for the extension. You can modify it to add new features or change the existing behavior.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.
