const canvas = document.querySelector("#canvas")
canvas.style.backgroundColor = 'lightgray'
//создаем графический контекст
const ctx = canvas.getContext('2d')
//определеяме цвет заливки
ctx.fillStyle = 'green'
//рисуем прямоугольник шириной 50, высотой 70
ctx.fillRect(10, 20, 50, 70)
ctx.font = `20px Arial`//размер шрифта 20 пикселей, шрифт Arial
ctx.fillStyle = 'blue' //цвет текста голубой
ctx.textAlign = 'center'//выравнивание по горизонтали
ctx.textBaseline = 'middle'//выравнивание по вертикали
ctx.fillText('Hello, World', 150, 150) // положение текста 50 пикселйе вправо, 70 вниз
ctx.strokeStyle = 'yellow' //цвет контура жёлтый
ctx.lineWidth = 5//задаём толщину контура в 5 пикселей
ctx.strokeRect(10, 20, 50, 70)
ctx.strokeStyle = 'red'
ctx.lineWidth = 5
ctx.beginPath()//начало пути
ctx.moveTo(10, 10)//ставим карандаш в точку 10, 10 пикселей
ctx.lineTo(290, 10)//чертим прямую до точки 290 вправо и 10 вниз пикселей
ctx.lineTo(10, 290)//чертим прямую до точки 10 вправо и 290 вниз пикселей
ctx.lineTo(290, 290)
ctx.stroke()//линия появляется на экране
canvas.addEventListener('click', drawRect);

function drawRect(event)
{
	ctx.fillStyle = 'red';
	ctx.fillRect(event.offsetX, event.offsetY, 5, 5);
}
ctx.beginPath();
ctx.arc(150, 150, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.strokeStyle = '#1a2edb'; // тёмно-синий цвет
ctx.lineWidth = 5; // толщина линии в 5px
ctx.stroke();