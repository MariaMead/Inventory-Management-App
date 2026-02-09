import { useState } from "react";

export function useEdit() {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [data, setData] = useState<{}>({});

    //temp data storage
    const [ tempData, setTempData] = useState(data);

    const handleEdit = () => {
        setTempData(data);
        setIsEditing(true);
    };

    const handleSave = () => {
        setData(tempData);
        setIsEditing(false);
    };

    const handCancle = () => {
        setTempData(data);
        setIsEditing(false);
    };

    const onChange = (field: string, value: string) => {
        setTempData({...data, [field]: value});
    };

    return {
        isEditing,
        handleEdit,
        handleSave,
        handCancle,
        onChange
    }
}