"use strict";

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * This shim allows elements written in, or compiled to, ES5 to work on native
 * implementations of Custom Elements v1. It sets new.target to the value of
 * this.constructor so that the native HTMLElement constructor can access the
 * current under-construction element's definition.
 *
 * Because `new.target` is a syntax error in VMs that don't support it, this
 * shim must only be loaded in browsers that do.
 */
(function () {
  var origHTMLElement = HTMLElement;
  // TODO(justinfagnani): Tests!!
  window.HTMLElement = function () {
    return Reflect.construct(origHTMLElement, [], this.constructor);
  };
  HTMLElement.prototype = Object.create(origHTMLElement.prototype, {
    constructor: { value: HTMLElement, configurable: true, writable: true }
  });
})();
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestElement = function (_HTMLElement) {
  _inherits(TestElement, _HTMLElement);

  function TestElement() {
    _classCallCheck(this, TestElement);

    var _this = _possibleConstructorReturn(this, (TestElement.__proto__ || Object.getPrototypeOf(TestElement)).call(this));

    var root = _this.attachShadow({ mode: 'open' });
    root.innerHTML = 'Hello, <slot></slot>.';
    return _this;
  }

  return TestElement;
}(HTMLElement);

customElements.define('test-element', TestElement);
