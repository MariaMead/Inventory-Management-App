import { useState } from "react";

export function useEdit(initialData: Record<string, string>) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [data, setData] = useState<Record<string, string>>(initialData);

    //temp data storage
    const [ tempData, setTempData] = useState<Record<string, string>>(data);

    const handleEdit = () => {
        setTempData(data);
        setIsEditing(true);
    };

    const handleSave = () => {
        setData(tempData);
        setIsEditing(false);
    };

    const handCancel = () => {
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
        handCancel,
        onChange
    }
}