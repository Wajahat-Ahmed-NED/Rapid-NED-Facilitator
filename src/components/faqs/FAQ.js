import React from 'react'
// import QHeader from '../QHeader'
import './faq.css'

function FAQ({ faq, index, toggleFAQ }) {
	return (
		<>

			<div style={{ 'backgroundColor': 'azure' }}
				className={"faq " + (faq.open ? 'open' : '')}
				key={index}
				onClick={() => toggleFAQ(index)}
			>
				<div className="faq-question">
					{faq.question}
				</div>

				<div className="faq-answer" >
					{faq.answer}
				</div>
			</div>
		</>
	)
}

export default FAQ
