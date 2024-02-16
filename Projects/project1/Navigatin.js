function updateContent(route) {
    console.log('Updating content for route:', route);

    // Add logic to update content based on the route
    switch (route) {
        case 'register':
            document.getElementById("registrationForm").style.display = "block";
            document.getElementById("tableDiv").style.display = "none";
            break;
        case 'userList':
            document.getElementById("registrationForm").style.display = "none";
            document.getElementById("tableDiv").style.display = "block";
            break;
        default:
            document.getElementById("registrationForm").style.display = "block";
            document.getElementById("tableDiv").style.display = "none";
    }
}
function navigateTo(route) {
    history.pushState({ route }, null, '#' + route);
    updateContent(route);
}

window.onpopstate = function (event) {
    const route = event.state ? event.state.route : 'register';
    updateContent(route);
};

document.addEventListener('DOMContentLoaded', function () {
    const initialRoute = window.location.hash ? window.location.hash.slice(1) : 'register';
    updateContent(initialRoute);
});