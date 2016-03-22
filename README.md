# eastereck

You like to amaze or annoy users of your website with funny easter eggs? Then this repository is what you need!
It provides lots of functionality and a simple API.
A library that provides funny easter eggs for your page. Notice that it is still in development.

If you have more ideas, tell me!

## Include it into your project

Everything (images, sounds, style, ...) is included in one JavaScript file, so you only need this one file.

### Via npm

The aim is to install it via npm with `npm install eastereck --save-dev` and then just require or import it.
This is not supported yet, but it's coming soon.

```javascript
var eastereck = require('eastereck');
```

### Via script tag

An other way is to include it via script tag in HTML:  

```html
<script src="https://github.com/KevinHerklotz/eastereck/dist/eastereck.min.js"></script>
```

This adds the eastereck object to the global scope, so you can start an easter egg with `eastereck.eastereggname.start()`.

```html
// Example:
<button onclick="eastereck.unicorncursor.start()">change cursor</button>
```

## Usage

```javascript
// To start it
eastereck.functionname.start(duration, callback);

// To stop it
eastereck.functionname.stop();
```

The function start accepts two parameters. Both are optional:
1. duration - time in milliseconds before stop() function is triggered, default is 0 which means that stop() function is never triggered automatically
2. callback - function that will be executed after the duration triggered the stop() function

```javascript
// Example:
eastereck.upsidedown.start(2000, function() {
    alert('That was just a joke.');
});
```

## Available easter eggs

### Already implemented

(alphabetical order)

#### drunken
Blurred screen like when you are drunken.

Does not work in IE (see [caniuse.com](http://caniuse.com/#feat=css-filters)).

#### pornsound
An embarrassing porn sound is played.

#### unicorncursor
Cursor turns into unicorn.

#### upsidedown
Screen will rotate 180 degree and an upside down cursor is shown (can be overwritten by unicorncursor).
Most funny on mobile devices, when the user tries to rotate the device to solve the problem.

### Ideas / not yet implemented

#### brokenglass
You think you broke your screen glass! Even with the sound of breaking glass.

#### neonflicker
Alternating neon colors that will make your eyes bleed.

#### flicker
Screen will flicker like an old television.

#### iconparty
All icons will rotate randomly.

#### meancaptcha
Displays a very mean Captcha.

#### movingscreen
Screen is moving around.

#### scrollconfusion
Scrolling up will scroll down the page and vice versa.

#### unicorninvasion
Unicorns appear all over the screen and a fancy unicorn song is played. 

## Demo

Click [here](https://rawgit.com/KevinHerklotz/eastereck/master/dist/demo.html) to see a demo page.