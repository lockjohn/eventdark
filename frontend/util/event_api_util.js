export const fetchEvents = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/events'
    })
}

export const fetchEvent = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/events/${id}`
    })
}

export const createEvent = (form) => {
    return $.ajax({
        method: 'POST',
        url: '/api/events',
        data: form,
        contentType: false,
        processData: false
    })
}

export const updateEvent = (form) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/events/${event.id}`,
        data: { event }
    })
}

