import * as React from 'react';

const ContactForm = (props) => {
 return (
    <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id={props.fields.scroll_anchor_id}
  >
    <div className="w-100">
      <h2 className="mb-5">{props.fields.contact_title}</h2>

      <div className="subheading mb-3">{props.fields.contact_subtitle}</div>

      <form id="fs-frm" accept-charset="utf-8" action="https://formspree.io/mwkrpjwz" method="POST">
        <fieldset id="fs-frm-inputs">
          <label for="full-name">{props.fields.form_field_name_title}</label>
          <input type="text" name="name" id="full-name" placeholder={props.fields.form_field_name_help} required=""/>
          <label for="email-address">{props.fields.form_field_email_title}</label>
          <input type="email" name="_replyto" id="email-address" placeholder={props.fields.form_field_email_help} required=""/>
          <label for="message">{props.fields.form_field_message_title}</label>
          <textarea rows="5" name="message" id="message" placeholder={props.fields.form_field_message_help} required=""></textarea>
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
        </fieldset>
        
        <input type="submit" value="Submit"></input>
      </form>

    </div>
  </section>
 );
}

export default ContactForm;