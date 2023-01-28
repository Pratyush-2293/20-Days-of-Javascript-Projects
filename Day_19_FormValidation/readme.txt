Form Validation Project
- In this project I have made a sample registration form for the VIT Bhopal Game Development Form with form validation.
- The form uses both HTML and JavaScript to validate user input before submission.
- The name input should be more than 3 and less than 4 characters.
- The registration number must be 10 characters long.
- The phone number must be 10 digits in length.
- If there is an error in the user input, the error message will be displayed at the bottom of the form.

Test Cases:
- Case 0: Name, Registration number and Email fields are left empty and submit button is pressed.
- Case 1: All fields are filled, but name field is filled with text "AB" and submit button is pressed.
- Case 2: All fields are filled, but registration number field is filled with text "AB" and submit button is pressed.
- Case 3: All fields are filled, but phone number is filled with number "123" and submit button is pressed.
- Case 4: All fields are filled with correct data and submit button is pressed.

Expected Output:
- Case 0: A pop is displayed, which says that fields cannot be empty.
- Case 1: An error message "Name must be 3 characters or longer." is shown and form is not submitted.
- Case 2: An error message "Registration number must be 10 characters." is shown and form is not submitted.
- Case 3: An error message "Phone number must be 10 digits." is shown and form is not submitted.
- Case 4: The form is submitted successfully.

You can try out the project for yourself by clicking on the link below:
https://pratyush2293-formvalidation.netlify.app
