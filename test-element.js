class TestElement extends HTMLElement {

  constructor() {
    super();
    let root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `Hello, <slot></slot>.`;
  }

}

customElements.define('test-element', TestElement);
