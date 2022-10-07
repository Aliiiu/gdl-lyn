import React from 'react';
import { AppButton } from '../Widgets/Button/AppButton';
import { Container, CardDiv } from './page.style';
import playstore from '../../assets/Images/PlayStore.png';
import appstore from '../../assets/Images/AppStore.png';
import { IoChevronForward } from 'react-icons/io5';
import Card from '../Widgets/Card/Card';
import { StoreButton, Content } from '../Widgets/Button/StoreButton';
import PlayStore from '../../assets/Images/google.png';
import AppStore from '../../assets/Images/apple.png';
import Flash from 'react-reveal/Flash';

const Product = () => {
	return (
		<div className='flex md:py-5 md:flex-row flex-col'>
			<div className='info md:flex-1 px-6 py-10 flex flex-col'>
				<div className='topic'>
					<h1 className='text-4xl tracking-wider font-semibold text-primary md:text-5xl'>
						<span className='block xl:inline'>Our Product</span>
					</h1>
				</div>
				<div className='py-5 pb-1'>
					<span>
						<p className='text-info font-medium text-lg leading-relaxed'>
							Your Financial Goals Are Our Priority. We Are Committed <br /> To
							Building Your Wealth With Different Investment Options,
							<br /> All Tailored To Suit You.
							{/* We are committed to building your wealth with different investment
              options, all tailored to suit YOU. */}
						</p>
					</span>
				</div>
				<Container
					bg='#FFF1F3'
					className='px-10 py-20 rounded-3xl rounded-br-none my-10'
				>
					<div className='w-3/4'>
						<span className='text-2xl font-semibold text-black md:text-4xl'>
							Borrow money in <br />
							Minutes
						</span>
					</div>
					<div className='py-6'>
						<span>
							<p className='leading-relaxed text-lg'>
								Get Instant Loans in Minutes. Minimum Requirements,
								<br /> No Collateral, Just the Sound of Your Credit Alert..
							</p>
						</span>
					</div>
					<div className='py-6'>
						<AppButton
							name='Get it Now'
							size='20px'
							className='bg-black px-12 py-4 font-semibold'
						/>
					</div>
				</Container>
				<div className='py-4'>
					<span>
						<p className='font-semibold text-info text-xl leading-relaxed'>
							Your Financial Goals Are Our Priority. We Are Committed <br /> To
							Building Your Wealth With Different Investment Options,
							<br /> All Tailored To Suit You.
						</p>
					</span>
				</div>
				<div className='flex flex-col md:flex-row sm:flex-row justify-start items-center gap-6 py-7 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
					<StoreButton
						className='px-7 py-3'
						name={<Content type='PlayStore' img={PlayStore} />}
					/>
					<StoreButton
						className='px-7 py-3'
						name={<Content type='AppStore' img={AppStore} />}
					/>
				</div>
			</div>
			<div className='flex-1 px-0'>
				<Container className='rounded-3xl my-7'>
					<div className='flex justify-center items-center py-8 pt-14'>
						<span className='text-2xl text-center tracking-wide font-bold text-white md:text-4xl'>
							Investment at <br />
							your fingertips
						</span>
					</div>
					<div className='py-5 flex justify-center items-center'>
						<AppButton
							name='Start Investing'
							size='20px'
							className='flex bg-gray-400 px-5 py-3 gap-4 font-semibold flex-row-reverse'
							icon={<IoChevronForward />}
						/>
					</div>
					<CardDiv>
						<div className='grid md:grid-cols-12 gap-4 my-8 mb-0'>
							<div className='md:col-start-1 md:col-end-5'>
								<Flash>
									<Card title='Dollar' bg_color='#D28B55' />
								</Flash>
							</div>
							<div className='col-start-5 col-end-9'>
								<Flash>
									<Card
										title='High Yield Note'
										sub_title='High Interest Rate'
										bg_color='#992333'
									/>
								</Flash>
							</div>
							<div className='col-start-9 col-end-13'>
								<Flash>
									<Card
										title='Money Market Fund'
										sub_title='Cruise your way to freedom'
										bg_color='#47926D'
									/>
								</Flash>
							</div>
							<div className='col-start-3 col-end-7'>
								<Flash>
									<Card
										title='GDL X Obiwezy'
										sub_title="Don't do it alone"
										bg_color='#9B6ECC'
									/>
								</Flash>
							</div>
							<div className='col-start-7 col-end-11'>
								<Flash>
									<Card title='Dollar Note Investment' bg_color='#C14A85' />
								</Flash>
							</div>
							<div className='col-start-1 col-end-5'>
								<Flash>
									<Card title='Dollar' bg_color='#D28B55' />
								</Flash>
							</div>
							<div className='col-start-5 col-end-9'>
								<Flash>
									<Card
										title='High Yield Note'
										sub_title='High Interest Rate'
										bg_color='#992333'
									/>
								</Flash>
							</div>
							<div className='col-start-9 col-end-13'>
								<Flash>
									<Card
										title='Money Market Fund'
										sub_title='Cruise your way to freedom'
										bg_color='#47926D'
									/>
								</Flash>
							</div>
						</div>
					</CardDiv>
				</Container>
				<Container
					height='35em'
					bg='#FFF1F3'
					className='rounded-3xl my-6 px-14'
				>
					<div className='flex items-center py-1 pt-14'>
						<span className='text-2xl text-center tracking-wide font-bold text-black md:text-4xl'>
							Money Market Fund
						</span>
					</div>
					<div className='py-7'>
						<span>
							<p className='leading-relaxed text-lg'>
								Cruise your way to financial freedom with as <br /> little as
								N10,000.
							</p>
						</span>
					</div>
					<div className='py-5 flex items-center'>
						<AppButton
							name='Get Started'
							size='20px'
							className='flex bg-black px-12 py-3 gap-4 font-semibold'
						/>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Product;
