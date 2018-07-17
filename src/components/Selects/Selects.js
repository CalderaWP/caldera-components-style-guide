import React, { Component } from 'react';
import fields from '@caldera-labs/components';
import './style.css';

/**
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const Selects = (props) => {
	const {FieldGroup} = fields;
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
			/>

			<FieldGroup
				type={'select'}
				label={'Disabled select field'}
				disabled={true}
				id={'select3'}
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
			/>

			<FieldGroup
				type={'select'}
				label={'Select field with error'}
				id={'select4'}
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
				message={{
					error: true,
					message: 'This is an error message'
				}}
			/>

			<FieldGroup
				type={'select'}
				label={'Select field with success message'}
				id={'select6'}
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
				message={{
					error: false,
					message: 'This is good'
				}}
			/>
		</div>
	);
};