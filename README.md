# eastereck

A library that provides funny easter eggs for your page.


## In development

The first thing I did was writing this documentation - so don't wonder the library doesn't work yet.

## Installation

### Via npm

The aim is to install it via npm with `npm install --save eastereck` and then just require or import it.

### Via scipt tag

An other way should be including it just via script tag in HTML:  

```html
<script src="https://github.com/KevinHerklotz/eastereck/dist/eastereck.js"></script>
```

This should add the eastereck object to the global scope, so you can start an easter egg with `eastereck.functionname()`.

## Usage

```javascript
import 'eastereck'

// To start it.
// "duration" (in milliseconds) and "callback" are both optional .
eastereck.functionname.start(duration, callback);

// To stop it
eastereck.functionname.stop();
```


## Available easter eggs

### Already implemented

___none___

### Ideas / not yet implemented

(alphabetical order)

#### brokenglass
You think you broke your screen glass! Even with the sound of breaking glass.

#### drunken
Blurred screen like when you are drunken.

#### flicker
Screen will flicker like an old television

#### iconparty
All icons will rotate randomly.

#### pornsound
An embarrassing porn sound is played. 

#### scrollconfusion
Scrolling up will scroll down and vice versa.

#### unicorninvasion
Unicorns appear all over the screen and a fancy unicorn song is played. 

#### unicorncursor
Cursor turns into unicorn.

#### upsidedown
Screen will rotate 180 degree. Most funny on mobile devices, when the user tries to rotate the device to solve the problem.

## Demo

demo page coming soon...