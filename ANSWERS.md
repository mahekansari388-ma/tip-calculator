## 1. How to Run

1. Go to the GitHub repository link
2. Click the green "Code" button
3. Click "Download ZIP"
4. Extract the ZIP file
5. Open the extracted folder
6. Double click `index.html`
7. Opens in browser — done!

No installation needed.
No terminal. No packages. Just a browser.

## 2. Stack & Design Choices

I used plain HTML, CSS, and JavaScript because that is what 
I know best right now. No framework was needed for this 
project since it is a single page app with simple logic.

Two design decisions I made:

1. I split the layout into two cards — left for inputs, 
right for summary. I did this because it makes it easy 
to see inputs and results at the same time without scrolling.

2. I chose an ice blue to dark blue gradient background 
because it feels calm and clean. A calculator app should 
feel simple and easy on the eyes, not distracting.

 ## 3. Responsive & Accessibility

On mobile (360px): the two cards stack vertically 
one below the other so everything fits on small screen.

On desktop (1440px): the two cards sit side by side 
so the user can see inputs and results at the same time.

Accessibility I handled:
I made sure all input fields have labels so the user 
knows what to type in each box.

Accessibility I skipped:
I did not add full keyboard navigation between preset 
buttons. I ran out of time but with one more day I would 
add proper tab focus states on all buttons.

 ## 4. AI Usage

I used Gemini CLI and Claude AI as assistants during this project. While I wrote almost all of the HTML and CSS myself, I used AI to help me figure out the structure for the more complex JavaScript parts and to double-check my responsiveness.

How I used it:

 What I asked: I asked the AI to help with the calculation logic for the bills, the error message triggers, and the CSS media queries for mobile responsiveness.

 What it gave me: It provided the basic JavaScript functions and some CSS grid code. However, it often made blunders, like duplicating my HTML tags or breaking the reset button logic, which I had to fix manually.

A Specific Change I Made & Why:

 The AI's original code for the buttons was very basic. I manually wrote the JavaScript logic so that clicking a custom button automatically moves the focus to the input box for a better user experience. I also changed the AI’s left-to-right gradient to a 180-degree (top-to-bottom) ice blue to dark blue gradient. I did this because the AI’s version looked too simple, and I wanted a specific "calm" feeling that matched my design vision.

 ## 5. Honest Gap

What isn’t polished enough:

 The keyboard navigation is not fully finished. While I added labels to the input boxes so they are clear, I didn't have time to make sure every button works perfectly using only the "Tab" key.

How I would fix it with more time:

 If I had one more day, I would add "focus states" to all the buttons. This means when a user moves through the app using a keyboard, a bright outline would show up around the buttons so they know exactly which one they are about to click. This makes the app much easier to use for people who don't use a mouse.

