import http from 'k6/http';   //importa o modulo
import { sleep, check } from 'k6';  // importa a função

export const options = {
  vus: 10,
  durations: '30s',  // 10 pessoas executando por 30 segundos
  	thresholds: {
		http_req_duration: ['p(90)<3000', 'max<5000'], // p90 tem que ser menor do que 3000 // requisicao com tempo maior nao pode passar de 5000
		http_req_failed: ['rate<0.01'] // falhas menor do que 1%
	}
};

export default function () {
	const url = 'https://localhost:3000/login';
	
    const payload = JSON.stringify({
	    username:'julio.lima',
	    senha: '123456'           // isso é um objeto javascript. P/converter em uma string json utiliza o JSON.stringify
    });

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