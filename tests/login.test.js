import http from 'k6/http';   //importa o modulo
import { sleep, check } from 'k6';  // importa a função
import {pegarBaseURL} from '../utils/variaveis.js'
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))



export const options = {
  stages:[
	{ duration: '10s', target: 10 }, // durante 10 segundos, coloque 10 usuarios pra executar o teste
	{ duration: '20s', target: 10 }, // mantem 10
	{ duration: '10s', target: 30 }, //soe pra 30
	{ duration: '20s', target: 30 }, //soe pra 30
	{ duration: '20s', target: 0 } //soe pra 30

  ],
  	thresholds: {
		http_req_duration: ['p(90)<3000', 'max<5000'], // p90 tem que ser menor do que 3000 // requisicao com tempo maior nao pode passar de 5000
		http_req_failed: ['rate<0.01'] // falhas menor do que 1%
	}
};

export default function () {
	const url = pegarBaseURL() +'/login';
	
    const payload = JSON.stringify(postLogin);

 const params = {
	headers: {
		'Content-Type': 'application/json',


		},
}; 

const res = http.post(url, payload,params);
check(res, {  // podem haver várias validações aqui dentro
	'Validar que o status é 200': (r) => r.status === 200,   // o r poderia ser qq coisa
	'Validar que o token é string': (r) => typeof(r.json().token) == 'string'
})

sleep(1);
}