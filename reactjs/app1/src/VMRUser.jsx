import { useState } from "react";

export default function VMRUser() {
    const [welcomemessage, setWelcomeMessage] = useState("");
    const [user, setUser] = useState({});
    const [students, setStudents] = useState("");
    const [imgurl, setimgurl] = useState("");
    const showmessage = () => {
        setWelcomeMessage("welcome to React js..thanks for clicking")

    };

    const displayPersonDetails = () => {
        setUser({
            fname: "swapna",
            lname: "pavi",
            email: "smswapna@gmail.com"
        });
    };
    const disaPlayStudentsDetails = () => {
        setStudents(["swapna", "pavi", "anusha"]);


    };
    // const showImageDetails = () => {
    //     setImgUrl("https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    //     );
    // };
    return(
        <div>
            <button onClick={{showmessage}}>Display Message</button>
        </div>
    )

}
