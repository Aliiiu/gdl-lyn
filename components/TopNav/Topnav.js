import React, { useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XIcon } from '@heroicons/react/24/outline';
import Slide from 'react-reveal/Slide';
import { Linker } from './topnav.style';
import { AppButton } from '../Widgets/Button/AppButton';
import img from '../../assets/Images/gdl-logo.png';
import Image from 'next/image';
import CustomImage from '../Widgets/CustomImage/CustomImage';

const navigation = [
	{ name: 'Home', href: 'home', current: true },
	{ name: 'About', href: 'about', current: false },
	{ name: 'Products', href: 'our-product', current: false },
	{ name: 'Blog', href: 'blog', current: false },
	{ name: 'FAQs', href: 'faq', current: false },
	{ name: 'Contact', href: 'contact', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Topnav = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [scrolly, setScrolly] = useState(global.window && window.scrollY);

	useEffect(() => {
		window.addEventListener('scroll', (e) => handleNavigation(e));

		return () =>
			window.removeEventListener('scroll', (e) => handleNavigation(e));
	}, [scrolly]);

	const handleNavigation = (e) => {
		const window = e.currentTarget;
		if (scrolly == 0) {
			setIsScrolled(false);
		} else if (scrolly < window.scrollY) {
			setIsScrolled(true);
		}
		setScrolly(window.scrollY);
	};
	return (
		<Disclosure
			as='nav'
			className={`${
				!isScrolled ? '' : 'shadow-md'
			} sticky top-0 z-50 py-5 bg-white`}
		>
			{({ open }) => (
				<>
					<div className='w-4/5 mx-auto px-2 sm:px-6 lg:px-0'>
						<div className='relative flex items-center justify-between h-16'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-center sm:items-center sm:justify-start sm:px-24'>
								<div className='flex-shrink-0 flex items-center'>
									{/* <Image
										className='block lg:hidden h-8 w-auto'
										src={img}
										width={20}
										height={20}
										alt='GDL'
									/> */}
									{/* <Image
										className='w-[20px] h-[20px] lg:w-[70px] lg:h-[70px]'
										src={img}
										objectFit='contain'
										alt='GDL'
									/> */}
									<CustomImage
										src={img}
										className='w-[20px] h-[20px] lg:w-[70px] lg:h-[70px]'
									/>
								</div>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex space-x-4'>
										{navigation.map((item) => (
											<Linker
												key={item.name}
												to={item.href}
												activeClass='active'
												spy={true}
												smooth={true}
												offset={-70}
												duration={1000}
												className={classNames(
													item.current
														? 'text-white link-text'
														: 'text-gray-300',
													'px-3 py-2 rounded-md text-lg font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</Linker>
										))}
									</div>
								</div>
							</div>

							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-24'>
								<Slide right>
									<AppButton
										name='Get Started'
										size='17px'
										className='bg-black px-9 py-3 text-md font-semibold'
									/>
								</Slide>
							</div>
						</div>
					</div>
					<Disclosure.Panel className='sm:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as='a'
									href={item.href}
									className={classNames(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Topnav;
