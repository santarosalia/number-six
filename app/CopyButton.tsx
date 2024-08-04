'use client'
const CopyButton = () => {
    const onClickCopy = () => {
        console.log(1);
    }
    return (
        <span className="text-gray-50 text-xs" onClick={onClickCopy}>복사</span>
    )
}

export default CopyButton;