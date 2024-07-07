// Function to show service details
function showServiceDetails(service) {
    // Hide all service details first
    var serviceDetails = document.querySelectorAll('.service-details');
    serviceDetails.forEach(function(detail) {
        detail.style.display = 'none';
    });

    // Show the selected service detail
    var serviceDetail = document.getElementById(service + '_details');
    if (serviceDetail) {
        serviceDetail.style.display = 'block';
    }
}

// Function to handle order form submission
function submitOrderForm() {
    // Fetch form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var selectedService = document.getElementById('service').value;
    var date = document.getElementById('date').value;
    var message = document.getElementById('message').value;

    // Example: You can process or validate the form data here
    // For now, let's log the data to console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Selected Service:', selectedService);
    console.log('Date:', date);
    console.log('Message:', message);

    // Optionally, you can reset the form after submission
    document.getElementById('order-form').reset();

    // Provide feedback to the user (e.g., show a thank you message)
    alert('Thank you for your order! We will get in touch with you soon.');
}
