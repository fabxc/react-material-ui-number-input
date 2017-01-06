import React from 'react';
import TextField from 'material-ui/TextField';

const getValidDefaultValue = (value, defaultValue) => {
	let validDefaultValue = +value;

	if (isNaN(validDefaultValue)) {
		validDefaultValue = defaultValue || '';
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
	static defaultProps = {
		min: Number.NEGATIVE_INFINITY,
		/* max: Number.POSITIVE_INFINITY, */

		onChange: () => {},
	}

	static propTypes = {
		id: React.PropTypes.string,
		name: React.PropTypes.string,
		value: React.PropTypes.number,
		defaultValue: React.PropTypes.number,
		disabled: React.PropTypes.bool,
		floatingLabelText: React.PropTypes.string,
		min: React.PropTypes.number,
		/* max: React.PropTypes.number,

		onBlur: React.PropTypes.func,  */
		onChange: React.PropTypes.func,
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
	blurHandler = () => {
		let newValue = this.state.value;

		if (newValue < this.props.min) {
			newValue = this.props.min;
			this.setState({ value: newValue });
		}
		/* if (newValue > this.props.max) {
			newValue = this.props.max;
		}

		if (this.oldValue !== newValue) {
			this.setState({ value: newValue });
			this.oldValue = newValue;

			if (this.props.onChange) {
				this.props.onChange(...props);
			}
		}

		this.props.onBlur(...props); */
	}
	changeHandler = (e) => {
		const newValue = +e.target.value;
		if (!isNaN(newValue)) {
			this.setState({ value: newValue });
			this.props.onChange(e);
		}
	}
	render() {
		return (
			<div className="lgx-number-field">
				<TextField
					className="lgx-text-field"

					id={this.props.id}
					name={this.props.name}
					value={this.state.value}
					disabled={this.props.disabled}
					floatingLabelText={this.props.floatingLabelText}

					onChange={this.changeHandler}
					onBlur={this.blurHandler}
				/>
			</div>
		);
	}
}
