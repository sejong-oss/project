export function Container({ children, className = "" }) {
    return (
        <div className={`max-w-360 mx-auto w-full ${className}`}>
            {children}
        </div>
    );
}
