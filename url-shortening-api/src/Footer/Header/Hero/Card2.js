import './Hero.css';
import { ReactComponent as MySvg} from '../../../Assets/icon-detailed-records.svg'
const Card2 = () => {
    return (
        <>
        <div className="hero-mini-section2">
            <MySvg className="custom1"/>
            
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your<br></br>
            links. Knowing when and where people engage <br></br>
            with your content helps inform<br></br>
            better decisions.</p>
        </div>
        </>
    );
}
export default Card2;