import emailjs from "@emailjs/browser";

const sendForm = async (target) => {
  try {
    const result = await emailjs.sendForm(
      "service_1b4w8fi",
      "template_78r51bl",
      target,
      "_eq0jCVCj_ouc5Hp5"
    );

    return result;
  } catch (error) {
    throw error;
  }
};

export { sendForm };