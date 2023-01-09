import { Component } from "react";
import Varijabla from "./Varijabla";

class App extends Component {
    state = {
        users: [
            {
                ime: "Branko",
                prezime: "Branković",
                dob: 32,
            },
            {
                ime: "Janko",
                prezime: "Janković",
                dob: 42,
            },
            {
                ime: "Stanko",
                prezime: "Stanković",
                dob: 52,
            },
        ],

        proizvoljnaVarijabla: "Neki text...",
    };

    render() {
        const { users, proizvoljnaVarijabla } = this.state;

        return (
            <div>
                <Varijabla text = {proizvoljnaVarijabla} />
                {users.map((user) => {
                    return (
                        <div>
                            <h2>Ime: {user.ime}</h2>
                            <h2>Prezime: {user.prezime}</h2>
                            <h3>Dob: {user.dob}</h3>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;
