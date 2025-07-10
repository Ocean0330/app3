import axios from 'axios'

axios.post('/login',)
    .then(function (response:any) {
        console.log(response);
    })
    .catch(function (error:any) {
        console.error('Error during login:', error);
        console.log('再次检查你的输入.',error);})

export default axios
