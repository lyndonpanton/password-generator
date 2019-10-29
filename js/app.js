window.onload = function() {
    // get the form element
    const form = document.getElementById("form");
    // when form is submitted
    form.addEventListener("submit", function(event) {
        // prevent page refresh
        event.preventDefault();
        // get user-defined length
        const length = this.number.value;
        // get output element
        const output = document.getElementById("result");
        
        // create an empty string
        let string = "";
        
        // for user-defined amount of times...
        for (let i = 0; i < length; i++) {
            // create a random character
            const charCode = Math.floor((Math.random() * 43) + 48);
            // add it to the string
            string = string + String.fromCharCode(charCode);
        }
        
        // output the created string to the browser
        output.textContent = string;
    });
}