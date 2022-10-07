import Image from 'next/image';
import React from 'react';

const Step = (props) => {
	return (
		<div className=' flex flex-col items-start'>
			<Image src={props.src} alt='step1' width={110} objectFit='contain' />
			<span className='text-2xl font-semibold text-white md:text-4xl py-6'>
				{props.name}
			</span>
			<span className='text-lg'>{props.description}</span>
		</div>
	);
};

export default Step;
