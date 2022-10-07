import React from 'react';
import { StartContainer } from './page.style';
import { AppButton } from '../Widgets/Button/AppButton';
import { IoChevronForward } from 'react-icons/io5';
import { Container, CardDiv } from './page.style';
import { Content } from '../Widgets/Blog/BlogContent';
import { Zoom, Slide } from 'react-reveal';
// import Flash from "react-reveal/Flash";

const Blog = () => {
	return (
		<StartContainer
			padding='5em 0'
			className='text-white flex flex-col gap-4 md:py-5'
		>
			<div className='topper md:px-6 w-full flex flex-col'>
				<div className='topic'>
					<h1 className='text-4xl tracking-wider font-bold text-white md:text-5xl'>
						<span>Blog</span>
					</h1>
				</div>
				<div className='flex justify-between'>
					<div className='py-7 pb-1'>
						<span>
							<p className='font-medium text-white text-lg leading-relaxed'>
								Everything You Need To know About Finance And <br /> Investment
								In Nigeria.
							</p>
						</span>
					</div>
					<div className='py-5 flex justify-center items-center'>
						<AppButton
							name='Read On'
							size='20px'
							className='flex bg-gray-400 opacity-50 px-5 py-4 gap-4 font-semibold flex-row-reverse'
							icon={<IoChevronForward size={30} />}
						/>
					</div>
				</div>
			</div>
			<div className='px-6 grid grid-cols-12 md:gap-10 pt-5'>
				<Zoom>
					<div className='col-start-1 col-end-13 rounded-3xl'>
						<Container bg='#8D2733' height='10em' className='p-10 rounded-3xl'>
							{/* <Flash> */}
							<Content
								isDate
								topic='GDL Gives Back to Society'
								className='text-white'
								sub_topic={
									<>
										As an organization, Growth and Development Group Limited has
										always
										<br />
										been committed to developing the society. This has always
										been one of
										<br />
										the major goals of the company since it establishment
									</>
								}
							/>
							{/* </Flash> */}
						</Container>
					</div>
				</Zoom>
				<div className='col-start-1 col-end-7 rounded-3xl'>
					<div>
						<Slide left>
							<Container
								bg='#FFF1F3'
								height='10em'
								className='p-10 rounded-3xl'
							>
								{/* <Flash> */}
								<Content
									topic='7 Effective Ways to Avoid Unnecessary Debt like a Plague'
									className='text-black'
									sub_topic={
										<>
											{' '}
											Debt is anything, can be money, services or <br /> even
											favours that one person or...
										</>
									}
								/>
								{/* </Flash> */}
							</Container>
						</Slide>
					</div>
				</div>
				<div className='col-start-7 col-end-13 rounded-3xl'>
					<div>
						<Slide right>
							<Container height='10em' className='p-10 rounded-3xl'>
								{/* <Flash> */}
								<Content
									no_gen
									className='items-center text-center'
									topic={
										<>
											GDL InveStory: <br /> Episode One
										</>
									}
									sub_topic={
										<>
											{' '}
											Debt is anything, can be money, services or <br /> even
											favours that one person or...
											<br />
											<br />
											Debt is anything, can be money, services or <br />{' '}
										</>
									}
								/>
								{/* </Flash> */}
							</Container>
						</Slide>
					</div>
				</div>
			</div>
		</StartContainer>
	);
};

export default Blog;
