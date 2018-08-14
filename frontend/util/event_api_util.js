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

export const createEvent = (event) => {
    return $.ajax({
        method: 'POST',
        url: '/api/events',
        data: { event }
    })
}

export const updateEvent = (event) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/events/${event.id}`,
        data: { event }
    })
}

//registration ajax call nested under events routes

export const createRegistration = (event) => {
    return $.ajax({
        method: 'POST',
        url: `/api/events/${event.id}/registrations`,
    })
}