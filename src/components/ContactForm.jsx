import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn(
        "EmailJS env vars missing — vezi .env.example (REACT_APP_EMAILJS_SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY)."
    );
}

export default function ContactForm() {
    const { t } = useTranslation("contact");
    const form = useRef();
    const [status, setStatus] = useState(""); // '', 'loading', 'success', 'error'
    const [errorType, setErrorType] = useState(""); // '', 'required', 'send'

    // Ascunde mesajul de succes după 3 secunde
    useEffect(() => {
        if (status === "success") {
            const timer = setTimeout(() => setStatus(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const sendEmail = (e) => {
        e.preventDefault();

        const { user_name, user_email, message, company } = form.current;

        // Honeypot: câmp ascuns pe care doar un bot l-ar completa
        if (company.value) {
            return;
        }

        if (!user_name.value || !user_email.value || !message.value) {
            setErrorType("required");
            setStatus("error");
            return;
        }

        setStatus("loading");

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                (result) => {
                    console.log("SUCCESS:", result.text);
                    setStatus("success");
                    setErrorType("");
                    form.current.reset();
                },
                (error) => {
                    console.error("ERROR:", error.text);
                    setErrorType("send");
                    setStatus("error");
                }
            );
    };

    return (
        <section className="contact_form_section">
            <div className="container">
                <div className="contact_form_container">
                    <h2 className="contact_form_title">{t("form.title")}</h2>
                    <form ref={form} onSubmit={sendEmail} className="contact_form">
                        <input
                            type="text"
                            name="user_name"
                            placeholder={t("form.namePlaceholder")}
                            required
                            className="contact_form_input"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder={t("form.emailPlaceholder")}
                            required
                            className="contact_form_input"
                        />
                        <textarea
                            name="message"
                            placeholder={t("form.messagePlaceholder")}
                            required
                            className="contact_form_textarea"
                        />

                        {/* Honeypot anti-spam — invizibil pentru vizitatori */}
                        <input
                            type="text"
                            name="company"
                            className="contact_form_honeypot"
                            tabIndex="-1"
                            autoComplete="off"
                            aria-hidden="true"
                        />

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="contact_form_button"
                        >
                            {status === "loading" ? t("form.sending") : t("form.submit")}
                        </button>

                        {status === "success" && (
                            <p className="contact_form_message contact_form_message--success">
                                {t("form.success")}
                            </p>
                        )}
                        {status === "error" && (
                            <p className="contact_form_message contact_form_message--error">
                                {errorType === "required" ? t("form.errorRequired") : t("form.errorSend")}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
