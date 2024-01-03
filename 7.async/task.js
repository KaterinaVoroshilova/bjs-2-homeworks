class AlarmClock {
	constructor(alarmCollection, intervalId) {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {

		if (time === null || callback === undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		for (let alarm of this.alarmCollection) {
			if (alarm.time === time) {
				console.warn('Уже присутствует звонок на это же время');
			}
		};
		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

	removeClock(time) {
		return this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		const now = new Date();
		const currentHours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;;
		let currentMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
		return `${currentHours}:${currentMinutes}`;
	}

	start() {
		if (this.intervalId === null) {
			this.intervalId = setInterval(() => {
				for (let alarm of this.alarmCollection) {
					if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
						alarm.canCall = false;
						alarm.callback();
					}
				}
			}, 1000);
		}
	}

	stop() {
		if (this.intervalId !== null)
			clearInterval(this.intervalId);
		this.intervalId = null;
	}


	resetAllCalls() {
		for (let alarm of this.alarmCollection) {
			alarm.canCall = true;
		}
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}