const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");


// console.log(ourItemDiv);
// console.log(openIcon);
// console.log(closeIcon);

// Loop through all elements, runs only once during the page load to set the elements' values and events.
// BUT the function runs as many times as the user clicks on the element; the loop is used only to initialize values and events.
// imagine it like loop sets the static code for the page
for (let i = 0; i < ourItemDiv.length; i++) {        

    closeIcon[i].style.display = "none";    //set all iconClose class elements to display none when the page loads

    ourItemDiv[i].addEventListener("click", () => {     //first: set click event to all item elements, 2nd: now when user click the element, fn executes to toggle the "active" class (add/remove)
        const result = ourItemDiv[i].classList.toggle("active");  //when user clicks the item element, result will contain "true"

        if (result) {    // If the 'active' class was added (i.e., result is true)
            closeIcon[i].style.display = "block";
            openIcon[i].style.display = "none";
        } 
        else {          // If the 'active' class was removed (i.e., result is false)
            closeIcon[i].style.display = "none";
            openIcon[i].style.display = "block";
        }
    });

}


// if you click twice, the result will be false on the second click.

// Here's why:
// The toggle() method toggles the class. On the first click, it adds the "active" class, so toggle() returns true.
// On the second click, it removes the "active" class, so toggle() returns false.
// So, after two clicks, result will be false.