// import App from 'app/app';
import ReactDom from 'react-dom';
import React from 'react';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

import NumberField from 'numberField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap material-ui
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


ReactDom.render(
	(<MuiThemeProvider>
		<div>
			<AppBar
				title="Doc"
				showMenuIconButton={false}
			/>
			<TextField
				id="f"
				floatingLabelText="floatingLabelText"
			/>
			<NumberField
				id="id"
			/>
			<NumberField
				id="id"
				value={50}
			/>
			<NumberField
				id="id"
				defaultValue={100}
			/>
			<NumberField
				id="id"
				value={50}
				disabled
			/>
			<NumberField
				id="id"
				floatingLabelText="floatingLabelText"
			/>
			<NumberField
				id="id"
				value={50}
				min={10}
			/>
		</div>
	</MuiThemeProvider>),
	window.document.getElementById('app'),
);

