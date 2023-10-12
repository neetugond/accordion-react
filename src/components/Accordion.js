import { useState } from "react"
// Child component
const Section = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className="section">
            <div className="heading">
            <h3>
                {title}

            </h3>

            {isVisible ? <button onClick={() => setIsVisible(false)}><span class="material-symbols-outlined">
                expand_less
            </span></button> : <button onClick={() => setIsVisible(true)}><span class="material-symbols-outlined">
                expand_more
            </span></button>}
            </div>
            <div className="description">
                {isVisible && <p>{ description}</p>}
            </div>
            

        </div>
    )
}

// parent component
const Accordion = () => {
    return (
        <div className="Insta-main">
            <h1>Accordion</h1>
            <Section title={'About'} description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.'} />

            <Section title={'Team'} description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.'} />

            <Section title={'Careers'} description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.'} />
        </div>
    )
}

export default Accordion