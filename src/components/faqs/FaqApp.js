import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';
import './faq.css'
import QHeader from '../QHeader';
import Footer from '../Footer';

function FaqApp() {
  const [faqs, setfaqs] = useState([
    {
      question: 'What is this website?',
      answer: 'This is a QnA Web Application specifically made for NED to help students/employees/other people to know anything about NED on the spot. The answers are given by NEDians. ',
      open: false
    },
    {
      question: 'What is the purpose of this website ?',
      answer: 'To connect other people with NED members to solve their queries and get their answer immediately',
      open: false
    },
    {
      question: 'Who created this website ?',
      answer: 'This Dynamic QnA web app is created by Student of 3rd Year Software Engineering',
      open: false
    },
    {
      question: 'What is the name of the creator of this QnA site?',
      answer: 'Rapid NED Facilitator is created by Wajahat Ahmed - Student of 3rd Year Software Engineering  ',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <>
      <QHeader />
      <div className="App">
        <Header />
        <div className="faqs">
          <h2 className='mx-3 my-2'>Most People Want To Know ...</h2>
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      {/* <Footer /> */}

    </>
  );
}

export default FaqApp;
