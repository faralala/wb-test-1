const widget = document.getElementById('widget')
let posts = [] // массив постов для кэширования
let offset = 0 // смещение для загрузки следующей партии постов
const limit = 10 // Количество постов, загружаемых за раз
const localStorageKey = 'vk_posts'
// токен
// https://api.vk.com/blank.html#access_token=vk1.a.a0VAGa9mI07BtRs9Be-GNoegnvERRp4K50lyUn3feevWwm73TLRPu7yLl3Eb8pPJXlTO6pCH25daqsVrCoTjx7pJcENHjnWH3nfSM4CIDpqe79QszLsFvO1gvLSlH6xEjP3XtmrSjV-AtgAhA5gCjNtgpCUGJromTSilbpzvJFVTUqB1HPqp2t6ll_u0Z1McuHF7B5kjWB4xkOgrmQztEw&expires_in=0&user_id=185283609

function loadPosts() {
	// Загрузка данных из VK API
	fetch(`https://api.vk.com/method/wall.get?owner_id=-29534144&count=${limit}&offset=${offset}&v=5.131`)
		.then(response => response.json())
		.then(data => {
			if (data.response && data.response.items) {
				posts = posts.concat(data.response.items)
				offset += limit
				renderPosts()
			}
		})
		.catch(error => console.error('Ошибка загрузки данных:', error))
}

function renderPosts() {
	// Отображение постов в виджете
	widget.innerHTML = ''
	posts.forEach(post => {
		const postElement = document.createElement('div')
		postElement.textContent = post.text
		widget.appendChild(postElement)
	})
}

function init() {
	// Загрузка кэшированных данных
	const cachedPosts = JSON.parse(localStorage.getItem(localStorageKey))
	if (cachedPosts) {
		posts = cachedPosts
		renderPosts()
	}

	// Загрузка новых данных
	loadPosts()

	// Обработчик прокрутки
	widget.addEventListener('scroll', () => {
		if (widget.scrollTop + widget.clientHeight >= widget.scrollHeight) {
			loadPosts()
		}
	})
}

init()

// Сохранение данных в localStorage при закрытии страницы
window.addEventListener('beforeunload', () => {
	localStorage.setItem(localStorageKey, JSON.stringify(posts.slice(-50))) // Сохраняем последние 50 постов
})
