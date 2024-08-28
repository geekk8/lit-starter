import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";

@customElement('my-introduce')
export class introduce extends LitElement {
  @property({type:String})
  name = 'noh kuk hyun'
  job = 'developer'

  @property({type:Number})
  age = 34

  getMyIntroudceData = () => {

  }

  override render() {
    html`
    
    `
  }
}
