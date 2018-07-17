import React, { Component } from 'react';
import fields from '@caldera-labs/components';
import './style.css';

/**
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const MagicSelects = (props) => {
	const {MagicFieldGroup} = fields;
	return(
		<div>
			<h2>MagicSelects</h2>
			<MagicFieldGroup
				type={'select'}
				label={'Magic select field closed'}
				open={false}
				id={'magicSelect1'}
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

			<MagicFieldGroup
				type={'select'}
				label={'Magic select field open'}
				open={open}
				id={'magicSelect2'}
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


		</div>
	);
};