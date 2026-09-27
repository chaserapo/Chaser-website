import axios from "axios";

export const HAS_BACKEND = Boolean(process.env.REACT_APP_BACKEND_URL);

const API = HAS_BACKEND ? `${process.env.REACT_APP_BACKEND_URL}/api` : null;

export const submitBeta = (data) => axios.post(`${API}/beta-interest`, data);
export const submitContact = (data) => axios.post(`${API}/contact`, data);

const SITE_EMAIL = "chaserapp@outlook.com";

export const mailtoBeta = ({ name, email, farm_name, message }) => {
  const subject = encodeURIComponent(`Chaser early access — ${farm_name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nFarm / business: ${farm_name}\n\n${message || ""}`
  );
  window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
};

export const mailtoContact = ({ name, email, message, topic }) => {
  const subject = encodeURIComponent(`Chaser ${topic || "support enquiry"} — ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
};
