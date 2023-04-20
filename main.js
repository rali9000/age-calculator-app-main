let date = new Date();

function leap_year(year) {
    return (year % 4 == 0 && ((year % 100 != 0) || (year % 400 == 0)));
}

function check_input(month_in, day_in, year_in) {
    let valid = true;

    let year = year_in.value;
    if (year > date.getFullYear()) {
        year_in.parentElement.classList.add("invalid");
        valid = false;
    }

    let month = month_in.value;
    if (month < 1 || month > 12) {
        month_in.parentElement.classList.add("invalid");
        valid = false;
    }

    let day = day_in.value;
    if (month == 2) { 
        if (day < 1 || day > 28 || 
            (leap_year(year) && (day < 1 || day > 29))
            ) {
            valid = false;
            day_in.parentElement.classList.add("invalid");
        }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day < 1 || day > 30) {
            valid = false;
            day_in.parentElement.classList.add("invalid");
        }
    } else {
        if (day < 1 || day > 31) {
            valid = false;
            day_in.parentElement.classList.add("invalid");
        }
    }

    // console.log(month, day, year);
    return valid;
}

function execute() {
    let invalid_in = document.getElementsByClassName("invalid");

    let month_in = document.getElementById("input_month");
    let day_in = document.getElementById("input_day");
    let year_in = document.getElementById("input_year");

    let day_out = document.getElementById("output_day");
    let month_out = document.getElementById("output_month");
    let year_out = document.getElementById("output_year");

    while (invalid_in.length) {
        invalid_in[0].classList.remove("invalid");
    }

    if(check_input(month_in, day_in, year_in)) {
        let years = date.getFullYear() - year_in.value;
        let months = (date.getMonth() + 1) - month_in.value;
        let days = date.getDate() - day_in.value;

        if (days < 0) {
            months--;
            days += 31;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        year_out.textContent = years;
        month_out.textContent = months;
        day_out.textContent = days;
    } else {
        year_out.textContent = "--";
        month_out.textContent = "--";
        day_out.textContent = "--";
    }
}