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
		it('shoud correct given value prop that contains no numeric symbols', () => {
			const component = mount(
				<NumberField
					id={propValues.id}
					value="no numeric symbols"
				/>,
				contextProps,
			);
			expect(component).to.have.state('value', 0);
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
	});
});
