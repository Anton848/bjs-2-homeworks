class AlarmClock {
  constructor() {
    // Коллекция звонков, храним здесь объекты вида {time: 'HH:MM', callback: function, canCall: true}
    this.alarmCollection = [];
    // ID интервала, который возвращает setInterval. Используем, чтобы останавливать/запускать будильник.
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      time: time,
      callback: callback,
      canCall: true // Разрешаем этому звонку срабатывать.  После срабатывания ставим в false, пока не "сбросим".
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  start() {
    // Проверка, чтобы не запускать несколько интервалов одновременно.
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false; // Чтобы сработал только один раз в минуту.
          alarm.callback(); // Вызываем функцию-будильник.
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null; // Сбрасываем, чтобы можно было запустить снова.
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true); // Снова разрешаем звонкам срабатывать.
  }

  clearAlarms() {
    this.stop(); // Останавливаем интервал.
    this.alarmCollection = []; // Очищаем коллекцию.
  }
}
