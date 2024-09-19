import Card2 from './Card2';
import './Hero.css';
import Card3 from './Card3';

import { ReactComponent as MySvg }  from '../Assets/icon-brand-recognition.svg';

const Card = () => {
    return(
        <>
        <div className='hero-align'>
            <div className="hero-mini-section1">
                <MySvg className='custom1' />
                            
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with<br></br>
                each link. Generic links don't mean a<br></br>
                thing. Branded links help instil<br></br>
                confidence in your content.
                </p>
            </div>
        <Card2 />
        <Card3 />
        </div>


        </>
    );
}
export default Card;