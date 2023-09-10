export default function Btn() {
    return (
        <button className="btn" onClick={() => {
            window.alert("Button clicked!");
        }}>Button</button>
    )
}