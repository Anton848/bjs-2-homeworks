// Функция-конструктор Student
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []; // Инициализируем массив для оценок
}

// Добавляем метод setSubject в prototype
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

// Метод для добавления оценок
Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.marks) {
    console.log('Невозможно добавить оценки: студент отчислен.');
    return;
  }
  this.marks.push(...marksToAdd); // Добавляем оценки в массив
};

// Метод для расчета среднего балла
Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0; // Возвращаем 0, если нет оценок
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

// Метод для исключения студента
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};