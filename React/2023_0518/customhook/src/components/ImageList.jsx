import ImageItem from "./ImageItem";


export default function ImageList({setLoad}) {
    return (
        <ul>
            <ImageItem setLoad={setLoad}/>
        </ul>
    );
}
