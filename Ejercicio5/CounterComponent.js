class CounterComponent extends HTMLElement {
    constructor() {
      super();
      this._counter = 0;
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            font-family: 'Arial', sans-serif;
          }
  
          p {
            font-size: 1.5em;
            margin: 0;
          }
  
          button {
            font-size: 1em;
            margin: 8px;
            padding: 8px;
            cursor: pointer;
          }
        </style>
  
        <p>Count: ${this._counter}</p>
        <button id="increment">+</button>
        <button id="decrement">-</button>
      `;
  
      // Asociar listeners después de renderizar
      this.attachListeners();
    }
  
    attachListeners() {
      this.shadowRoot.querySelector('#increment').addEventListener('click', () => {
        this._counter++;
        this.render();
      });
  
      this.shadowRoot.querySelector('#decrement').addEventListener('click', () => {
        this._counter--;
        this.render();
      });
    }
  }
  
  customElements.define('counter-component', CounterComponent);
  