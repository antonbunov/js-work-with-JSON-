/*
const person = {
    model: 'tesla',
    year: 2023,
}

const json = JSON.stringify(person)//делаю объект строкой.
// В JSON кавычки ОБЯЗАТЕЛЬНО двойные.
console.log(json)

const parsed = JSON.parse(json)//делаю строку объектом
console.log(parsed)
*/

// ПОДКЛЮЧЕНИЕ К JSON // 6:34:30 https://www.youtube.com/watch?v=fcMcf_4PjfI

const list = document.querySelector('#list')

async function start(){
    try{
        let resp = await fetch('/dataBase.json',
        {
            method: 'GET' /*'GET' идёт по умолчанию, если мне нужно только получить данные, то второй атрибут с menthod можно вообще не прописывать. fetch возвращает нам promise*/
        })
        // console.log(resp) //на данном этапе данные нужно распарсить
        const data = await resp.json() //.json() работает в формате promise, так что await Обязателен.
        //.json() преобразует json файл в обычный массив
        // console.log(data)
        render(data)
    }
    catch(myErr){}
}

function render( userss = []){
    const html = userss.map(toHTML).join('')
    //.join('') чтобы убрать запятые
    list.innerHTML = html

}
function toHTML(user){
    return `
    <li class='list-group-item'>${user.name}</li>
    `

}

start()