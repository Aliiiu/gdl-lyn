import React from 'react';
import { StartContainer } from './page.style';
import { AppButton } from '../Widgets/Button/AppButton';
import { IoChevronForward } from 'react-icons/io5';
import step from '../../assets/Images/stepicon.png';
import Step from '../Widgets/Card/Step';
import Jello from 'react-reveal/Jello';

const GetStarted = () => {
	return (
		<StartContainer
			padding='5em 0'
			className='text-white flex flex-col gap-4 md:py-5'
		>
			<div className='topper md:px-6 w-full flex flex-col'>
				<div className='topic'>
					<h1 className='text-4xl tracking-wider font-bold text-white md:text-5xl'>
						<span>
							Get Started <br /> In 3 Easy Steps
						</span>
					</h1>
				</div>
				<div className='flex justify-between'>
					<div className='py-7 pb-1 flex-1'>
						<span>
							<p className='font-normal text-white text-lg leading-relaxed'>
								Begin Your Journey To Financial Freedom. Make Your <br /> Money
								Work For You.
							</p>
						</span>
					</div>
					<div className='py-5 flex justify-center items-center flex-1'>
						<Jello>
							<AppButton
								name='Start Investing'
								size='20px'
								className='flex bg-gray-400 md:px-5 py-4 gap-4 font-semibold flex-row-reverse'
								icon={<IoChevronForward size={30} />}
							/>
						</Jello>
					</div>
				</div>
			</div>
			<div className='px-6 py-16 justify-between w-full flex items-center'>
				<div className='grid md:grid-cols-3 md:gap-24 w-full '>
					<Step
						src={step}
						name='Register'
						description={
							<>
								Create an account with <br /> your personal details
							</>
						}
					/>
					<Step
						src={step}
						name='Invest'
						description={
							<>
								Set up your first Investment plan and fund
								<br /> via debit card, bank transfer or USSD
							</>
						}
					/>
					<Step
						src={step}
						name='Make Profit'
						description={
							<>
								Earn great returns on
								<br /> your money.
							</>
						}
					/>
				</div>
			</div>
		</StartContainer>
	);
};

export default GetStarted;
