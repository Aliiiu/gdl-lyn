import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from '../CarouselMode/CarouselItem';
// import './style.css';
import blackman from '../../../assets/Images/blackman.png';
import Image from 'next/image';
// import Bounce from "react-reveal/Bounce";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

const GdEarn = () => {
	const [items, setItems] = useState([1, 2, 3]);

	return (
		<div className='GdEarn w-full'>
			<Carousel breakPoints={breakPoints}>
				<Item>
					<Image
						src={blackman}
						alt=''
						width={100}
						height={100}
						className='blackman rounded-full'
					/>
					<p className='Alagbe text-center'>
						Alagbe Olaoluwa - Postgraduate Student
					</p>
					{/* <Bounce bottom cascade> */}
					<p className='text-center text-sm my-5'>
						When I found GDL, I was just considering going abroad to study. I
						started investing my money with them and I have never looked back. I
						was able to liquidate my investment and also achieve my relocation
						dreams with ease. Thank you GDL!
					</p>
					{/* </Bounce> */}
				</Item>
				<Item>
					<Image
						src={blackman}
						alt=''
						width={100}
						height={100}
						className='blackman rounded-full'
					/>
					<p className='Alagbe text-center'>Seyi Asagun - Entrepreneur</p>
					<p className='text-center text-sm my-5'>
						I am glad my money is managed by GDL. The professionalism is
						top-notch. Every day, I go to sleep knowing my money is working for
						me efficiently.
					</p>
				</Item>
				<Item>
					<Image
						src={blackman}
						alt=''
						width={100}
						height={100}
						className='blackman rounded-full'
					/>
					<p className='Alagbe text-center'>
						Alagbe Olaoluwa - Postgraduate Student
					</p>
					<p className='text-center text-sm my-5'>
						When I found GDL, I was just considering going abroad to study. I
						started investing my money with them and I have never looked back. I
						was able to liquidate my investment and also achieve my relocation
						dreams with ease. Thank you GDL!
					</p>
				</Item>
				<Item>
					<Image
						src={blackman}
						alt=''
						width={100}
						height={100}
						className='blackman rounded-full'
					/>
					<p className='Alagbe text-center'>
						Taiwo Oyenuga - Postgraduate Student
					</p>
					<p className='text-center text-sm my-5'>
						When I found GDL, I was just considering going abroad to study. I
						started investing my money with them and I have never looked back. I
						was able to liquidate my investment and also achieve my relocation
						dreams with ease. Thank you GDL!
					</p>
				</Item>
				<Item>
					<Image
						src={blackman}
						alt=''
						width={100}
						height={100}
						className='blackman rounded-full'
					/>
					<p className='Alagbe text-center'>
						Taiwo Oyenuga - Postgraduate Student
					</p>
					<p className='text-center text-sm my-5'>
						When I found GDL, I was just considering going abroad to study. I
						started investing my money with them and I have never looked back. I
						was able to liquidate my investment and also achieve my relocation
						dreams with ease. Thank you GDL!
					</p>
				</Item>
				<Item>
					<Image
						src={blackman}
						alt=''
						width={100}
						height={100}
						className='blackman rounded-full'
					/>
					<p className='Alagbe text-center'>
						Taiwo Oyenuga - Postgraduate Student
					</p>
					<p className='text-center text-sm my-5'>
						When I found GDL, I was just considering going abroad to study. I
						started investing my money with them and I have never looked back. I
						was able to liquidate my investment and also achieve my relocation
						dreams with ease. Thank you GDL!
					</p>
				</Item>
				<Item>
					<Image
						src={blackman}
						alt=''
						width={100}
						height={100}
						className='blackman rounded-full'
					/>
					<p className='Alagbe text-center'>
						Taiwo Oyenuga - Postgraduate Student
					</p>
					<p className='text-center text-sm my-5'>
						When I found GDL, I was just considering going abroad to study. I
						started investing my money with them and I have never looked back. I
						was able to liquidate my investment and also achieve my relocation
						dreams with ease. Thank you GDL!
					</p>
				</Item>
			</Carousel>
		</div>
	);
};

export default GdEarn;
