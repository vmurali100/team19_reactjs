import React, { useState } from 'react';



const Hoc = (HocComponent) => {
    const NewHoc = (props) => {
        const [users, setUsers] = useState([
            {
                "fname": "Gia",
                "lname": "Scheider",
                "tel": "(138)304-7951",
                "address": "4327 Placerat Ln",
                "city": "Arvada",
                "state": "PA",
                "zip": 57457
            },
            {
                "fname": "Beverly",
                "lname": "Valkanet",
                "tel": "(493)060-5220",
                "address": "930 Quis St",
                "city": "Elizabethtown",
                "state": "RI",
                "zip": 45272
            },
            {
                "fname": "Luciana",
                "lname": "Haskin",
                "tel": "(969)972-8870",
                "address": "5359 Lorem Ave",
                "city": "Anderson",
                "state": "OR",
                "zip": 11602
            },
            {
                "fname": "Ron",
                "lname": "Walsh",
                "tel": "(133)224-4359",
                "address": "8036 Placerat Rd",
                "city": "Sylvania",
                "state": "WY",
                "zip": 28748
            },
            {
                "fname": "Greg",
                "lname": "Diramio",
                "tel": "(744)116-1676",
                "address": "2239 Turpis Rd",
                "city": "Prattville",
                "state": "SD",
                "zip": 58034
            }

        ]);


        return (
            <div>
                <HocComponent users={users} {...props} />
            </div>
        );
    };


    return NewHoc;
};
export default Hoc;