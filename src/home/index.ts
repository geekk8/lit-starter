import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('home-page')
export class Index extends LitElement {
  static override styles = 
    css`
      :host {
        display: block;
      }
    `

  override render() {
    return html``;
  }
}
