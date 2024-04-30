



function hideBotTyping() {
    $("#botAvatar").remove();
    $(".botTyping").remove();
}


function showBotTyping() {
    const botTyping = '<div class="botTyping"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
    $(botTyping).appendTo(".chats");
    $(".botTyping").show();
    scrollToBottomOfResults();
}

function scrollToBottomOfResults() {
    const terminalResultsDiv = document.getElementById("chats");
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
}

// function chooseResponse(userResponse) {
//     // Create a message object to store the user's response
//     const userMessage = { name: "User", message: userResponse };
//
//     // Add the user's response to the chat messages
//     chatbox.messages.push(userMessage);
//
//     // Update the chat text to display the user's response
//     chatbox.updateChatText();
//
//     // Send the user's response to the /predict route
//     fetch('/predict', {
//         method: 'POST',
//         body: JSON.stringify({ message: userResponse }),
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//         .then(r => r.json())
//         .then(r => {
//             // let loadingMessage = {
//             //     name: "Marita",
//             //     message: "<div class=\"botTyping\"><div class=\"bounce1\"></div><div class=\"bounce2\"></div><div class=\"bounce3\"></div> "
//             // };
//             // chatbox.messages.push(loadingMessage);
//             // this.updateChatText(chatbox);
//
//
//             let msg2 = { name: "Marita", message: r.answer };
//             chatbox.messages.push(msg2);
//             chatbox.updateChatText();
//
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// }

