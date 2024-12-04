interface Options {
    label: string;
    value: number | string;
}

interface InputFieldProps {
    value: string | number;
    setState: (prev: any) => void;
    data: {
        label: string;
        type: string;
        key: string;
        placeholder?: string;
        options?: Options[];
    };
}

const InputField = ({ setState, data, value }: InputFieldProps) => {
    const { label, type, placeholder = '', key, options } = data;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newValue = type === 'number' ? parseInt(e.target.value) : e.target.value;
        setState((prev: any) => ({ ...prev, [key]: newValue }));
    };

    options ? (
        <select className='w-full px-4 py-2 bg-gray-700 text-white rounded-md' value={value} onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    ) : null;
    return (
        <div className='flex flex-col space-y-1'>
            <label className='text-sm text-gray-300'>{label}</label>
            {type === 'select' && options ? (
                <select
                    className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
                    value={value}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            )}
        </div>
    );
};

export default InputField;
