import s from './Blog6.module.css'
import emailjs from '@emailjs/browser';
import {useRef} from "react";

export const Blog6=()=> {
    const form = useRef();

    const sendEmail = (e:any) => {
        e.preventDefault();

        emailjs.sendForm('service_bhkt5rd', 'template_3wdxxn4', e.target, 'tiuIIy86QQtHVP-YA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return   <div className={s.blog6}>
        <div className="col-lg-8">
        <div className="contact-form-card">
            <h4 className="contact-title">Send a message</h4>
            <form onSubmit={sendEmail} action="">
                <div className="form-group">
                    <input  className="form-control" type="text"    name={'to_name'} placeholder="Name *" required/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" name={'from_name'}  placeholder="Email *" required/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" name={'message'} id=" placeholder='Message *'" required/>
        </div>
        <div className="form-group ">
            <button type="submit" className="form-control btn btn-primary" >Send Message</button>
        </div>
    </form>
</div>
        </div>
</div>}
