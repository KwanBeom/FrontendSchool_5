import useMouseLocation from "../hooks/useMouseLocation";

export default function MouseBox() {
    const location = useMouseLocation();
    return (
        <div
            style={{
                width: 100,
                height: 100,
                backgroundColor: "royalblue",
                transform: `translate(${location.x}px, ${location.y}px)`,
            }}
        ></div>
    );
}
