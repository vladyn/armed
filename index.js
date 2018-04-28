import 'babel-polyfill';
import './styles/armed.css';
import swal from 'sweetalert2'
import 'amplitudejs';
import armed from './scripts/armed';

console.log('imported: ', armed);

const alert = document.getElementById('alert-1');

alert.addEventListener('click', () => {
    swal(
    'Good job!',
    'All tracks has been paused.',
    'success');
    for(let track in armed) {
        console.log(armed[track].hasOwnProperty(paused));
        armed[track].pause();
    }
}, false);