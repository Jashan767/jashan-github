document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
  
    // Display confirmation message
    document.getElementById("confirmationMessage").innerText = 
      `Thank you, ${name}! Your deluxe room has been booked from ${checkin} to ${checkout} for ${guests} guests. A confirmation email has been sent to ${email}.`;
  
    // Reset form
    document.getElementById("bookingForm").reset();
  });
  