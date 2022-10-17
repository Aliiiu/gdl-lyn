import { AppButton } from "../Button/AppButton";

export const Content = props => (
  <div className={`flex flex-col ${props.className}`}>
    {!props.no_gen && (
      <div className={props.className}>
        <span className="text-xl font-normal">GENERAL</span>
      </div>
    )}
    <div className={`py-5 ${props.className}`}>
      <h1 className="text-2xl tracking-wider font-semibold md:text-4xl">
        <span>{props.topic}</span>
      </h1>
    </div>
    <div className={`py-0 ${props.className}`}>
      <span>
        <p className="font-normal text-sm lg:text-base leading-relaxed">
          {props.sub_topic}
        </p>
      </span>
    </div>
    {props.isDate && (
      <div className="pt-16 pb-5">
        <span className="text-xl font-normal">APR 10, 2021 / 2MINS READ</span>
      </div>
    )}
    {props.is_btn && (
      <div className="pt-6 lg:pt-10">
        {/* <AppButton
					name='Get Started'
					size='20px'
					className='bg-black px-12 py-4 font-semibold'
				/> */}
        <AppButton
          name="Sign Up Now"
          className="bg-black px-6 py-3 lg:px-10 lg:py-4 text-md font-semibold"
        />
      </div>
    )}
  </div>
);
