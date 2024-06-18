

const Contact = () => {
    return (
        <div className="flex flex-wrap font-Playwrite " >
           <div data-aos="fade-up" className=" md:w-[49%] flex flex-wrap md:pr-5"><h2 className="text-4xl md:text-6xl my-3 text-[#0be890]">
           Contact With Me
            </h2>
            <h3>{`Let's work together to build outstanding web experiences!`}</h3>
            <p>As a dedicated Web Developer, I collaborate closely with my clients on every project. My goal is not only to deliver exceptional work that drives business growth but also to establish long-term relationships built on trust and genuine care. Let’s create something remarkable together!</p></div>
            {/*  */}
           <div data-aos="fade-up" className=" md:w-[49%] flex flex-col text-left ">
            <h2 className="text-4xl md:text-6xl my-3 text-[#0be890]">
            My Address
            </h2>
            <br />
            <p>Feni, Chattogram, Bangladesh </p> <br />
            <h2>Contact Email</h2> <br />
            <a   className="">mohiu5204@gmail.com</a> <br />

            <h2>Find Me on Phone/Whatsapp/Telegram</h2> <br />
            <p>+88 01865540885</p>
            </div>
        </div>
    );
};

export default Contact;