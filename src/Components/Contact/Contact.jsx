import SplitText from "../../animation/SplitText";


const Contact = () => {
    const handleAnimationComplete = () => {
        // console.log('All letters have animated!');
    };
    return (
        <div className="flex flex-wrap  " >
            <div  className=" md:w-[49%] flex flex-wrap md:pr-10">


                <SplitText
                    text=" Contact With Me"
                    className="text-4xl md:text-6xl my-3 text-[#0be890]"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />

                <h3>{`Let's work together to build outstanding web experiences!`}</h3>
                <p>As a dedicated Web Developer, I collaborate closely with my clients on every project. My goal is not only to deliver exceptional work that drives business growth but also to establish long-term relationships built on trust and genuine care. Let’s create something remarkable together!</p>
            </div>
            {/*  */}
            <div  className=" md:w-[49%]  text-left ">
                <SplitText
                    text="My Address"
                    className="text-4xl md:text-6xl my-3 text-[#0be890]"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />

                <p>Feni, Chattogram, Bangladesh </p>
                <h2>Contact Email</h2>
                <a className="text-[#0be890]" href="mailto:mohiu5204@gmail.com">mohiu5204@gmail.com</a>

                <h2>Find Me on Phone/Whatsapp/Telegram</h2>
                <a className="text-[#0be890]" href="tel:+8801865540885">+88 01865540885</a>
            </div>
        </div>
    );
};

export default Contact;