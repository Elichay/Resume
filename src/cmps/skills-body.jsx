
import { useState } from 'react'

export function SkillsBody({contactBtnRef, onOpenModal}) {
    const [refVisible, setRefVisible] = useState(false)

    return (
        <div className="body-skills-container">
            <div className="body-skills flex">
                <h2 className="body-skills-title">Skills:</h2>
                <div className="body-skills-list">
                    <div className="body-skills-list-item">
                        <p>
                        <span className="skill-title">Languages: </span>
                        </p>
                        <p>
                        <span className="skill-txt">Hebrew - Mother tongue.</span>
                        </p>
                        <p>
                        <span className="skill-txt">English - Fluent.</span>
                        </p>
                    </div>
                    <div className="body-skills-list-item">
                        <p>
                        <span className="skill-title">Programming tools: </span>
                        </p>
                        <span className="skill-txt">JavaScript, React js., Redux, Vue, CSS, SCSS, Node.js, MongoDB, Socket.io, SQL </span>
                    </div>
                    <div className="body-skills-list-item">
                        <p>
                        <span className="skill-title">Computer Applications: </span>
                        </p>
                        <span className="skill-txt">MS office, High Excel proficiency level (including Macro scripts).</span>
                    </div>
                </div>
                <div className='contact-btns-ref' ref={el => { contactBtnRef.current = el; setRefVisible(!!el) }}></div>
                <button className="body-skills-btn contact-btn" onClick={onOpenModal}>Contact me</button>
            </div>
        </div>
    )
}