document.addEventListener("DOMContentLoaded", function () {
    // Get references to the radio buttons and the result textbox
    const radioButtons = document.querySelectorAll('input[name="content"]');
    const wordTextarea = document.getElementById("Wcounts");
    const mainTopicTextarea = document.getElementById("kids");
    const subtopicTextarea = document.getElementById("diwali");
    const writingStyleRadios = document.querySelectorAll('input[name="writing_style"]');
    const toneRadios = document.querySelectorAll('input[name="tone"]');
    const includeTextarea = document.getElementById("Incstopic");
    const excludeTextarea = document.getElementById("Exstopic");
    const resultTextbox = document.getElementById("mybox");
    
    // Initialize the resultTextbox content
    resultTextbox.value = "";

    // Add event listeners to all input elements
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener("change", updateResult);
    });
    wordTextarea.addEventListener("input", updateResult);

    mainTopicTextarea.addEventListener("input", updateResult);
    subtopicTextarea.addEventListener("input", updateResult);

    writingStyleRadios.forEach(function (radioButton) {
        radioButton.addEventListener("change", updateResult);
    });

    toneRadios.forEach(function (radioButton) {
        radioButton.addEventListener("change", updateResult);
    });

    includeTextarea.addEventListener("input", updateResult);
    excludeTextarea.addEventListener("input", updateResult);

    // Function to update the result textbox
    function updateResult() {
        let result = "";

        // Generate content based on selected options and inputs
        radioButtons.forEach(function (radioButton) {
            if (radioButton.checked) {
                result += "Generate a content for " + radioButton.value + " ";
            }
        });
        result += "in " + wordTextarea.value + " words ";

        result += "about " + mainTopicTextarea.value + ". ";

        result += "Include sections for each of these subtopics: " + subtopicTextarea.value + ". ";

        writingStyleRadios.forEach(function (radioButton) {
            if (radioButton.checked) {
                result += "Use a " + radioButton.value + " writing style. ";
            }
        });

        toneRadios.forEach(function (radioButton) {
            if (radioButton.checked) {
                result += "Use a " + radioButton.value + " tone. ";
            }
        });

        result += "Include these words: " + includeTextarea.value + ". ";

        result += "Do not use these words: " + excludeTextarea.value + ". ";


        // Update the result textbox
        resultTextbox.value = result.trim();
    }
});

function copyPrompt() {
    var textBox = document.getElementById("mybox");
    textBox.select();
    document.execCommand("copy");
    alert("Prompt copied to clipboard!");
}

function resetPrompt() {
    var textBox = document.getElementById("mybox");
    textBox.value = "";
}



// document.addEventListener("DOMContentLoaded", function () {
//     // Get references to the radio buttons and the result textbox
//     const radioButtons = document.querySelectorAll('input[name="content"]');
//     const resultTextbox = document.getElementById("mybox");
//     // Add an event listener to each radio button
//     radioButtons.forEach(function (radioButton) {
//         radioButton.addEventListener("change", function () {
//             // Check if the radio button is selected
//             if (radioButton.checked) {
//                 // Display the selected radio button's value (name) in the textbox
//                 resultTextbox.value += "Generate a content for " + radioButton.value + " ";
//             }
//         });
//     });
// });


// // Get references to the textarea and the result textbox
// document.addEventListener("DOMContentLoaded", function () {
// const mainTopicTextarea = document.getElementById("kids");
// const resultTextbox = document.getElementById("mybox");
// // Add an event listener to the textarea for the 'input' event
// mainTopicTextarea.addEventListener("input", function () {
//     // Get the current text in the textarea
//     resultTextbox.value = "about "+mainTopicTextarea.value +". ";
// });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     // Get references to the Subtopic textarea and the result textbox
//     const subtopicTextarea = document.getElementById("diwali");
//     const subtopicResultTextbox = document.getElementById("mybox");
//     // Add an event listener to the Subtopic textarea for the 'input' event
//     subtopicTextarea.addEventListener("input", function () {
//         // Get the current text in the Subtopic textarea
//         const subtopicValue = "Include sections for each of these subtopics: "+subtopicTextarea.value + ". ";
//         // Split the input by commas and trim spaces
//         const subtopics = subtopicValue.split(',').map(subtopic => subtopic.trim());
//         // Filter out empty subtopics
//         const filteredSubtopics = subtopics.filter(subtopic => subtopic !== '');
//         // Join the filtered subtopics with commas and display in the result textbox
//         subtopicResultTextbox.value = filteredSubtopics.join(', ');
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const radioButtons = document.querySelectorAll('input[name="writing_style"]');
//     const resultTextbox = document.getElementById("mybox");
//     radioButtons.forEach(function (radioButton) {
//         radioButton.addEventListener("change", function () {
//             if (radioButton.checked) {
//                 resultTextbox.value = "Use a " + radioButton.value +" writing style. ";
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const radioButtons = document.querySelectorAll('input[name="tone"]');
//     const resultTextbox = document.getElementById("mybox");
//     radioButtons.forEach(function (radioButton) {
//         radioButton.addEventListener("change", function () {
//             if (radioButton.checked) {
//                 resultTextbox.value = "Use a " + radioButton.value +" tone. ";
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const IncludeTextarea = document.getElementById("Incstopic");
//     const subtopicResultTextbox = document.getElementById("mybox");
//     IncludeTextarea.addEventListener("input", function () {
//         const subtopicValue = "Include these words: "+IncludeTextarea.value +". ";
//         const subtopics = subtopicValue.split(',').map(subtopic => subtopic.trim());
//         const filteredSubtopics = subtopics.filter(subtopic => subtopic !== '');
//         subtopicResultTextbox.value = filteredSubtopics.join(', ');
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const subtopicTextarea = document.getElementById("Exstopic");
//     const subtopicResultTextbox = document.getElementById("mybox");
//     subtopicTextarea.addEventListener("input", function () {
//         const subtopicValue = "Do not use these words: "+subtopicTextarea.value +". ";
//         const subtopics = subtopicValue.split(',').map(subtopic => subtopic.trim());
//         const filteredSubtopics = subtopics.filter(subtopic => subtopic !== '');
//         subtopicResultTextbox.value = filteredSubtopics.join(', ');
//     });
// });
