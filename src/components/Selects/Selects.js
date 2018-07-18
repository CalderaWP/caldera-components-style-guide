import React from 'react';
import fields from '@caldera-labs/components';
import './style.css';

/**
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const Selects = () => {
	const FieldGroup = fields.fields.FieldGroup;
	const genericHandler = () => {};
	return(
		<div>
			<h2>Selects</h2>
			<FieldGroup
				type={'select'}
				label={'Basics select field'}
				isRequired={false}
				id={'select1'}
				options={[
					{
						value: 1,
						label: 'One'
					},
					{
						value: 2,
						label: 'Two'
					}
				]}
				onValueChange={genericHandler}
			/>

			<FieldGroup
				type={'select'}
				label={'Required select field'}
				isRequired={true}
				id={'select2'}
				options={[
					{
						value: 1,
						label: 'One'
					},
					{
						value: 2,
						label: 'Two'
					}
				]}
				onValueChange={genericHandler}

			/>

		</div>
	);
};