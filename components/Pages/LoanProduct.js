import React from 'react';
import { AppButton } from '../Widgets/Button/AppButton';
import step from '../../assets/Images/stepicon.png';
import laptop from '../../assets/Images/laptop.png';
import phone from '../../assets/Images/phone.png';
import Zoom from 'react-reveal/Zoom';
import Image from 'next/image';

const LoanProduct = () => {
	return (
		<div className='flex flex-col items-center'>
			<div className='top flex flex-col items-center'>
				<div className='topic'>
					<h1 className='text-4xl tracking-wider font-bold text-primary md:text-5xl'>
						<span>Our Products</span>
					</h1>
				</div>
				<div className='sub-topic py-7 pb-1'>
					<span>
						<p className='font-semibold text-info text-xl leading-relaxed text-center'>
							Your Financial Goals Are Our Priority. We Are Committed To
							Building Your <br /> Wealth With Different Investment Options, All
							Tailored To Suit You.
							{/* We are committed to building your wealth with different investment
              <br />
              options, all tailored to suit YOU. */}
						</p>
					</span>
				</div>
			</div>
			<div className='grid grid-cols-2 bg-gray-100 rounded-2xl w-full p-10 pr-0 mt-14 items-center'>
				<div className='flex flex-col items-start'>
					<Image src={step} alt='ball' width={110} objectFit='contain' />
					<div className='pt-6'>
						<h1 className='text-3xl tracking-wider font-bold text-black md:text-4xl'>
							<span>
								{/* Faster access to <br />
                loan service */}
								Products
							</span>
						</h1>
					</div>
					<div className='pt-6'>
						<span>
							<Zoom right cascade>
								<p className='font-normal text-black text-xl leading-relaxed'>
									{/* Your Financial Goals Are Our Priority. We Are Committed To
                Building Your Wealth With Different Investment Options, All
                Tailored To Suit You. */}
									Invest in Mutual Funds, Bonds, Treasury Bills and Stocks like
									never before.
								</p>
							</Zoom>
						</span>
					</div>
					<div className='pt-10'>
						<AppButton
							name='Get Started'
							size='20px'
							className='flex bg-black px-12 py-4 font-semibold'
						/>
					</div>
				</div>
				<div>
					<Zoom>
						<div className='flex justify-end'>
							<Image src={laptop} objectFit='contain' alt='' />
						</div>
					</Zoom>
				</div>
			</div>
			<div className='grid grid-cols-2 bg-gray-100 rounded-2xl w-full p-10 pb-0 mt-14 items-center'>
				<Zoom>
					<div className='flex justify-center'>
						<Image src={phone} objectFit='contain' alt='' />
					</div>
				</Zoom>
				<div className='flex flex-col items-start'>
					<Image src={step} alt='ball' width={110} objectFit='contain' />
					<div className='pt-6'>
						<h1 className='text-3xl tracking-wider font-bold text-black md:text-4xl'>
							<span>
								Faster access to <br />
								loan service
							</span>
						</h1>
					</div>
					<div className='pt-6'>
						<span>
							<Zoom right cascade>
								<p className='font-normal text-black text-xl leading-relaxed'>
									Your Financial Goals Are Our Priority. We Are Committed To
									Building Your Wealth With Different Investment Options, All
									Tailored To Suit You.
								</p>
							</Zoom>
						</span>
					</div>
					<div className='pt-10'>
						<AppButton
							name='Get Started'
							size='20px'
							className='flex bg-black px-12 py-4 font-semibold'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoanProduct;
