window.onload = function () {
	const button = document.querySelectorAll('.button');
	const counter = document.querySelectorAll('.counter');
	const clear = document.querySelector('.clearcounters');
	const set = document.querySelector('.setcounter');
	const block = document.querySelectorAll('.block');


	const store = {
		setInStore: function (key, value) {
			localStorage.setItem(key, value);
		},
		getFromStore: function (key) {
			return localStorage.getItem(key);
		}
	};

	function getStore(counter, block) {
		for (let i = 0; i < counter.length; i++) {
            counter[i].innerHTML = store.getFromStore(`counter-${i}`) || 0;
            console.log(counter[i]);
        };
        
    };

    getStore(counter, block);
    
    

	button.forEach((item, i) => {
		item.addEventListener('click', () => {
			click(i);
		});
	});

	clear.addEventListener('click', () => {

		for (let i = 0; i < counter.length; i++) {
			store.setInStore(`counter-${i}`, 0);
			counter[i].innerHTML = 0;
		}
	});

	set.addEventListener('click', () => {
		setData(counter.length);
    });
    
	// Запись для клика
	function click(i) {

		let counterValue = ++counter[i].innerHTML;
		store.setInStore(`counter-${i}`, counterValue);
	};

	// Номер блока для счётчика
	function setData(counter) {

        let setID = prompt("Вветиде номер блока 1 или 2");

        if (setID > 0 && setID <= 2) {
            setcounter((setID - 1), setNumber());
        } else if (setID == null ) {
            alert('Вы отменили действие!');
        } else (alert('Вы ввели некоректное значение!'));
    };
    

	// Число для сет счётчика
	function setNumber() {

		do {
			var number = prompt("Вветиде цифру");
		} while (number == null || isNaN(+number));

		return +number;
	}
	// Запись для сет счётчика
	function setcounter(id, number) {
        counter[id].innerHTML = number;
        console.log(id);
		store.setInStore(`counter-${id}`, counter[id].innerHTML);
	};

	
}