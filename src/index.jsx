// import App from 'app/app';
import ReactDom from 'react-dom';
import React from 'react';
import NumberField from 'numberField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap material-ui
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


ReactDom.render(
	(<MuiThemeProvider>
		<NumberField
			id="id"
			defaultValue={5}
		/>
	</MuiThemeProvider>),
	window.document.getElementById('app'),
);

