
import { useRef, useState } from "react"
import { ResumeBody } from "../cmps/resume-body"
import { ResumeFooter } from "../cmps/resume-footer"
import { ResumeHeader } from "../cmps/resume-header"
import useOnScreen from '../customHooks/useOnScreen.js'
import { ContactInfo } from "../cmps/contact-info"

import { useModal } from '../customHooks/useModal'

export function Resume() {
    const { openModal, Modal } = useModal()


    function handleOpenModal() {
        openModal(<ContactInfo /> )
    }   

    const contactBtnRef = useRef()
    const contactBtnVisible = useOnScreen(contactBtnRef, '-43px')
    return (
        <>
            <ResumeHeader contactBtnVisible={contactBtnVisible} handleOpenModal={handleOpenModal}/>
            <div className='details-modal'>
                {' '}
                <Modal />
            </div>
            <ResumeBody contactBtnRef={contactBtnRef}/>
            <ResumeFooter/>
        </>
    )
}