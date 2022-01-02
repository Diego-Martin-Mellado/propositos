var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
window.onload = () => {
	propositos.forEach ((proposito) => {
		document.getElementById ('main').appendChild (get_html (proposito.title, proposito.description, proposito.start, proposito.end))
	})
}

const coming_soon_pill = () => {
	let return_obj = document.createElement ('span')
	return_obj.setAttribute ('class', 'py-0 px-2 fs-7 border border-info alert-info text-info rounded')
	return_obj.appendChild (document.createTextNode ('¡Proximamente!'))
	return return_obj
}

const completed_pill = () => {
	let return_obj = document.createElement ('span')
	return_obj.setAttribute ('class', 'py-0 px-2 fs-7 border border-success alert-success text-success rounded')
	return_obj.appendChild (document.createTextNode ('¡Completada!'))
	return return_obj
}

const in_proccess_pill = () => {
	let return_obj = document.createElement ('span')
	return_obj.setAttribute ('class', 'py-0 px-2 fs-7 border border-warning alert-warning text-warning rounded')
	return_obj.appendChild (document.createTextNode ('En proceso'))
	return return_obj
}

const get_html = (title, description, start, end) => {
	// div principal
	let return_obj = document.createElement ('div')
	return_obj.setAttribute ('class', 'row border')

	// primer col
	let col1 = document.createElement ('div')
	col1.setAttribute ('class', 'col-md p-4')
	
	// titulo
	let titulo = document.createElement ('h1')
	titulo.appendChild (document.createTextNode (title))
	col1.appendChild (titulo)
	
	// Pill
	let today = new Date ()
	if (today < start) {
		col1.appendChild (coming_soon_pill ())
	} else if (today > end) {
		col1.appendChild (completed_pill ())
	} else {
		col1.appendChild (in_proccess_pill ())
	}

	// descripcion
	let descripcion = document.createElement ('div')
	descripcion.setAttribute ('class', 'my-4')
	descripcion.innerHTML = description
	col1.appendChild (descripcion)
	
	let col2 = document.createElement ('div')
	col2.setAttribute ('class', 'col-md p-4')

	let icons = document.createElement ('span')
	icons.setAttribute ('class', 'float-start mt-2 p-0 rounded w-100')

	let icon_play = document.createElement ('i')
	icon_play.setAttribute ('class', 'fa fa-play float-start')

	let icon_stop = document.createElement ('i')
	icon_stop.setAttribute ('class', 'fa fa-stop float-end')

	icons.appendChild (icon_play)
	icons.appendChild (icon_stop)
	col2.appendChild (icons)

	let bar = document.createElement ('span')
	bar.setAttribute ('class', 'float-start my-2 p-0 gradient1 rounded w-100')

	let dot1 = document.createElement ('span')
	dot1.setAttribute ('class', 'float-start m-0 p-1 border border-dark rounded-circle bg-white')

	let dot2 = document.createElement ('span')
	dot2.setAttribute ('class', 'float-end m-0 p-1 border border-dark rounded-circle bg-white')

	bar.appendChild (dot1)
	bar.appendChild (dot2)
	col2.appendChild (bar)

	let dates = document.createElement ('span')
	dates.setAttribute ('class', 'float-start mt-2 p-0 rounded w-100')

	let date_start = document.createElement ('span')
	date_start.setAttribute ('class', 'float-start m-0 p-0')
	date_start.appendChild (document.createTextNode (`${start.getDate ()} de ${meses [start.getMonth ()]}`))
	
	let date_end = document.createElement ('span')
	date_end.setAttribute ('class', 'float-end m-0 p-0')
	date_end.appendChild (document.createTextNode (`${end.getDate ()} de ${meses [end.getMonth ()]}`))

	dates.appendChild (date_start)
	dates.appendChild (date_end)
	col2.appendChild (dates)

	return_obj.appendChild (col1)
	return_obj.appendChild (col2)

	return return_obj
}