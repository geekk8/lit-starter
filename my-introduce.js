var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";
let introduce = class introduce extends LitElement {
    constructor() {
        super(...arguments);
        this.name = 'noh kuk hyun';
        this.job = 'developer';
        this.age = 34;
        this.getMyIntroudceData = () => {
        };
    }
    render() {
        html `
    
    `;
    }
};
__decorate([
    property({ type: String })
], introduce.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], introduce.prototype, "age", void 0);
introduce = __decorate([
    customElement('my-introduce')
], introduce);
export { introduce };
//# sourceMappingURL=my-introduce.js.map