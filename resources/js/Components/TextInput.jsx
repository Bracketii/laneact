import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref || useRef();

    useEffect(() => {
        if (isFocused && input.current) {
            input.current.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={`border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 focus:border-[#FEE715] focus:ring-gray-100 dark:focus:ring-gray-900 rounded-md shadow-sm dark:text-gray-600 ${className}`}
            ref={input}
        />
    );
});
