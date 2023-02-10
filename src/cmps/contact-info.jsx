import { FaEnvelope  } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function ContactInfo() {

function onCallNumber() {
    window.location.href ="tel:+972544789188"
}

function onSendEmail() {
    window.location.href ="mailto:elichay_kaplan@yahoo.com"
}
    return (
        <>
            <h2 className="contact-title">Contact details:</h2>
            <div className="contact-detail">
                <div className="email-detail">
                    <span className="contact-icon email-icon" onClick={onSendEmail}><FaEnvelope /></span>
                    <span className="contact-link email-link">Elichay_Kaplan@Yahoo.com</span>
                </div>
            </div>
            <div className="contact-detail">
                <div className="phone-detail">
                    <span className="contact-icon phone-icon" onClick={onCallNumber}><FaPhoneAlt /></span>
                    <span className="contact-link phone-link">+972-54-4789-188</span>
                </div>
            </div>
            <div className="contact-detail">
                <div className="linkdin-detail">
                    <a href="https://www.linkedin.com/in/elichay-kaplan-15a915152/" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="contact-icon linkdein-icon"><FaLinkedin /></span>
                    </a>
                    <span className="contact-link linkdein-link">linkedin.com/in/</span><span className="linkdein-mini-link">
                        elichay-kaplan-15a915152</span>
                </div>
            </div>

        </>
    )
}