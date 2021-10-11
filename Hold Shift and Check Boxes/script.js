const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
    // console.log(e);

    let inBetween = false;
    if (e.shiftKey && this.checked) {
        //loop over every single check box
        checkboxes.forEach(checkbox => {
            // console.log("ASDASD")
            // console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                // console.log('Starting to check them in between');                
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));