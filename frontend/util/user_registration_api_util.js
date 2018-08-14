//registration ajax call nested under events routes

export const newRegistration = (event) => {
    return $.ajax({
        method: 'POST',
        url: `/api/events/${event.id}/registrations`,
    })
}

//will need to pass in session.id from state
export const usersRegistrations = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
}

// export default newRegistration;

//will return user show json with user info plus registration