function calculateValues () {
    // Get input values and convert them to numbers
    const inputSalaryPerhour = document.getElementById('salaryPerHour');
    const salaryPerHour = Number(inputSalaryPerhour.value);

    const inputTotalLate = document.getElementById('totalLate');
    const totalLate = Number(inputTotalLate.value)

    const inputHoursRendered = document.getElementById('hoursRendered');
    const hoursRendered = Number(inputHoursRendered.value);

    //perform calculation
    const minutesPerHour = 60;

    const totalLateDividedByminutesPerHour = totalLate / minutesPerHour;
    const hoursRenderedMinustotalLateDividedByminutesPerHour = hoursRendered - totalLateDividedByminutesPerHour;
    const decimal = hoursRenderedMinustotalLateDividedByminutesPerHour.toFixed(2);  // Format result to 2 decimal places

    if (hoursRenderedMinustotalLateDividedByminutesPerHour <= 0 || salaryPerHour <= 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all fields with valid numbers!",
            });
        return;
    }

    //display the hours rendered
    document.getElementById('totalHoursRendered').innerHTML = decimal;
    document.getElementById('totalHoursRendered').classList.add('is-totalHoursRendered');

    //calculate salary and format it
    let salary = decimal * salaryPerHour;
    salary = salary.toFixed(2);  // Ensure salary is a string with 2 decimal places

    // Format salary with commas for thousands
    const formattedNumber = Number(salary).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    //display the total salary
    document.getElementById('showSalary').innerHTML = formattedNumber;
    document.getElementById('showSalary').classList.add('is-showSalary');
}

// Button click event
document.getElementById('calculateSalary').addEventListener('click', calculateValues);

// Keydown event
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();  // Prevent form submission if the page is in a form
        calculateValues();
    }       
})


