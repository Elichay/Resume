


export function AboutBody() {
    return (
        <>
            <h2 className="body-title about-title">About:</h2>
            <p className="body-text about-text">
                Frontend / Full Stack Web Developer with experience in
                writing single-page-applications using the latest WEB technologies,
                including React .js, Redux and Node.js.
            </p>
            <p className="body-text about-text">
                Graduate of the Coding Academy - an intensive coding bootcamp
                (640 hours) that qualifies Full Stack developers.
            </p>
            <p className="body-text about-text">
                Former Credit Operations Manager at HSBC Bank PLC.
            </p>
            <div className="body-text">
                <span className="body-text about-mini-title"> Link to my last project:</span>
                <div>
                    <a href="https://akebnb-rental-service.onrender.com/" target="_blank" rel="noopener noreferrer" className="body-text about-link">
                        akabnb - Vacation & Rental
                    </a>
                    <p className="body-text about-text">
                        Airbnb-like marketplace using React, Node, MongoDB, Socket.io, and more.
                    </p>
                </div>
            </div>
        </>
    )
}