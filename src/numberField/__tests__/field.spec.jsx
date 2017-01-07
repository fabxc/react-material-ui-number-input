import React from 'react';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import spies from 'chai-spies';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NumberField from 'numberField';
import TextField from 'material-ui/TextField';

chai.use(spies);
chai.use(chaiEnzyme());
const muiTheme = getMuiTheme();
const contextProps = {
	context: { muiTheme },
	childContextTypes: { muiTheme: React.PropTypes.object },
};
const propValues = {
	id: 'id',
	name: 'component',
	className: 'component-class',
	value: 100,
	defaultValue: 60,
	disabled: false,
	floatingLabelText: 'floatingLabelText',

	min: 50,
	max: 150,
};


const getFullComponent = (() => {
	const component = mount(
		<NumberField
			id={propValues.id}
			name={propValues.name}
			className={propValues.className}
			value={propValues.value}
			defaultValue={propValues.defaultValue}
			disabled={propValues.disabled}
			floatingLabelText={propValues.floatingLabelText}

			min={propValues.min}
			max={propValues.max}
		/>,
		contextProps,
	);
	return () => component;
})();

const getSimpleComponent = (() => {
	const component = mount(<NumberField id={propValues.id} />, contextProps);
	return () => component;
})();

describe('<NumberField />', () => {
	describe('Check render', () => {
		it('should render self', () => {
			expect(getSimpleComponent()).to.have.className('lgx-number-field');
		});
		it('should render TextField', () => {
			expect(getSimpleComponent().find(TextField).first()).to.have.className('lgx-text-field');
		});
	});
	describe('Check native Mui props', () => {
		it('shoud given id prop', () => {
			expect(getFullComponent().find(TextField).first()).to.have.prop('id', propValues.id);
		});
		it('shoud given name prop', () => {
			expect(getFullComponent().find(TextField).first()).to.have.prop('name', propValues.name);
		});
		it('shoud given value prop', () => {
			expect(getFullComponent().find(TextField).first()).to.have.prop('value', propValues.value);
			expect(getFullComponent()).to.have.state('value', propValues.value);
		});
		it('shoud given prop as emty string when not getting value', () => {
			expect(getSimpleComponent()).to.have.state('value', '');
		});
		it('shoud given className prop', () => {
			expect(getFullComponent()).to.have.prop('className', propValues.className);
		});
		it('shoud given defaultValue prop', () => {
			expect(getFullComponent()).to.have.prop('defaultValue', propValues.defaultValue);
		});
		it('shoud given value equal default value at not getting value', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					defaultValue={propValues.defaultValue}
				/>,
				contextProps,
			);
			expect(component).to.have.state('value', propValues.defaultValue);
		});
		it('shoud given disabled prop', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					disabled={!propValues.disabled}
				/>,
				contextProps,
			);
			expect(component.find(TextField).first()).to.have.prop('disabled', !propValues.disabled);
		});
		it('shoud given default value of disabled prop at not getting disabled prop', () => {
			expect(getSimpleComponent().find(TextField).first()).to.have.prop('disabled', propValues.disabled);
		});
		it('shoud given floatingLabelText prop', () => {
			expect(getFullComponent().find(TextField).first()).to.have.prop('floatingLabelText', propValues.floatingLabelText);
		});
	});
	describe('Check handlers props', () => {
		it('shoud calling onChange handler', () => {
			const changeHandler = chai.spy();
			const component = mount(
				<NumberField
					id={propValues.id}
					onChange={changeHandler}
				/>,
				contextProps,
			);
			const input = component.find('input').first();
			input.simulate('change');
			expect(changeHandler).to.have.been.called.once();
		});
		it('shoud given event object to handler when calling onChange handler', () => {
			const changeHandler = chai.spy((e) => {
				expect(e).to.be.an('object');
			});
			const component = mount(
				<NumberField
					id={propValues.id}
					onChange={changeHandler}
				/>,
				contextProps,
			);
			const input = component.find('input').first();
			input.simulate('change');
		});
		it('shoud calling onBlur handler', () => {
			const blurHandler = chai.spy();
			const component = mount(
				<NumberField
					id={propValues.id}
					onBlur={blurHandler}
				/>,
				contextProps,
			);
			const input = component.find('input').first();
			input.simulate('blur');
			expect(blurHandler).to.have.been.called.once();
		});
		it('shoud given event object to handler when calling onBlur handler', () => {
			const blurHandler = chai.spy((e) => {
				expect(e).to.be.an('object');
			});
			const component = mount(
				<NumberField
					id={propValues.id}
					onBlur={blurHandler}
				/>,
				contextProps,
			);
			const input = component.find('input').first();
			input.simulate('blur');
		});
		it('shoud calling onFocus handler', () => {
			const focusHandler = chai.spy();
			const component = mount(
				<NumberField
					id={propValues.id}
					onFocus={focusHandler}
				/>,
				contextProps,
			);
			const input = component.find('input').first();
			input.simulate('focus');
			expect(focusHandler).to.have.been.called.once();
		});
		it('shoud given event object to handler when calling onFocus handler', () => {
			const focusHandler = chai.spy((e) => {
				expect(e).to.be.an('object');
			});
			const component = mount(
				<NumberField
					id={propValues.id}
					onFocus={focusHandler}
				/>,
				contextProps,
			);
			const input = component.find('input').first();
			input.simulate('focus');
		});
	});
	describe('Check custom props', () => {
		/* min prop */
		it('shoud given min prop', () => {
			expect(getFullComponent()).to.have.prop('min', propValues.min);
		});
		it('shoud default min prop is NEGATIVE_INFINITY', () => {
			expect(getSimpleComponent()).to.have.prop('min', Number.NEGATIVE_INFINITY);
		});
		it('shoud correct value if it lower min at blur input', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					value={100}
					min={50}
				/>,
				contextProps,
			);
			const input = component.find('input').first();
			input.simulate('change', { target: { value: '1' } });
			expect(component).to.have.state('value', 1);
			input.simulate('blur');
			expect(component).to.have.state('value', 50);
		});
		it('shoud ignore value prop if it lower min and setting value equal default value', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					value={10}
					defaultValue={100}
					min={50}
				/>,
				contextProps,
			);
			expect(component).to.have.state('value', 100);
		});
		it('shoud ignore defaultValue prop if it lower min and setting defaultValue equal min', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					defaultValue={10}
					min={50}
				/>,
				contextProps,
			);
			expect(component).to.have.state('defaultValue', 50);
		});
		it('shoud given value state equal min if it and defaultValue no getting and min prop larger then zero', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					min={50}
				/>,
				contextProps,
			);
			expect(component).to.have.state('value', 50);
		});
		it('shoud given value state equal emty string if it and defaultValue no getting and min prop lower then zero', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					min={-10}
				/>,
				contextProps,
			);
			expect(component).to.have.state('value', '');
		});
		/* max prop */
		it('shoud given max prop', () => {
			expect(getFullComponent()).to.have.prop('max', propValues.max);
		});
		it('shoud default max prop is POSITIVE_INFINITY', () => {
			expect(getSimpleComponent()).to.have.prop('max', Number.POSITIVE_INFINITY);
		});
		it('shoud correct value if it larger max at blur input', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					value={10}
					max={50}
				/>,
				contextProps,
			);
			const input = component.find('input').first();
			input.simulate('change', { target: { value: '100' } });
			expect(component).to.have.state('value', 100);
			input.simulate('blur');
			expect(component).to.have.state('value', 50);
		});
		it('shoud ignore value prop if it larger min and setting value equal default value', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					value={150}
					defaultValue={50}
					max={100}
				/>,
				contextProps,
			);
			expect(component).to.have.state('value', 50);
		});
		it('shoud ignore defaultValue prop if it larger max and setting defaultValue equal max', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					defaultValue={100}
					max={50}
				/>,
				contextProps,
			);
			expect(component).to.have.state('defaultValue', 50);
		});
		it('shoud given value state equal max if it and defaultValue no getting and max prop lower then zero', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					max={-50}
				/>,
				contextProps,
			);
			expect(component).to.have.state('value', -50);
		});
		it('shoud given value state equal emty string if it and defaultValue no getting and max prop larger then zero', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					max={10}
				/>,
				contextProps,
			);
			expect(component).to.have.state('value', '');
		});
	});
	describe('Check behavior of field', () => {
		it('shoud printingable field', () => {
			const input = getSimpleComponent().find('input').first();
			input.simulate('change', { target: { value: '1' } });
			expect(getSimpleComponent()).to.have.state('value', 1);
		});
		it('shoud only printingable numeric symbols', () => {
			const input = getSimpleComponent().find('input').first();
			input.simulate('change', { target: { value: '1' } });
			input.simulate('change', { target: { value: 's' } });
			expect(getSimpleComponent()).to.have.state('value', 1);
		});
	});
});
