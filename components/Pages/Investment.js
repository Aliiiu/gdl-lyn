import React from 'react';
import { DiagonalBox, StartContainer, ContentBox } from './page.style';
import { AppButton } from '../Widgets/Button/AppButton';
import { IoChevronForward } from 'react-icons/io5';
import InvestCard from '../../assets/Images/investcard.png';

const InnerBox = (props) => (
	<ContentBox {...props} className='flex p-5 rounded-2xl'>
		<div className='round-box'>
			<span className='text-white font-bold'>{props.init}</span>
		</div>
		<div className='px-5 flex flex-col'>
			<div className='header mb-10'>
				<span className='text-4xl font-bold text-white'>Money Market Fund</span>
			</div>
			<div className='body w-4/5 leading-10'>
				<span className='text-2xl text-white'>
					Cruise your way to financial freedom
				</span>
			</div>
		</div>
	</ContentBox>
);

const Investment = () => {
	return (
		<StartContainer
			bg='#333333'
			padding='5em 0 0'
			inline_padding='1em'
			className='flex flex-col items-center'
		>
			<div className='top flex flex-col items-center'>
				<div className='topic'>
					<h1 className='text-4xl tracking-wider font-bold text-red-700 md:text-5xl'>
						<span>
							Over 250+ <span className='text-white'>Product & Investment</span>
						</span>
					</h1>
				</div>
				<div className='sub-topic py-7 pb-1'>
					<span>
						<p className='text-white font-medium text-xl leading-relaxed text-center'>
							Your Financial Goals Are Our Priority. We Are Committed To
							Building Your <br /> Wealth With Different Investment Options, All
							Tailored To Suit You.
						</p>
					</span>
				</div>
				<div className='pt-14'>
					<AppButton
						name='Start Investing'
						size='20px'
						className='flex bg-gray-400 opacity-50 px-5 py-4 gap-4 font-semibold flex-row-reverse'
						icon={<IoChevronForward size={30} />}
					/>
				</div>
			</div>

			<DiagonalBox className='bottom flex'>
				<div className='content'>
					<div className='grid grid-cols-4 gap-4'>
						<InnerBox init='MMF' bg_color='#992333' />
						<InnerBox init='DCF' bg_color='#47926D' />
						<InnerBox init='MMF' bg_color='#D28B55' />
						<InnerBox init='S' bg_color='#9B6ECC' />
						<InnerBox init='HYN' bg_color='#9B6ECC' />
						<InnerBox init='DCF' bg_color='#C14A85' />
						<InnerBox init='LTN' bg_color='#747EF6' />
						<InnerBox init='GIF' bg_color='#C14A85' />
					</div>
				</div>
			</DiagonalBox>
		</StartContainer>
	);
};

export default Investment;
