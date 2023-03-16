import React from "react";

function Footer() {
    return (
        <footer className="info">
            <p>Click to edit a todo</p>
            <p>Created by <a href="https://github.com/bengugultekin">Bengunur Gultekin</a></p>
            <p>Part of <a href="https://github.com/bengugultekin/todo-app">Todo-App Oper Source Codes</a></p>
        </footer>
    );
}

export default React.memo(Footer);