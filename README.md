# EXPEREMENTAL!!! NOT USE IN PRODUCTION

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

### API

| Name                    | Type       | Default   | Description                                                                       |
| ----------------------- | ---------- | --------- | --------------------------------------------------------------------------------- |
| children                | *node*     |           |                                                                                   |
| className               | *string*   |           | The css class name of the root element.                                           |
| disabled                | *bool*     | *false*   | Disables the input field if set to true.                                          |
| id                      | *string*   |           | The id prop for the input field.                                                  |
| name                    | *string*   |           | Name applied to the input.                                                        |
| defaultValue            | *number*   |           | The number to use for the default value.                                          |
| min                     | *number*   |           | The number to use for the minimum limit                                           |
| max                     | *number*   |           | The number to use for the maximum limit                                           |
| value                   | *string*   |           | The value of the input field.                                                     |
| onChange                | *function* |           | Callback function that is fired when input filed must change.                     |
| floatingLabelText       | *node*     |           | The content to use for the floating label element.                                |
| style                   | *object*   |           | Override the inline-styles of the root element.                                   |
