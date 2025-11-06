import react from "react";

function StudentCard({ id, name, age }) {
    return (
        <div>
            <div id="product-card">
                <h3>{name}</h3>
                <p>ID: {id}</p>
                <p>Age: {age}</p>
            </div>
        </div>
    )
}

export default StudentCard;