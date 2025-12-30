import http from 'k6/http';
import { sleep } from 'k6';
import { obterToken } from '../helpers/autenticacao.js';

export const options = {
  iterations: 1
};


export default function() {
  const token = obterToken()
	const url = 'https://localhost:3000/transferencias';
  const payload = JSON.stringify({
    contaOrigem: 1 ,
    contaDestino: 2 ,
    valor: 11,
    token:""

 });

 const params = {
	headers: {
		'Content-Type': 'application/json',
    'Authorization': 'Bearer' + token

		},
}; 

let res = http.post(url, payload,params);
check(res, {  
  'status is 201': (r) => r.status === 201,   // o r poderia ser qq coisa
 
});

sleep(1);

}
