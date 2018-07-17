import React, { Component } from 'react';
import fields from '@caldera-labs/components';
import './style.css';

/**
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const Checkboxes = (props) => {
	const {FieldGroup} = fields;
	return(
		<div>
			<div>
				<h2>Checkbox fieldset</h2>
				<FieldGroup
					type={'fieldset'}
					label={'Checkbox group'}
					id={'Checkbox1'}
					options={[
						{
							value: '1',
							label: 'One'
						},
						{
							value: '2',
							label: 'Two'
						}
					]}
				/>

				<FieldGroup
					type={'fieldset'}
					label={'Required Checkbox group'}
					id={'Checkbox2'}
					isRequired={true}
					options={[
						{
							value: '1',
							label: 'One'
						},
						{
							value: '2',
							label: 'Two'
						}
					]}
				/>
			</div>

		</div>
	);
};