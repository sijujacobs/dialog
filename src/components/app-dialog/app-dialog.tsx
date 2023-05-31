import { Component, h, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'app-dialog',
  styleUrl: 'app-dialog.css',
  shadow: true,
})
export class AppDialog {
  @Event({ eventName:'appdialog-click'}) appdialogclick: EventEmitter<{result:any, error:any}>;
  @Prop() action:any;

  @State() isOpen = true;
  private response:any;

  async handleYesClick() {
    this.isOpen = false;
    this.response = await this.action();
    this.appdialogclick.emit({result:this.response, error:null});
    return this.response;
  }

  handleNoClick() {
    this.isOpen = false;
    this.appdialogclick.emit({result:null, error:true})
  }

  render() {
    return (
      <div class={this.isOpen ? 'dialog-overlay': 'dialog-none'}>
        <div class="dialog">
          <p>Are you sure?</p>
          <button onClick={() => this.handleYesClick()}>Yes</button>
          <button onClick={() => this.handleNoClick()}>No</button>
        </div>
      </div>
    );
  }
}



// import { Component, Host, h } from '@stencil/core';

// @Component({
//   tag: 'app-dialog',
//   styleUrl: 'app-dialog.css',
//   shadow: true,
// })
// export class AppDialog {

//   render() {
//     return (
//       <Host>
//         <slot></slot>
//       </Host>
//     );
//   }

// }
