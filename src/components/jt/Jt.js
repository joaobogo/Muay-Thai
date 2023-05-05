import React,{useState} from 'react';
import { Link } from 'react-scroll';
import './JtStyles.css';
import mainphoto2 from '../../assets/mainphoto2.png'
import mainphoto3 from '../../assets/mainphoto3.png'
import mainphoto4 from '../../assets/mainphoto4.png'

const banners = [
    {
      bgimage: mainphoto2,
    },
    {
      bgimage: mainphoto3,
    },
    {
      bgimage: mainphoto4,
    },
  ];

function Jt() {
    const [index, setIndex] = useState(0);
    


    return (
        <div className='power' name='inicio'>
                  
        </div>
    )
}

export default Jt