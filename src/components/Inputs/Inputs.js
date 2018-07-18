import React from 'react';
import fields from '@caldera-labs/components';
import './style.css';

/**
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const Inputs = (props) => {
	const FieldGroup = fields.fields.FieldGroup;
	const genericHandler = () => {};
	return(
		<div>
			<h2>Inputs</h2>
			<FieldGroup
				id={'control-22'}
				label={'Required Text input'}
				type={'input'}
				isRequired={true}
				onValueChange={genericHandler}
			/>

			<FieldGroup
				id={'control-23'}
				label={'Non Required Text input'}
				type={'input'}
				isRequired={false}
				onValueChange={genericHandler}

			/>

			<FieldGroup
				id={'control-24'}
				label={'Required Input With Help Text'}
				type={'input'}
				isRequired={true}
				help={'Adding help text sets aria-describedby'}
				onValueChange={genericHandler}

			/>

			<FieldGroup
				id={'control-25'}
				label={'Non Required Numeric input'}
				type={'input'}
				innertype={'number'}
				isRequired={false}
				onValueChange={genericHandler}

			/>

			<FieldGroup
				id={'control-26'}
				label={'Non Required input disabled with error'}
				type={'input'}
				innertype={'text'}
				isRequired={true}
				message={{
					message:'Failures happened',
					error: true
				}}
				disabled={true}
				onValueChange={genericHandler}

			/>

			<FieldGroup
				id={'control-27'}
				label={'Non Required input with non-error message'}
				type={'input'}
				innertype={'text'}
				isRequired={true}
				message={{
					message:'Failures did not happened',
					error: false
				}}
				onValueChange={genericHandler}
			/>

		</div>
	);
};