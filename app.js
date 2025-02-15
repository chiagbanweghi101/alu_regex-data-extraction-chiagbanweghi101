const fs = require("fs");
const readLine = require("readline");

const pipe = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt the user for an action
function promptUser() {
    pipe.question("Select the option you want to perform: 'a' for Email || 'b' for URL || 'c' for Phone number || 'd' for Time || 'f' for #tags|| 'e' to exit: ", (info) => {
        if (info.toLowerCase() === "a") {
            // Read text from file
            fs.readFile("index.txt", "utf8", (error, result) => {
                if (error) {
                    console.error("Error reading the file:", error);
                    promptUser(); // Re-prompt user on error
                    return;
                }

                // Regex to match emails
                const emailRegex =/[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]*[a-zA-Z0-9])?@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}/g;
                const matches = result.match(emailRegex);

                if (matches) {
                    console.log("Emails found in the file:");
                    matches.forEach((email) => console.log(email));
                } else {
                    console.log("No emails found in the file.");
                }

                promptUser(); // Return to the main menu after processing
            });
        }
        else if (info.toLowerCase() === "b") {
            // Reading the file
            fs.readFile("index.txt", "utf8", (error, result) => {
                if (error) {
                    console.error("Error reading the file:", error);
                    promptUser(); // Re-prompt user on error
                    return;
                }

                // Regex to match URLs (with global flag to find all matches)
                const urlRegex = /https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/[a-zA-Z0-9-.~])(\?[a-zA-Z0-9-.~=&])?(#[a-zA-Z0-9-_.~])?/g;
                const matches = result.match(urlRegex);

                if (matches) {
                    console.log("URLs found in the file:");
                    matches.forEach((url) => console.log(url));
                } else {
                    console.log("No URLs found in the file.");
                }

                promptUser(); // Return to the main menu after processing
            });
        }
        else if (info.toLowerCase() === "c") { // Assuming "p" is the option for phone numbers
            // Reading the file
            fs.readFile("index.txt", "utf8", (error, result) => {
                if (error) {
                    console.error("Error reading the file:", error);
                    promptUser(); // Re-prompt user on error
                    return;
                }

                // Regex to match phone numbers
                const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
                const matches = result.match(phoneRegex);

                if (matches) {
                    console.log("Phone numbers found in the file:");
                    matches.forEach((phone) => console.log(phone));
                } else {
                    console.log("No phone numbers found in the file.");
                }

                promptUser(); // Return to the main menu after processing
            });
        }
        else if (info.toLowerCase() === "f") { // Assuming "f" is the option for hashtags
            // Reading the file
            fs.readFile("index.txt", "utf8", (error, result) => {
                if (error) {
                    console.error("Error reading the file:", error);
                    promptUser(); // Re-prompt user on error
                    return;
                }
        
                // Regex to match hashtags
                const hashtagRegex = /#\w+/g;
                const matches = result.match(hashtagRegex);
        
                if (matches) {
                    console.log("Hashtags found in the file:");
                    matches.forEach((hashtag) => console.log(hashtag));
                } else {
                    console.log("No hashtags found in the file.");
                }
        
                promptUser(); // Return to the main menu after processing
            });
        }
        else if (info.toLowerCase() === "d") { // Assuming "t" is the option for time formats
            // Reading the file
            fs.readFile("index.txt", "utf8", (error, result) => {
                if (error) {
                    console.error("Error reading the file:", error);
                    promptUser(); // Re-prompt user on error
                    return;
                }

                // Regex to match 12-hour and 24-hour time formats
                const timeRegex = /\b(1[0-2]|0?[1-9]):[0-5][0-9]\s*(AM|PM)\b|\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/g;
                const matches = result.match(timeRegex);

                if (matches) {
                    console.log("Time formats found in the file:");
                    matches.forEach((time) => console.log(time));
                } else {
                    console.log("No time formats found in the file.");
                }

                promptUser(); // Return to the main menu after processing
            });
        }
        else if (info.toLowerCase() === "e") { // Exit option
            console.log("Exiting...");
            pipe.close(); // Close the interface
        }
        else {
            console.log("Invalid Option. Please choose a, b, c, d, or e.");
            promptUser(); // Re-prompt user on invalid option
        }
    });
}

// Start the process by calling the promptUser function
promptUser();