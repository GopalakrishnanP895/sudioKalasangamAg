import React,{useState} from 'react'

import './FounderStyles.scss'

import Founder from '../../Images/Founder/6.jpg'

import ImageComponent from '../Image/ImageComponent'
import ContentComponent from '../Content/ContentComponent'
import HeadingComponent from '../Heading/HeadingComponent'

function FounderComponent() {

    let contents = [
        "My dance journey began three decades ago in a small town in india, When I was a little girl with dreams, In the last 15 years, I'm working towards bringing that dream come true, as a dancer and as a choreographer.",
        "Three years ago, I started the dance group KalaSangamAG in Germany. With talented dancers not only from across India, I have organized dance flashmobs, workshops, and events and we have performed on some prestigious stages including state-organized events in several cities in Germany.",
        "I have the experience of choreographing different dance styles like semi-classical, contemporary, kathak, bollywood and in different languages (German, Punjabi, Marati, Rajasthani, Gujarati, Tamil, Telugu).",
        "I specialize in regional folk dance forms and therefore, I use every opportunity to spread awareness about our rich and diverse Indian culture, not limiting it only to Bollywood."
    ];

    const [buttonText, setButtonText] = useState("Read More");
    
    return (
        <section id="founder" className="founder">
            <HeadingComponent title="Founder" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="founder-wrapper">
                            <ImageComponent img={Founder} alt="Anushree Gour" />
                            <div className="founder-content">
                                {contents.slice(0,2).map( (content,idx) => <ContentComponent key={idx} content={content} /> )}
                                {contents.slice(2).map( (content,idx) => (
                                    <div key={idx} id="read" className="collapse">
                                        <ContentComponent content={content} />
                                    </div>
                                    ) )}
                                {contents.length > 2 ? (<button type="button" 
                                    style={{padding: "1rem 2rem", fontSize: "1.5rem"}}
                                    className="btn btn-info btn-lg mt-2" 
                                    data-toggle="collapse" 
                                    onClick={() => buttonText === "Read More"? setButtonText("Read Less"): setButtonText("Read More")}
                                    data-target="#read">{buttonText}</button>)
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FounderComponent
