import '../css/Social.css';

import linkedin from '../images/social/linkedin.png';
import github from '../images/social/github.png';
import stack from '../images/social/stack.png';
import medium from '../images/social/medium.png';



function Social() {

    const openLink = (link) => {
        window.open(link)
    }
    return (

        <div class="btn-group btn-group-sm" role="group" aria-label="Social">
            <button type="button" onClick={() => openLink('https://www.linkedin.com/in/rotem-nevgauker-73622037/')} className='btn-social'>
                <img className='btn-mg' src={linkedin} alt='linkedin'></img>
            </button>
            <button type="button" onClick={() => openLink('https://github.com/nevgauker')} className='btn-social'>
                <img className='img-fluid' src={github} alt='github'></img>
            </button>
            <button type="button" onClick={() => openLink('https://stackoverflow.com/users/3400918/nevgauker')} className='btn-social'>
                <img src={stack} className='img-fluid' alt='stack overflow'></img>
            </button>
            <button type="button" onClick={() => openLink('https://medium.com/@rotemnevgauker')} className='btn-social'>
                <img src={medium} className='img-fluid' alt='medium'></img>
            </button>
        </div>
    );
}

export default Social;
