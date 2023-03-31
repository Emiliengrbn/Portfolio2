import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const initialValues = { user_firstName: "", user_lastName: "", user_phone: "", user_email: "", object_message: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef();

  let user_firstName = false
  let user_lastName = false
  let user_phone = false
  let user_email = false
  let object_message = false
  let message = false

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)

    if (user_firstName && user_lastName && user_email && user_phone && object_message && message) {
      emailjs.sendForm('service_kt0zcbc', 'template_hkbwh75', form.current, 'CFw5W8fX7X9BgljAD')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });
    }

  };

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues)
  }

  const handleClick = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
  };

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }
  , [formErrors]
  )
  const validate = (values) => {
    const errors = {}
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    const regexPhone = /^[0-9 +]+$/

    if(!values.user_firstName) {
      errors.user_firstName = "J'ai besoin de votre prénom!"
      user_firstName = false
    } else {
      user_firstName = true
    }
    if(!values.user_lastName) {
      errors.user_lastName = "J'ai besoin de votre nom!"
      user_lastName = false
    } else {
      user_lastName = true
    }
    if(!values.user_phone) {
      errors.user_phone = "J'ai besoin de votre numéro de téléphone!"
      user_phone = false
    } else if (!regexPhone.test(values.user_phone)) {
      errors.user_phone = "Ce n'est pas un numéro de téléphone valide ..."
      user_phone = false
    } else {
      user_phone = true
    }
    if(!values.user_email) {
      errors.user_email = "J'ai besoin de votre email!"
      user_email = false
    } else if (!regexMail.test(values.user_email)) {
      errors.user_email = "Ce n'est pas un email valide ..."
      user_email = false
    } else {
      user_email = true
    }
    if(!values.object_message) {
      errors.object_message = "Veuillez mettre un objet !"
      object_message = false
    } else {
      object_message = true
    }
    if(!values.message) {
      errors.message = "J'ai besoin de votre message!"
      message = false
    } else {
      message = true
    }
    return errors
  }

  return (
    <div className="contact__section" id="contact">
    <h2 className="title__contact title__section">
      Contactez-moi
    </h2>
      <form className='contact__form' ref={form} onSubmit={handleSubmit}>
        <div className="smallInput__container">
          <div className="small__input__message">
            <input className='input__contact__form smallInput'
              placeholder='Nom *'
              type="text"
              name="user_lastName"
              value={form.user_lastName}
              onChange={handleChange}
            />
            <p className='error__message__form'>{ formErrors.user_lastName }</p>
          </div>
          <div className="small__input__message">
            <input className='input__contact__form smallInput'
              placeholder='Prénom *'
              type="text"
              name="user_firstName"
              value={form.user_firstName}
              onChange={handleChange}
            />
            <p className='error__message__form'>{ formErrors.user_firstName }</p>
          </div>

        </div>
        <div className="smallInput__container">
          <div className="small__input__message">
            <input className='input__contact__form smallInput'
              placeholder='N° téléphone'
              type="tel"
              name="user_phone"
              value={form.user_phone}
              onChange={handleChange}
              />
              <p className='error__message__form'>{ formErrors.user_phone }</p>
          </div>
          <div className="small__input__message">
            <input className='input__contact__form smallInput'
              placeholder='Email *'
              type="text"
              name="user_email"
              value={form.user_email}
              onChange={handleChange}
              />
              <p className='error__message__form'>{ formErrors.user_email }</p>
          </div>
        </div>
        <input className='input__contact__form large__input'
          placeholder='Objet *'
          type="text"
          name="object_message"
          value={form.object_message}
          onChange={handleChange}
          />
          <p className='error__message__form'>{ formErrors.object_message }</p>
        <textarea className='textarea__input__contact__form input__contact__form large__input'
          placeholder='Votre message *'
          name="message"
          value={form.message}
          onChange={handleChange}
          />
          <p className='error__message__form'>{ formErrors.message }</p>
          <p className="star__message">* Champs obligatoires</p>
        <button className='input__submit__contact__form' 
          type="submit"
          value="Envoyer"
          onClick={handleClick}>
            Envoyer
        </button>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className={`message__contact__form ${showAlert ? "show" : "hide"}`}>
            Votre message à bien été envoyé
          </div>
          ) : (      
            <div></div>
          )}
      </form>
    </div>
  );
};

export default Contact;