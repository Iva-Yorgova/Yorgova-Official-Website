class Button extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<button id="myBtn" title="Go to top" style="color:lightgray" data-toggle="tooltip" data-placement="bottom"
        data-container="body">
        <i class="material-icons">arrow_upward</i>
    </button>`;
    }
}

customElements.define('button-component', Button);