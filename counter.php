<?php
// Define the data file to store the click count
$dataFile = 'click_count.txt';

// Check if the file exists, if not, create it with an initial count of 0
if (!file_exists($dataFile)) {
    file_put_contents($dataFile, '0');
}

// Check if the request is a POST request (indicating a button click)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read the current click count from the file
    $currentCount = (int) file_get_contents($dataFile);

    // Increment the click count
    $currentCount++;

    // Update the file with the new count
    file_put_contents($dataFile, (string) $currentCount);

    // Return the updated count as a response
    echo $currentCount;
} else {
    // If it's not a POST request, return the current click count as a response
    echo file_get_contents($dataFile);
}
?>
