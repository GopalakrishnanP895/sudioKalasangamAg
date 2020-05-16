import React from 'react'

import GroupDance from '../../Images/Gallery/10.jpg'

import './ContactStyles.scss'
import SecondaryHeading from '../Heading/SecondaryHeading'

function ContactComponent() {
    return (
        <section id="contact" className="contact">
            <SecondaryHeading content="Need help? Write Us" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12"> 
                        <div className="contact-card" style={{backgroundImage: `url(${GroupDance})`}}>
                            <div className="contact-gradient">
                                <div className="contact-form">
                                    <form action="#" className="form">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Full Name" id="name" required />
                                            <label htmlFor="name" className="form-label">Full Name</label>
                                        </div>

                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Phone" id="email" required />
                                            <label htmlFor="email" className="form-label">Phone</label>
                                        </div>

                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" id="email" required />
                                            <label htmlFor="email" className="form-label">Email</label>
                                        </div>

                                        <div className="form-group">
                                            <textarea name="message" className="form-control" id="message" cols="30" rows="3" placeholder="Message"></textarea>
                                            <label htmlFor="message" className="form-label">Message</label>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-primary btn-lg">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactComponent
