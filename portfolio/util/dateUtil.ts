export const todayDateString = () => {
    let today = new Date();

    var date = today.toLocaleString('no-NO', {weekday: 'short', day: 'numeric', month: 'short'});
    var time = today.toLocaleString('no-NO', {hour: 'numeric', minute: 'numeric'})
    return (date + " " + time)
}