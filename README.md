# eastereck

A library that provides funny easter eggs for your page. Notice that it is still in development.

## Include it into your project

### Via npm

The aim is to install it via npm with `npm install --save eastereck` and then just require or import it.

### Via script tag

An other way is to include it via script tag in HTML:  

```html
<script src="https://github.com/KevinHerklotz/eastereck/dist/eastereck.min.js"></script>
```

This adds the eastereck object to the global scope, so you can start an easter egg with `eastereck.functionname.start()`.

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

## Available easter eggs

### Already implemented

#### drunken
Blurred screen like when you are drunken.

Does not work in IE (see [caniuse.com](http://caniuse.com/#feat=css-filters)).

#### unicorncursor
Cursor turns into unicorn.

### Ideas / not yet implemented

(alphabetical order)

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

#### pornsound
An embarrassing porn sound is played. 

#### scrollconfusion
Scrolling up will scroll down the page and vice versa.

#### unicorninvasion
Unicorns appear all over the screen and a fancy unicorn song is played. 

#### upsidedown
Screen will rotate 180 degree. Most funny on mobile devices, when the user tries to rotate the device to solve the problem.

## Demo

Click [here](https://rawgit.com/KevinHerklotz/eastereck/master/dist/demo.html) to see a demo page.