import { Spinner } from "react-bootstrap";

export default function Loading() {
    return (
        <div className="spinner-container">
            <div className="spinner-div">
                <Spinner color="primary" animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div>
    )
}
