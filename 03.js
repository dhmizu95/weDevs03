function wearPPE() {
	return new Promise((resolve) => {
		setTimeout(() => resolve('Wearing PPE'), 2000);
	});
}

function fightCorona() {
	return new Promise((resolve) => {
		setTimeout(() => resolve('Fighting Corona'), 1000);
	});
}

function execute() {
	let promiseFactories = [wearPPE(), fightCorona()];

	Promise.all(promiseFactories).then((result) => {
		result.forEach((res) => console.log(res));
	});
}

execute();
