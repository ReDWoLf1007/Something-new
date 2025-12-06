import { useState } from "react";
export const Contact = () => {

    const URL = `${import.meta.env.VITE_API_URL}/api/form/contact`;
    
    const [contact, setContact] = useState({
        username:"",
        email:"",
        message:"",
    });

    // lets tackle our handleInput 
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    // handle form getforSubmission 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                setContact({ username: "", email: "", message: "" });
                alert("Message sent successfully!");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    
    return  (
    
    <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">contact us</h1>
                </div>

                {/* contact page main  */}

                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/support.png" alt="Support is always available!" width={400} height={400} loading="eager" fetchpriority="high" />
                    </div>

                    {/* contact form content actual  */}

                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" id="username" autoComplete="off"
                                value={contact.username}
                                onChange={handleInput}
                                required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" id="email" autoComplete="off"
                                value={contact.email}
                                onChange={handleInput}
                                required
                                />
                            </div>

                            <div>
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message" autoComplete="off"
                                value={contact.message}
                                onChange={handleInput} 
                                required cols="30" rows="5"></textarea>
                            </div>

                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>

                <section className="mb-3">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.114578651795!2d77.22133760358415!3d28.651374310467663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1a88dcc559%3A0x24fa43c081dbe51!2sChandni%20Chowk%2C%20Delhi!5e0!3m2!1sen!2sin!4v1720901216315!5m2!1sen!2sin" 
                width="1550" height="450" allowFullScreen
                loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </section>
            </section>  
    </>
    );

};