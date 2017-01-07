## React MUI NumberField
Number field component for <a href="http://www.material-ui.com">React Material UI</a>.

### Install

`npm install react-material-ui-number-input --save`

### Using

```jsx
import ReactDom from 'react-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NumberField from 'react-material-ui-number-input';

// Needed for onTouchTap material-ui
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDom.render(
	(<MuiThemeProvider>
		<NumberField name="name" min={-100} max={100} />
	</MuiThemeProvider>),
	window.document.getElementById('app'),
);
```
