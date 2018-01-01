import 'babel-polyfill';
import './styles/armed.css';
import swal from 'sweetalert2'
import 'amplitudejs';
import * as armed from './scripts/armed';

console.log('imported: ', armed);

const alert = document.getElementById('alert-1');
alert.addEventListener('click', swal(
    'Good job!',
    'You clicked the button!',
    'success'
));