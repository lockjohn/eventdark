//registration ajax call nested under events routes

export const newRegistration = (event) => {
    return $.ajax({
        method: 'POST',
        url: `/api/events/${event.id}/registrations`,
    })
}

// export default newRegistration;

//will return user show json with user info plus registration