document.getElementById('safetyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        dob: formData.get('dob'),
        sex: formData.get('sex'),
        bloodType: formData.get('bloodType'),
        medicalReports: formData.get('medicalReports'),
        medication: formData.get('medication'),
        steps: formData.get('steps'),
        periodDay: parseInt(formData.get('periodDay')),
        periodMonth: formData.get('periodMonth')
    };
    
    // Calculate the next period date
    const monthMap = {
        january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
        july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
    };
    
    const periodMonthIndex = monthMap[data.periodMonth.toLowerCase()];
    const periodDay = data.periodDay;

    if (periodDay && periodMonthIndex !== undefined) {
        const today = new Date();
        const startDate = new Date(today.getFullYear(), periodMonthIndex, periodDay);
        
        // Handle case where the date is in the past
        if (startDate < today) {
            startDate.setFullYear(startDate.getFullYear() + 1);
        }
        
        const nextPeriodDate = new Date(startDate.getTime() + (28 * 24 * 60 * 60 * 1000)); // Adding 28 days
        
        const nextPeriodDay = nextPeriodDate.getDate();
        const nextPeriodMonth = nextPeriodDate.toLocaleString('default', { month: 'long' });
        const nextPeriodYear = nextPeriodDate.getFullYear();
        
        document.getElementById('nextPeriodDate').innerHTML = `
            <h2>Next Period Date:</h2>
            <p>Your next estimated period start date is ${nextPeriodMonth} ${nextPeriodDay}, ${nextPeriodYear}.</p>
        `;
    } else {
        document.getElementById('nextPeriodDate').innerHTML = `
            <h2>Next Period Date:</h2>
            <p>Please enter a valid day and month to calculate the next period date.</p>
        `;
    }
    
    // Display submitted data
    document.getElementById('output').innerHTML = `
        <h2>Submitted Data:</h2>
        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Last Name:</strong> ${data.lastName}</p>
        <p><strong>Date of Birth:</strong> ${data.dob}</p>
        <p><strong>Sex:</strong> ${data.sex}</p>
        <p><strong>Blood Type:</strong> ${data.bloodType}</p>
        <p><strong>Previous Medical Reports:</strong> ${data.medicalReports}</p>
        <p><strong>On Any Medication:</strong> ${data.medication}</p>
        <p><strong>Number of Steps:</strong> ${data.steps}</p>
        <p><strong>Period Tracking Day:</strong> ${data.periodDay}</p>
        <p><strong>Period Tracking Month:</strong> ${data.periodMonth}</p>
    `;
});
