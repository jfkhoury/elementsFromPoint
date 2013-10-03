# elementsFromPoint

Cross browser `elementsFromPoint` helper, that returns all the elements at a point: { x, y}

Here's a quick example:

```html
<div class="container">
    <div class="a">a</div>
    <div class="b">b</div>
    <div class="c">c</div>
    <div class="d">d</div>
</div>
```

```js
var container = document.querySelector(".container");
document.addEventListener("mousedown", function (ev) {
    var els = elementsFromPoint(ev.clientX, ev.clientY, container, ".c");
    if (els.length > 0) {
        console.log(els.map(function(el) {
            return el.innerText;
        }));
    }
});
```

## Usage

elementsFromPoint is packaged as a [Node.js][] module, meant for use with a system like [Browserify][].