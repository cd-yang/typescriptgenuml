import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "typescriptgenuml" is now active!');

	let disposable = vscode.commands.registerCommand('typescriptgenuml.helloWorld1', () => {
		vscode.window.showInformationMessage('Hello World from TypeScriptGenUml!');
	});

	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('typescriptgenuml.genuml', () => {
		vscode.window.showWarningMessage('Generating Uml from TypeScript');
	});

	context.subscriptions.push(disposable);
}
