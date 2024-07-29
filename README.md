This project is a simple web application that allows users to maintain a shopping list. Users can add items to the list, mark items as purchased, and clear the entire list.

Features
Basic Features
Add Item: Users can enter an item into the input field and click "Add" to add it to the list.
Mark Purchased: Clicking on an item in the list toggles its purchased status, visually indicating it as purchased (e.g., through strikethrough text).
Clear List: Clears all items from the list when the "Clear List" button is clicked.
Bonus Features
Edit Item: Option to edit existing list items.
Persistence: Utilizes local storage to save the list, preserving items even after the page is refreshed.
Implementation Details
HTML Structure
The HTML structure consists of:

An input field for entering new items (id="new-item").
A button to add items to the list (id="add-button").
A list container (id="item-list") to display added items.
Each item in the list has a checkbox or clickable area to mark it as purchased.
Buttons to mark items as purchased and clear the list (id="mark-purchased" and id="clear-list" respectively).
JavaScript Functionality
JavaScript handles:

Adding new items to the list dynamically when the "Add" button is clicked.
Toggling the purchased status of items when clicked.
Clearing all items from the list when the "Clear List" button is clicked.
Optionally, editing existing items directly in place.
Utilizing local storage to save and load the shopping list data, ensuring persistence across page reloads.
Event Handling
Add Button (#add-button): Adds a new item to the list when clicked.
List Items: Clicking on a list item toggles its purchased status.
Clear List Button (#clear-list): Clears all items from the list when clicked.
Local Storage: Saves and loads data to/from local storage to maintain the list state across sessions.
Usage
To use the application:

Enter an item into the input field and click "Add" to add it to the list.
Click on an item in the list to mark it as purchased (or undo the purchase).
Click "Clear List" to remove all items from the list.




Contributing
Pull requests and suggestions are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License. 
# code3-challange