class myBox {
	_age = 0;

	constructor(name, age) {
		console.log("Создание копии");

		this.name = name;
		this.age = age;
	}

	hi() {
		console.log("Hello, " + this.name + this.age);
	}

	set age(value) {
		this._age = value;
		console.log("Меняем");
	}

	get age() {
		return this._age;
	}
}

let myBox2 = new myBox("Оля", 21);

myBox2.hi();
