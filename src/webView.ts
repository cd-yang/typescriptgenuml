import * as path from 'path';
import * as vscode from 'vscode';

export function getWebviewContent(panel: vscode.WebviewPanel, context: vscode.ExtensionContext) {
  const bundleScriptPath = panel.webview.asWebviewUri(
    vscode.Uri.file(path.join(context.extensionPath, 'out', 'app', 'bundle.js'))
  );

  return `
        <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React App</title>
          </head>
      
          <body>
            <div id="root"></div>
            <div id="graph"></div>
            <script src="${bundleScriptPath}"></script>
          </body>
        </html>
      `;
}