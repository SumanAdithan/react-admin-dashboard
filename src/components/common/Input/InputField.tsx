interface InputFieldProps {
    label: string;
    type: string;
    value: string | number;
    setState: (prev: any) => void;
    placeholder: string;
    field: string;
}

const InputField = ({ label, value, setState, type = 'text', placeholder, field }: InputFieldProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = type === 'number' ? parseInt(e.target.value) : e.target.value;
        setState((prev: any) => ({ ...prev, [field]: newValue }));
    };
    return (
        <div className='flex flex-col space-y-1'>
            <label className='text-sm text-gray-300'>{label}</label>
            <input
                type={type}
                className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default InputField;
