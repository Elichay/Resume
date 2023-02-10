import ElichayImg from '../assets/img/ElichayNoBg.png'


export function ResumeHeader({contactBtnVisible, handleOpenModal}) {
    return (
        <section className="header-container">
            <div className="header flex secondary-layout justify-between">
                <div className="header-elichay flex">
                    <img src={ElichayImg} alt="Elichay Kaplan" className="header-img" />
                    <div className="header-title">
                    <h1 className="header-name">Elichay Kaplan</h1>
                    <h4 className="header-job">Full Stack Developer & Economist</h4>
                    </div>
                </div>
                <button className="contact-me contact-btn" onClick={handleOpenModal} style={{ display: contactBtnVisible ? 'none' : '' }}>Contact me</button>
                <button className="contact-me2 contact-btn" onClick={handleOpenModal}>Contact me</button>
            </div>
        </section>
    )
}

