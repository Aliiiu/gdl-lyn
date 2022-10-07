import React from 'react';
import Carousel from '../Widgets/CarouselMode/Carousel';

const Testimonies = () => {
	return (
		<div className='flex flex-col w-full'>
			<div className='top flex flex-col items-center'>
				<div className='topic'>
					<h1 className='text-4xl tracking-wider font-bold text-primary md:text-5xl'>
						<span>Why People Love Us </span>
					</h1>
				</div>
				<Carousel />
			</div>
			<div className='bottom'></div>
		</div>
	);
};

export default Testimonies;