function chooseResponse(userResponse) {
    // Create a message object to store the user's response
    const userMessage = { name: "User", message: userResponse };

    // Add the user's response to the chat messages
    chatbox.messages.push(userMessage);

    // Update the chat text to display the user's response
    chatbox.updateChatText();

    // Send the user's response to the /predict route
    fetch('/colonoscopy_predict', {
        method: 'POST',
        body: JSON.stringify({ message: userResponse }),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(r => r.json())
        .then(r => {
            // Add a loading message before processing the response
            let loadingMessage = {
                name: "Marita",
                message: "<div class=\"botTyping\"><div class=\"bounce1\"></div><div class=\"bounce2\"></div><div class=\"bounce3\"></div> "
            };

            // Clear the chat messages and add the loading message
            chatbox.messages = [loadingMessage];
            chatbox.updateChatText();

            // Simulate a delay for the loading effect (5 seconds)
            const loadingTimeout = 1000; // 5 seconds

            setTimeout(() => {
                // Remove the loading message after the delay
                chatbox.messages.pop();
                chatbox.updateChatText();

                // Add the response message
                let msg2 = { name: "Marita", message: r.answer };
                chatbox.messages.push(msg2);
                chatbox.updateChatText();
            }, loadingTimeout);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}



//
// function submitName() {
//     // Capture the name entered by the user
//     const patientNameInput = document.getElementById('patientName-input');
//     const patientNumberInput = document.getElementById('patientNumber-input');
//
//     const patientName = patientNameInput.value;
//     const patientNumber = patientNumberInput.value;
//
//
//     // Create an object to hold the name and patient number
//     const patientInfoData = { patientName, patientNumber };
//
//
//
//     // Send the name information to the backend
//     fetch('/add_name_number', {
//         method: 'POST',
//         body: JSON.stringify(patientInfoData),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => {
//             if (response.ok) {
//                 // Replace the button with a "Submit Successfully" message
//                 const button = document.querySelector('.submit-name-button');
//                 button.innerHTML = "Submit Successfully";
//
//                 // Disable the button so the user cannot click it again
//                 button.disabled = true;
//                 console.log('name information sent to the backend');
//                 // Add a message to the chatbox
//                 const nameSentMessage = { name: "Marita", message: "Submit Successfully. We're committed to guiding you every step of the way. Do you have a referral letter to Dr. O’Dwyer? <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('yes')\">Yes</button> <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('No')\">No</button>" };
//                 chatbox.messages.push(nameSentMessage);
//                 chatbox.updateChatText();
//
//             } else {
//                 // Handle any errors here
//                 console.error('Error sending name information to the backend');
//             }
//         });
// }
//



function submitName() {
    // Capture the name entered by the user
    const patientNameInput = document.getElementById('patientName-input');
    const patientNumberInput = document.getElementById('patientNumber-input');

    const patientName = patientNameInput.value;
    const patientNumber = patientNumberInput.value;


    // Create an object to hold the name and patient number
    const patientInfoData = { patientName, patientNumber };



    // Send the name information to the backend
    fetch('/add_name_number', {
        method: 'POST',
        body: JSON.stringify(patientInfoData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                // Replace the button with a "Submit Successfully" message
                const button = document.querySelector('.submit-name-button');
                button.innerHTML = "Submit Successfully";

                // Disable the button so the user cannot click it again
                button.disabled = true;
                console.log('name information sent to the backend');
                // Add a message to the chatbox
                // Add a loading message before processing the response
                let loadingMessage = {
                    name: "Marita",
                    message: "<div class=\"botTyping\"><div class=\"bounce1\"></div><div class=\"bounce2\"></div><div class=\"bounce3\"></div> "
                };

                // Clear the chat messages and add the loading message
                chatbox.messages = [loadingMessage];
                chatbox.updateChatText();


                // Simulate a delay for the loading effect (5 seconds)
                const loadingTimeout = 1000; // 5 seconds
                setTimeout(() => {
                    // Remove the loading message after the delay
                    chatbox.messages.pop();
                    chatbox.updateChatText();
                    let nameSentMessage = { name: "Marita",
                        message: "Thanks for sharing <br> Before we go any further I need to establish if you need more urgent help than we can offer, because we are not an emergency service <br> If you have a medical emergency, go to the nearest emergency department for immediate assistance."
                            +
                            "<button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('I confirm I do not need urgent help')\">I confirm I do not need urgent help</button> "
                            // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Female (including trans woman)')\">Female (including trans woman)</button>" +
                            // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Non-binary')\">Non-binary</button>" +
                            // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Female (including trans woman)')\">Other</button>"
                    };
                    chatbox.messages.push(nameSentMessage);
                    chatbox.updateChatText();
                }, loadingTimeout);

                // const nameSentMessage = { name: "Marita", message: "Submit Successfully. We're committed to guiding you every step of the way. Do you have a referral letter to Dr. O’Dwyer? <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('yes')\">Yes</button> <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('No')\">No</button>" };
                // chatbox.messages = [nameSentMessage];
                // chatbox.updateChatText();

            } else {
                // Handle any errors here
                console.error('Error sending name information to the backend');
            }
        });
}


function toggleSelection(button) {
    button.classList.toggle('selected');
    if (button.classList.contains('selected')) {
        button.style.backgroundColor = '#000000'; // Change to black when selected
    } else {
        button.style.backgroundColor = '#130185'; // Original color when not selected
    }
}

function submitPain() {
    // Get all selected buttons
    const selectedButtons = document.querySelectorAll('.submit-name-button.selected');
    const selectedValues = Array.from(selectedButtons).map(button => button.getAttribute('data-value'));

    // Create the data object with selected values
    const data = { selectedValues };

    console.log(selectedValues)

    // Send the name information to the backend
    fetch('/add_pain', {
        method: 'POST',
        body: JSON.stringify(selectedValues),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                // Replace the button with a "Submit Successfully" message
                const button = document.querySelector('.submit-name-button');
                button.innerHTML = "Submit Successfully";

                // Disable the button so the user cannot click it again
                button.disabled = true;
                console.log('name information sent to the backend');
                // Add a message to the chatbox
                // Add a loading message before processing the response
                let loadingMessage = {
                    name: "Marita",
                    message: "<div class=\"botTyping\"><div class=\"bounce1\"></div><div class=\"bounce2\"></div><div class=\"bounce3\"></div> "
                };

                // Clear the chat messages and add the loading message
                chatbox.messages = [loadingMessage];
                chatbox.updateChatText();


                // Simulate a delay for the loading effect (5 seconds)
                const loadingTimeout = 1000; // 5 seconds
                setTimeout(() => {
                    // Remove the loading message after the delay
                    chatbox.messages.pop();
                    chatbox.updateChatText();
                    let nameSentMessage = { name: "Marita",
                        message: "\n" +
                            "<br> It's helpful for us to understand the intensity of the pain  " +
                            "<br> Which of the following describes the intensity of your stomach pain?" +
                            "<br> Here's a scale that might be helpful"
                            +
                            "<br> <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Mild')\">Mild</button> " +
                            "<br> <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Moderate')\">Moderate</button> " +
                            "<br> <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Severe')\">Severe</button> " +
                            "<br> <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Extremly Severe')\">Extremly Severe</button> "

                        // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Female (including trans woman)')\">Female (including trans woman)</button>" +
                        // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Non-binary')\">Non-binary</button>" +
                        // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Female (including trans woman)')\">Other</button>"
                    };
                    chatbox.messages.push(nameSentMessage);
                    chatbox.updateChatText();
                }, loadingTimeout);

                // const nameSentMessage = { name: "Marita", message: "Submit Successfully. We're committed to guiding you every step of the way. Do you have a referral letter to Dr. O’Dwyer? <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('yes')\">Yes</button> <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('No')\">No</button>" };
                // chatbox.messages = [nameSentMessage];
                // chatbox.updateChatText();

            } else {
                // Handle any errors here
                console.error('Error sending name information to the backend');
            }
        });
}


function submitPainType() {
    // Get all selected buttons
    const selectedButtons = document.querySelectorAll('.submit-name-button.selected');
    const selectedValues = Array.from(selectedButtons).map(button => button.getAttribute('data-value'));

    // Create the data object with selected values
    const data = { selectedValues };


    // Send the name information to the backend
    fetch('/add_pain', {
        method: 'POST',
        body: JSON.stringify(selectedValues),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                // Replace the button with a "Submit Successfully" message
                const button = document.querySelector('.submit-name-button');
                button.innerHTML = "Submit Successfully";

                // Disable the button so the user cannot click it again
                button.disabled = true;
                console.log('name information sent to the backend');
                // Add a message to the chatbox
                // Add a loading message before processing the response
                let loadingMessage = {
                    name: "Marita",
                    message: "<div class=\"botTyping\"><div class=\"bounce1\"></div><div class=\"bounce2\"></div><div class=\"bounce3\"></div> "
                };

                // Clear the chat messages and add the loading message
                chatbox.messages = [loadingMessage];
                chatbox.updateChatText();


                // Simulate a delay for the loading effect (5 seconds)
                const loadingTimeout = 1000; // 5 seconds
                setTimeout(() => {
                    // Remove the loading message after the delay
                    chatbox.messages.pop();
                    chatbox.updateChatText();
                    let nameSentMessage = { name: "Marita",
                        message: "\n" +
                            "Does the pain spread anywhere? (you can select more than one option)"
                            +
                            "<button class='submit-name-button' onclick='toggleSelection(this)' style='background-color: #70b4fc; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;' data-value=\"To the lower back\" >To the lower back</button> " +
                            "<button class='submit-name-button' onclick='toggleSelection(this)' style='background-color: #70b4fc; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;' data-value=\"To the rectum\" >To the rectum</button> " +
                            "<button class='submit-name-button' onclick='toggleSelection(this)' style='background-color: #70b4fc; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;' data-value=\"To the thigh(s) or leg(s)\" >To the thigh(s) or leg(s)</button> " +
                            "<button class='submit-name-button' onclick='toggleSelection(this)' style='background-color: #70b4fc; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;' data-value=\"To the lower back\" >To the lower back</button> "
                        // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Female (including trans woman)')\">Female (including trans woman)</button>" +
                        // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Non-binary')\">Non-binary</button>" +
                        // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Female (including trans woman)')\">Other</button>"
                    };
                    chatbox.messages.push(nameSentMessage);
                    chatbox.updateChatText();
                }, loadingTimeout);

                // const nameSentMessage = { name: "Marita", message: "Submit Successfully. We're committed to guiding you every step of the way. Do you have a referral letter to Dr. O’Dwyer? <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('yes')\">Yes</button> <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('No')\">No</button>" };
                // chatbox.messages = [nameSentMessage];
                // chatbox.updateChatText();

            } else {
                // Handle any errors here
                console.error('Error sending name information to the backend');
            }
        });
}


function submitPainPlace() {
    // Get all selected buttons
    const selectedButtons = document.querySelectorAll('.submit-name-button.selected');
    const selectedValues = Array.from(selectedButtons).map(button => button.getAttribute('data-value'));

    // Create the data object with selected values
    const data = { selectedValues };

    console.log(selectedValues)

    // Send the name information to the backend
    fetch('/add_pain', {
        method: 'POST',
        body: JSON.stringify(selectedValues),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                // Replace the button with a "Submit Successfully" message
                const button = document.querySelector('.submit-name-button');
                button.innerHTML = "Submit Successfully";

                // Disable the button so the user cannot click it again
                button.disabled = true;
                console.log('name information sent to the backend');
                // Add a message to the chatbox
                // Add a loading message before processing the response
                let loadingMessage = {
                    name: "Marita",
                    message: "<div class=\"botTyping\"><div class=\"bounce1\"></div><div class=\"bounce2\"></div><div class=\"bounce3\"></div> "
                };

                // Clear the chat messages and add the loading message
                chatbox.messages = [loadingMessage];
                chatbox.updateChatText();


                // Simulate a delay for the loading effect (5 seconds)
                const loadingTimeout = 1000; // 5 seconds
                setTimeout(() => {
                    // Remove the loading message after the delay
                    chatbox.messages.pop();
                    chatbox.updateChatText();
                    let nameSentMessage = { name: "Marita",
                        message: "\n" +
                            "Thanks for sharing <br> " +
                            "And how often do you feel this stomach pain?" +
                            "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Less occasionally')\">Less occasionally</button> " +
                            "<button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Monthly')\">Monthly</button> " +
                            "<button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Weekly')\">Weekly</button> " +
                            "<button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Daily')\">Daily</button> "

                        // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Female (including trans woman)')\">Female (including trans woman)</button>" +
                        // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Non-binary')\">Non-binary</button>" +
                        // "<br><button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Female (including trans woman)')\">Other</button>"
                    };
                    chatbox.messages.push(nameSentMessage);
                    chatbox.updateChatText();
                }, loadingTimeout);

                // const nameSentMessage = { name: "Marita", message: "Submit Successfully. We're committed to guiding you every step of the way. Do you have a referral letter to Dr. O’Dwyer? <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('yes')\">Yes</button> <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('No')\">No</button>" };
                // chatbox.messages = [nameSentMessage];
                // chatbox.updateChatText();

            } else {
                // Handle any errors here
                console.error('Error sending name information to the backend');
            }
        });
}




function submitReferral() {
    // Get the image input element
    const imageInput = document.getElementById('image-input');
    console.log(imageInput.files[0])
    // Check if an image is selected
    if (imageInput.files.length > 0) {
        // Create FormData and append the selected image
        const formData = new FormData();
        formData.append('image', imageInput.files[0]);

        // Replace the button with a "Submit Successfully" message
        const button = document.querySelector('.submit-referral-button');
        button.innerHTML = "Submit Successfully";

        // Disable the button so the user cannot click it again
        button.disabled = true;

        // Send the image to the backend
        fetch('/add', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (response.ok) {
                    console.log('Image submitted successfully');
                } else {
                    console.error('Error submitting image');
                }
            });
    } else {
        alert('Please select an image before submitting.');
    }
}


