const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const submit = document.getElementById('submit');
const theday = document.getElementById('theday');

submit.addEventListener("click", () => {
    let ndate = new Date(`${date.value} ${month.value} ${year.value}`)
    let day = ndate.toString();
    day = day.slice(0, 3);
    theday.innerHTML = day;
})