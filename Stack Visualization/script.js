let stack = [];

// Display stack 
function displayStack(highlightIndex = -1) {
    let stackDiv = document.getElementById("stack");
    stackDiv.innerHTML = "";

    for (let i = stack.length - 1; i >= 0; i--) {
        let div = document.createElement("div");
        div.className = "box";
        div.innerText = stack[i];

        // Highlight only when index matches
        if (i === highlightIndex) {
            div.classList.add("top");
        }

        stackDiv.appendChild(div);
    }
}


function showMessage(msg) {
    document.getElementById("message").innerText = msg;
}

// PUSH
function push() {
    let value = document.getElementById("value").value;

    if (value === "") {
        showMessage("Enter a value!");
        return;
    }

    stack.push(value);
    displayStack(); // no highlight
    showMessage("Pushed: " + value);

    document.getElementById("value").value = "";
}

// POP
function pop() {
    if (stack.length === 0) {
        showMessage("Stack Underflow!");
        return;
    }

    let removed = stack.pop();
    displayStack(); // no highlight
    showMessage("Popped: " + removed);
}

// PEEK 
function peek() {
    if (stack.length === 0) {
        showMessage("Stack is empty!");
        return;
    }

    let topIndex = stack.length - 1;
    let top = stack[topIndex];

    displayStack(topIndex);
    showMessage("Top element: " + top);
}