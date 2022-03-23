import "./CallToAction.css"

function CallToAction () {
    return (
        <div className="call-to-action rounded-3">
            <aside className="container p-4 p-sm-5 my-6">
                <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                    <div className="mb-4 mb-xl-0">
                        <div className="fs-3 fw-bold text-white">Shop updates, delivered to you.</div>
                        <div className="text-white-50">Sign up for our mailing list and never miss shop restocks!</div>
                    </div>
                    <div className="ms-xl-4">
                        <div className="input-group mb-2">
                            <input className="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                            <button className="btn btn-outline-light" id="button-newsletter" type="button">Sign up</button>
                        </div>
                        <div className="small text-white-50">Don't worry, we dont have time to spam you. We respect your privacy.</div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default CallToAction;