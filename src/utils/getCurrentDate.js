export function getCurrrentDate() {
    // Create a new Date object to get the current date and time
    var currentDate = new Date();
  
    // Get the day, month, date, and year from the Date object
    var day = currentDate.toLocaleString('en-US', { weekday: 'long' });
    var month = currentDate.toLocaleString('en-US', { month: 'long' });
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
  
    // Display the information
    return  `${day} , ${month} ${date}, ${year}`;
  }
  
  // Call the function to display the current date
//   showDate();
  