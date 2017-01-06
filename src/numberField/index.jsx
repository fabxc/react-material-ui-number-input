import React from 'react';
import TextField from 'material-ui/TextField';

const getValidDefaultValue = (value, defaultValue) => {
	let validDefaultValue = +value;

	if (isNaN(validDefaultValue)) {
		validDefaultValue = defaultValue || 0;
	}

	return validDefaultValue;
};
/*
const getValidValue = (value, defaultValue) => {
	let validValue = +value;

	if (isNaN(validValue)) {
		validValue = defaultValue;
	}

	return validValue;
};
*/
export default class NumberInput extends React.Component {
	/* static defaultProps = {
		min: Number.NEGATIVE_INFINITY,
		max: Number.POSITIVE_INFINITY,
	} */

	static propTypes = {
		id: React.PropTypes.string,
		name: React.PropTypes.string,
		value: React.PropTypes.number,
		defaultValue: React.PropTypes.number,
		disabled: React.PropTypes.bool,
		/* min: React.PropTypes.number,
		max: React.PropTypes.number,

		onBlur: React.PropTypes.func,
		onChange: React.PropTypes.func, */
	}
	/*
	constructor(props) {
		super(props);

		this.blurHandler = this.blurHandler.bind(this);
		this.changeHandler = this.changeHandler.bind(this);

		this.oldValue = this.state.value;
	}
	*/
	state = {
		value: getValidDefaultValue(this.props.value, this.props.defaultValue),
	}
	/*
	blurHandler(...props) {
		let newValue = this.state.value;

		if (newValue < this.props.min) {
			newValue = this.props.min;
		}

		if (newValue > this.props.max) {
			newValue = this.props.max;
		}

		if (this.oldValue !== newValue) {
			this.setState({ value: newValue });
			this.oldValue = newValue;

			if (this.props.onChange) {
				this.props.onChange(...props);
			}
		}

		this.props.onBlur(...props);
	}

	changeHandler() {
		const newValue = +this.textField.input.value;

		if (!isNaN(newValue) && this.state.value !== newValue) {
			this.setState({ value: newValue });
		}
	}
	*/
	render() {
		return (
			<div className="lgx-number-field">
				<TextField
					className="lgx-text-field"
					ref={(c) => { this.textField = c; }}

					id={this.props.id}
					name={this.props.name}
					value={this.state.value}
					disabled={this.props.disabled}
				/>
			</div>
		);
	}
}
