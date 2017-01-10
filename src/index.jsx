import 'highlight.js/styles/default.css';
import 'style.less';
import ReactDom from 'react-dom';
import React from 'react';
import Highlight from 'react-syntax-highlight';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
// import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
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
				title="MUI NumberField Examles"
				showMenuIconButton={false}
			/>
			<div className="content">
				<div className="examle-item">
					<Card>
						<CardHeader
							title="Simple field"
							actAsExpander
							showExpandableButton
						/>
						<CardActions>
							<NumberField name="name" />
						</CardActions>
						<CardText expandable>
							<Highlight lang={'javascript'} value={'<NumberField name="name" />'} />
						</CardText>
					</Card>
				</div>
				<div className="examle-item">
					<Card>
						<CardHeader
							title="Using 'min' and 'max' property"
							actAsExpander
							showExpandableButton
						/>
						<CardActions>
							<Subheader>{'min = -100, max = 100'}</Subheader>
							<NumberField name="name" min={-100} max={100} />
						</CardActions>
						<CardText expandable>
							<Highlight lang={'javascript'} value={'<NumberField name="name" min={-100} max={100} />'} />
						</CardText>
					</Card>
				</div>
				<div className="examle-item">
					<Card>
						<CardHeader
							title="Using vanilla 'floatingLabelText' property"
							actAsExpander
							showExpandableButton
						/>
						<CardActions>
							<NumberField name="name" floatingLabelText="floating label text" />
						</CardActions>
						<CardText expandable>
							<Highlight lang={'javascript'} value={'<NumberField name="name" floatingLabelText="floating label text" />'} />
						</CardText>
					</Card>
				</div>
			</div>
		</div>
	</MuiThemeProvider>),
	window.document.getElementById('app'),
);


