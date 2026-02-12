import { useState } from "react";


/**
 * This is a custom hook that will handle editing in a component.
 * This will handle the edit, save, cancel and onChange to update the state
 * of the data being edited.
 * The data is handled in temp data before its implemented as a change.
 * @param initialData - Initial data to be edited. Object(Record<string, string>)
 * @returns -{
 *  isEditing: Is a boolean to check whether state is editing in edit mode. 
 *  data: The confirmed/saved version of the data.
 *  tempData: The "in-progress" draft data (bind this to your inputs).
 *  handleEdit: Function to handle the data being edited sync temp data and current data.
 *  handleSave: Function that handles the saving of the new data.
 *  handCancel: Function that handles if the edit is canceled and discard temp data.
 *  onChange: Handles the change of the previous data with changes made though edit.
 * }
 */
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

    const handleCancel = () => {
        setTempData(data);
        setIsEditing(false);
    };

    const onChange = (field: string, value: string) => {
        setTempData(prev => ({...prev, [field]: value}));
    };

    return {
        isEditing,
        data,
        tempData,
        handleEdit,
        handleSave,
        handleCancel,
        onChange
    }
}