import { useState } from "react";

type Validation = {
    isValid: boolean;
    error: string;
}

export function useFormInput() {
    const [ value, setValue ] = useState<string>("");
    const [ error, setError ] = useState<string | null>(null);

    const onchange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setValue(event.target.value);
        setError(null);
    }

    // validate for error message
    const validateFormError = (
        valueValidator: (value: string) => string | null // to check if there is a error message or not
    ): Validation => {
        const errorMessage = valueValidator(value);

        if(errorMessage) {
            setError(errorMessage);
            return { isValid: false, error: errorMessage};
        }

        setError(null);
        return {isValid: true, error: ""};
    }

    return {
        value,
        setValue,
        onchange,
        error,
        setError,
        validateFormError
    }
    
}