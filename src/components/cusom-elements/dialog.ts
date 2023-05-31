export function auditCommentDialog(callerElement:HTMLDialogElement, action, actionData):Promise<any>{
    return new Promise((resolve) => {
      const dialog = Object.assign(document.createElement('app-dialog'), {
        callerElement, action, actionData
      });
      document.body.appendChild(dialog);
      dialog.addEventListener('appdialog-click', (e:CustomEvent) => {
        resolve(e.detail);
      });
    })
  }