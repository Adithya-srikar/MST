function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.textContent = '');

    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters long';
        isValid = false;
    }


    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    const experience = document.getElementById('experience').value;
    if (!experience) {
        document.getElementById('experienceError').textContent = 'Work experience is required';
        isValid = false;
    } else if (experience < 0) {
        document.getElementById('experienceError').textContent = 'Work experience cannot be negative';
        isValid = false;
    }

    const comfortable = document.getElementById('comfortable').value;
    if (!comfortable) {
        document.getElementById('comfortableError').textContent = 'Please select an option';
        isValid = false;
    }

    const suggestions = document.getElementById('suggestions').value.trim();
    if (!suggestions) {
        document.getElementById('suggestionsError').textContent = 'Please provide your suggestions';
        isValid = false;
    }


    const investments = document.querySelectorAll('input[name="investment"]:checked');
    if (investments.length === 0) {
        document.getElementById('investmentError').textContent = 'Please select at least one investment option';
        isValid = false;
    }

    const contact = document.querySelector('input[name="contact"]:checked');
    if (!contact) {
        document.getElementById('contactError').textContent = 'Please select your contact preference';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('surveyForm').reset();
    }

    return false;
}