import * as vscode from 'vscode';
import { getWebviewContent } from './webView';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "typescriptgenuml" is now active!');

	let disposable = vscode.commands.registerCommand('typescriptgenuml.helloWorld1', () => {
		vscode.window.showInformationMessage('Hello World from TypeScriptGenUml!');
	});

	context.subscriptions.push(disposable);

	async function genumlCommand(fileUri: any) {
		console.log('fileUri: ' + fileUri);

		const panel = vscode.window.createWebviewPanel(
			'catCoding', // Identifies the type of the webview. Used internally
			'Cat Coding', // Title of the panel displayed to the user
			vscode.ViewColumn.Two,
			{
				enableScripts: true,
			}
		);

		const cat = 'Compiling Cat';
		panel.title = cat;
		panel.webview.html = getWebviewContent(cat);
	}

	disposable = vscode.commands.registerCommand('typescriptgenuml.genuml', genumlCommand);

	context.subscriptions.push(disposable);
}
