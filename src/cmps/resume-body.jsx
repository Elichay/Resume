import { AboutBody } from "./about-body"
import { EducationBody } from "./education-body"
import { ExperienceBody } from "./expriance-body"
import { SkillsBody } from "./skills-body"
import { ContactInfo } from "./contact-info"

import { useModal } from '../customHooks/useModal'
import { PrintPdf } from "./print-pdf"

export function ResumeBody({ contactBtnRef, onOpenModal}) {
    const { openModal, Modal } = useModal()


    function onOpenModal() {
        openModal(<ContactInfo /> )
    }   

 

    return (
        <section className="secondary-layout">
            <div className='details-modal'>
                {' '}
                <Modal />
            </div>
            <section className="resume-body grid">
                <section className="body-about-left">
                    <div className="body-about flex section-box">
                        <AboutBody />
                    </div>
                    <div className="body-education flex section-box">
                        <EducationBody />
                    </div>
                    <div className="body-print flex section-box">
                        <PrintPdf />
                    </div>

                </section>
                <section className="body-about-right">
                    <SkillsBody contactBtnRef={contactBtnRef} onOpenModal={onOpenModal} />
                </section>
            </section>
            <div className="body-experience flex section-box">
                <ExperienceBody />
            </div>
        </section>
    )
}