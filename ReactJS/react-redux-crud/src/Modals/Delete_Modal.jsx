import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Delete_Modal = ({confirmDelete,cancelDelete}) => {
    const [visible, setVisible] = useState(true)

    return (
        <>

            <Modal 
             title="Delete User"
             visible={visible}
             onOk={confirmDelete}
             onCancel={cancelDelete}
            >

<h1>Are you sure Want to Delete</h1>


            </Modal>
        </>
    );
};

export default Delete_Modal;