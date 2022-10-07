import React from 'react';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from './accordion.style';
import Typography from '@mui/material/Typography';

const AppAccordion = (props) => {
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<div>
			<Accordion
				expanded={expanded === props.panel}
				onChange={handleChange(props.panel)}
			>
				<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
					<h4 className='text-sm sm:text-base'>{props.question}</h4>
				</AccordionSummary>
				<AccordionDetails>
					<p className='text-xs sm:text-base'>{props.answer}</p>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default AppAccordion;
