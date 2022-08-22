import ReactDOM from "react-dom";
const Overlay=(props)=>{
    return <>{ReactDOM.createPortal(
        <div className="fixed w-full h-full bg-black opacity-0 ">{props.children}</div>,
        document.querySelector("#overlay")
    )}
    </>
};
export default Overlay;