class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
        this.promptDisplayed = false; // Flag to track if the initial prompt has been shown

    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }


    toggleState(chatbox) {
        this.state = !this.state;

        // show or hide the box
        if (this.state) {
            chatbox.classList.add('chatbox--active');

            if (!this.promptDisplayed) {
                // Display a loading message and effect
                const loadingMessage = {
                    name: "Marita",
                    message: "<div class=\"botTyping\"><div class=\"bounce1\"></div><div class=\"bounce2\"></div><div class=\"bounce3\"></div> "
                };
                this.messages.push(loadingMessage);
                this.updateChatText(chatbox);

                // Simulate a loading effect with a delay
                const loadingTimeout = 500; // Adjust the loading time as needed

                setTimeout(() => {
                    // Remove the loading message
                    this.messages.pop();
                    this.updateChatText(chatbox);

                    // Add a delay before showing the prompt message
                    const typingTimeout = 500; // Adjust the typing time as needed

                    setTimeout(() => {
                        this.messages.push({
                            name: "Marita",
                            message: "Hi, this is your health assistant provided by Dr. O’Dwyer at the Midland Regional Hospital to help you with your referral. Are you referred from a GP?" +
                                " <br> <button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('Yes, I have a GP referral to Dr. O Dwyer')\">Yes, I have a GP referral to Dr. O Dwyer</button>" +
                                "<button class=\"submit-name-button\" style=\"background-color: #130185; color: #fff; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;\" onclick=\"chooseResponse('No, I don not have a GP referral')\">No, I don not have a GP referral</button>"
                        });
                        this.promptDisplayed = true;
                        this.updateChatText(chatbox);
                    }, typingTimeout);
                }, loadingTimeout);
            }
        } else {
            chatbox.classList.remove('chatbox--active');
        }
    }





    onSendButton
    (chatbox) {
        var textField = document.getElementById('resultPanel');
        let text1 = textField.value;
        if (text1 === "") {
            return;
        }
        // Create an empty list to store r.answer values


        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);


        fetch('/colonoscopy_predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(r => r.json())


            .then(r => {

                // Add a loading message before processing the response
                let loadingMessage = {
                    name: "Marita",
                    message: "<div class=\"botTyping\"><div class=\"bounce1\"></div><div class=\"bounce2\"></div><div class=\"bounce3\"></div> "
                };

                // Clear the chat messages and add the loading message
                this.messages = [loadingMessage];
                this.updateChatText(chatbox)


                // Simulate a delay for the loading effect (5 seconds)
                const loadingTimeout = 1000; // 5 seconds



                setTimeout(() => {
                    // Remove the loading message after the delay
                    this.messages.pop();
                    this.updateChatText(chatbox);

                    // Add the response message
                    let msg2 = { name: "Marita", message: r.answer };
                    this.messages.push(msg2);
                    this.updateChatText(chatbox);

                }, loadingTimeout);

                // let msg2 = { name: "Marita", message: r.answer };
                // this.messages.push(msg2);




                // this.updateChatText(chatbox)
                // textField.value = ''


            }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
        });


    }

    // Make sure that this method is working correctly
    updateChatText() {
        if (!this.args.chatBox) {
            console.error('chatBox element is not correctly selected.');
            return;
        }

        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Marita") {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';
            } else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
            }
        });

        const chatmessage = this.args.chatBox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}

const chatbox = new Chatbox();

// Just show the prompt directly without clicking
chatbox.toggleState(chatbox.args.chatBox);
chatbox.display();
