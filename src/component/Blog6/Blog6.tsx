import s from './Blog6.module.css'

export const Blog6=()=> {
    return   <div className={s.blog6}>
        <div className="col-lg-8">
        <div className="contact-form-card">
            <h4 className="contact-title">Send a message</h4>
            <form action="">
                <div className="form-group">
                    <input  className="form-control" type="text" placeholder="Name *" required/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" placeholder="Email *" required/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" id=" placeholder='Message *'" required/>
        </div>
        <div className="form-group ">
            <button type="submit" className="form-control btn btn-primary" >Send Message</button>
        </div>
    </form>
</div>
        </div>
</div>}