import {useState} from "react";
import './quotes.scss'
import CustomButton from "../custom-button/custom-button2";
const Quote = () => {

    const quotes = {
        0: {
            persona: 'Idan Yaffe, Senior DEVOPS Engineer, TSM @CXONE',
            quote: `"Cloud Guru's courses are the best, I highly recommend for everyone how wants to have a deep understanding of how things work"`
        },
        1: {
            persona: 'Steve Rogers, Devops Engineer @MCR',
            quote: `"Linkedin Learning provides some good matarial, I recommend on the course pipelines and what's in between by Johny cash"`
        },
        2: {
            persona: 'Natasha Romanoff, Expert SW Engineer @GS',
            quote: `"The course 'understaning jenkins in depth' has really changed the way I understand and implemented our entire task management process"`
        },
        3: {
            persona: 'Wanda Maximoff, FE Engineer @WFO',
            quote: `"Mastering Git by paolo cuelo is a must see course for anyone who is using GIT as the VCS"`
        }
    }
    const [current, setCurrent] = useState(quotes[0]);
    const [active, setActive] = useState(0);

    const handleSetClick = event => {
        setCurrent(quotes[event.target.getAttribute('data-quote')])
        setActive(event.target.getAttribute('data-quote'))
    };

    return (
        <div className='quote-container'>
            <h1 style={{color:'white'}}>IN-HOUSE RECOMMENDATIONS</h1>
            <p className='quote'>{current.quote}</p>
            <p className='quote'>{current.persona}</p>
            <div className='nav-container'>
                {Object.keys(quotes).map((index) => (
                    <span onClick={event => handleSetClick(event)}
                          data-quote={index}
                          key={index}>

                    </span>
                ))}
            </div>
            <div className='margin-up'>
                <CustomButton>Add Recommendation</CustomButton>
            </div>
        </div>
    )
}

export default Quote;