"use strict";

module.exports = function elementsFromPoint(x, y, context, selector) {
    // Fallback to built in method if no context provided. (In IE)
    if (!context) {
        return document.msElementsFromPoint && document.msElementsFromPoint(x, y) || null;
    }
    
    var elements = [];
    var children = selector ? context.querySelectorAll(selector) : context.children;
    
    function hasElCollidedWithCoord(pos) {
        return pos.left <= x && x <= pos.right && pos.top <= y && y <= pos.bottom;
    }
    
    for (var i = 0, l = children.length; i < l; i++) {
        var pos = children[i].getBoundingClientRect();
        if (hasElCollidedWithCoord(pos)) {
            elements.push(children[i]);
        }
    }
    
    return elements;
};
