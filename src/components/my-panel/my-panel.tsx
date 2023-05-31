import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { MyApiService } from '../../service/my-service';
import { auditCommentDialog } from '../cusom-elements/dialog';
import { Application } from '../../models/model';

@Component({
  tag: 'my-panel',
  styleUrl: 'my-panel.css',
  shadow: true,
})
export class MyPanel {
    @State() filterApplications = [];
    @Prop() applications: Application[] = [];
    @Event({ eventName:'selected-tab-info'}) selectedTabInfo: EventEmitter<any>;
    @State() finalAppName = '';
    _auditComment:any;


  async handleClick() {
    const action = async() => {
      try {
        return await MyApiService.instance.savePlaceHolderData()
      } catch (error) {
        console.log("ACtion Catch Error")
      }
    }
    const comment = "actionComment";
    const dialogReturnValue = await auditCommentDialog(null, action, comment);
    console.log('dialogReturnValue:', dialogReturnValue);
    debugger;
    if (dialogReturnValue === 'yes') {
      // Call the API service "postDataApiService" here
      console.log('Calling API service...');
    }
  }

  removeDialogComponent() {
    const dialog = document.querySelector('app-dialog');
    dialog.remove();
  }

  componentWillLoad() {
    this.filterApplications = [
      { label: 'App 1', displayName: 'Application 1' },
      { label: 'App 2', displayName: 'Application 2' },
      { label: 'App 3', displayName: 'Application 3' }
    ];
  }

  render() {
    return (
      <div>
        <my-tabs>
          <div class="my-tabs-container">
              <h2>My dialog Container</h2>  
              {
              this.filterApplications.map((app) => {
                return(
                  <my-tab label={app.label} displayName={app.displayName}></my-tab>
                )
              })
            }
            </div>
        </my-tabs>
        <div>
        <button onClick={() => this.handleClick()}>Open Dialog</button>
      </div>
      </div>
    );
  }
}


