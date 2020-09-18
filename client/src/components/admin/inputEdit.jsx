import React from 'react';

const InputEdit = (props) => {
	console.log('these are tableBody props:', props);

	const valueFunc = (item) => {
		const question = props;
		return `props.question.${item}`;
	};

	return (
		<div>
			{props.inputs.map((item) => (
				<div>
					<label for={item}>{item}</label>
					<input
						type="text"
						name={item}
						id={item}
						required
						value={valueFunc(item)}
					></input>
				</div>
			))}
		</div>
	);
};

export default InputEdit;
