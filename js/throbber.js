  // Define the throbber parts
  var throbberArray = ["-", "\\", "|", "/"];
  var throbberIndex = 0;

  // Function to cycle the throbber
  function cycleThrobber() {
    // Create the new title with throbber
    var title = " Alex Reckard " + throbberArray[throbberIndex] + "  Official Website";
    
    // Set the new title
    document.title = title;
    
    // Increment the throbber index for next time
    throbberIndex++;
    if (throbberIndex >= throbberArray.length) {
      throbberIndex = 0;
    }
  }

  // Cycle the throbber every 500 milliseconds
  setInterval(cycleThrobber, 500);