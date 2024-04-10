export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-500 text-[#FEE715] shadow-sm focus:ring-[#FEE715] ' +
                className
            }
        />
    );
}
