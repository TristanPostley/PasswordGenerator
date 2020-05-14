Deployed at https://tristanpostley.github.io/PasswordGenerator/

Function:

Prompts the user for length of password (must be between 8-128 characters)

Confirms desired character types (lower case, upper case, special, numbers)

Displays page with text box and generate password button

On button press: populates text box with random password meeting specifications


Dev log:

Created variables to save user prompt/confirms

Created arrays for each character type

Created generatePassword function

    Creates an empty string and an empty array

    For each type of character

        Check if type is requested, if yes

        Add each character in the character array to the empty array

    Add random character from populated array to empty string as many times as the requested password length
    
    Return populated string

Google how querySelector works

Replace value with placeholder to link writePassword function to HTML textbox

Add catch for invalid password length

Add catch for no usable characters
