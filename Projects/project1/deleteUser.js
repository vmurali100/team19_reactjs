async function deleteFunction(i) {
    const shouldDelete = await showCustomPopup();

    if (shouldDelete) {
        try {
            const response = await fetch("http://localhost:3000/Users/" + data[i].id, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error("Failed to delete. Status:" + response.status);
            }

            console.log("Deletion successful", i);
        } catch (error) {
            console.error("Error deleting:", error.message);
        }
    } else {
        console.log("Deletion canceled");
    }
}

function createCustomPopup() {
    var popup = document.createElement("div");
    popup.classList.add("custom-popup");

    popup.innerHTML = `
    <p id="deleteMessage">Are you sure you want to delete this item?</p>
    <div id="buttonDiv">
    <button id='confirmButton'  class="primary-button">Yes</button>
    <button id='cancelButton' class="danger-button">No</button>
    </div>`
    document.body.appendChild(popup);
    return popup;
}


async function showCustomPopup() {
  return  new Promise((resolve, reject) => {
        var popup = createCustomPopup();
    
        var confirmBtn = popup.querySelector("#confirmButton");
        confirmBtn.addEventListener("click", function () {
            resolve(true);
            popup.style.display = "none";
        });
    
        var cancelBtn = popup.querySelector("#cancelButton");
        cancelBtn.addEventListener("click", function () {
            resolve(false);
            popup.style.display = "none";
        });
    });
    
}

