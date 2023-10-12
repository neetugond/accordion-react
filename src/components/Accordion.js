import { useState } from "react"
// Child component
const Section = ({ title, description, isVisible, setIsVisible }) => {
    // const [isVisible, setIsVisible] = useState(false)
    return (
        <div className="section">
            <div className="heading">
                <h3>
                    {title}

                </h3>

                {isVisible ? (<button onClick={() => setIsVisible(false)}><span class="material-symbols-outlined">
                    expand_less
                </span></button>) : (<button onClick={() => setIsVisible(true)}><span class="material-symbols-outlined">
                    expand_more
                </span></button>)}
            </div>
            <div className="description">
                {isVisible && <p>{description}</p>}
            </div>


        </div>
    )
}
// 1.show only description of section only which click other section hide automatically.
//--- all the children have control over description wether to show or not they do have another section component control. show we have to give all children control to parent component so that parent can show the data when we click perticular section and hide other data. 
// giving control from child state to parent is known as - lifting a state up


// parent component
const Accordion = () => {
    // 2. children state control is now parent managing
    // 3.Optimization - i need to focus what i need to show at once. so i can keep key for perticular section
    const [visibleSection, setVisibleSection] = useState("");
    return (
        <div className="Insta-main">
            <h1>Accordion</h1>
            <Section title={'About'} description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.'}
                isVisible={visibleSection === 'about'} //passing boolean if its true it will show
                setIsVisible={() => setVisibleSection('about')}
            />

            <Section title={'Team'} description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.'}
                isVisible={visibleSection === 'team'}
                setIsVisible={() => setVisibleSection('team')}
            />

            <Section title={'Careers'} description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.'}
                isVisible={visibleSection === 'careers'}
                setIsVisible={() => setVisibleSection('careers')}
            />
        </div>
    )
}

export default Accordion