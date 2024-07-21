import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aditya Shibu",
          from_email: form.email,
          to_email: "adityashibuonline@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col xl:flex-row gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-white bg-opacity-90 p-8 rounded-2xl order-2 xl:order-1"
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Contact Us</h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
          >
            We strive to provide exceptional service in every situation, ensuring quick and efficient solutions that enhance the value and quality of life for our clients.
          </motion.p>
        </motion.div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-customBlue font-aquire font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-customBlue bg-opacity-50 py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-customBlue font-aquire font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-customBlue bg-opacity-50 py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-customBlue font-aquire font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-customBlue bg-opacity-50 py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-customBlue py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-black hover:bg-slate-100 hover:text-customBlue font-aquirebold"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-white bg-opacity-90 p-8 rounded-2xl xl:pt-20 order-1 xl:order-2"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6746292560956!2d77.59123647585805!3d13.056370813012407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17767536e6c3%3A0x5d2b28bb18a29ed8!2sRMZ%20Latitude%20(Commercial)!5e0!3m2!1sen!2sae!4v1721459536956!5m2!1sen!2sae"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <h2 className="font-aquirelight text-customBlue text-[200%] mt-5 xl:text-right text-left">Our Address</h2>
        <p className="mt-2 text-black text-[120%] max-w-3xl leading-[30px] xl:text-right text-left">
          Reg RMZ Latitude Commercial 10th Floor, WeWork, Bellary Road, Hebbal, Bengaluru - 560024
        </p>
        <h2 className="font-aquirelight text-customBlue text-[200%] mt-5 xl:text-right text-left">Email Us</h2>
        <p className="mt-2 text-black text-[120%] max-w-3xl leading-[30px] xl:text-right text-left">
          contact@clarus24.com
        </p>
        <h2 className="font-aquirelight text-customBlue text-[200%] mt-5 xl:text-right text-left">Call Us</h2>
        <p className="mt-2 text-black text-[120%] max-w-3xl leading-[30px] xl:text-right text-left">
          +91 7676111331
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
