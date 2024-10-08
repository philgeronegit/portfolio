import { Button, Modal } from "flowbite-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { EMAIL } from "../constants";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";

const initialModalState = {
  alert: false,
  open: false,
  text: "",
};
const initialFormState = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(initialFormState);

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(initialModalState);

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

    const name = form.name;
    const email = form.email;
    const message = form.message;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        setLoading(false);
        if (xhr.status === 200) {
          const response = xhr.responseText;
          if (response === "SUCCESS") {
            setModal({
              alert: false,
              open: true,
              text: "Merci. Je reviens vers vous dès que possible.",
            });
            setForm({
              name: "",
              email: "",
              message: "",
            });
          } else {
            setModal({
              alert: true,
              open: true,
              text: "Erreur, veuillez ré-essayer.",
            });
          }
        } else {
          setModal({
            alert: true,
            open: true,
            text: "Erreur, veuillez ré-essayer.",
          });
        }
      }
    };

    const timeout = setTimeout(() => {
      xhr.abort();
      setLoading(false);
      setModal({
        alert: true,
        open: true,
        text: "La requête a expiré. Veuillez ré-essayer.",
      });
    }, 10000);

    xhr.onloadend = function () {
      clearTimeout(timeout);
    };

    const params = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`;
    xhr.send(params);
  };

  return (
    <div className="flex flex-col justify-between gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <Modal
        dismissible
        show={modal.open}
        size="md"
        onClose={() => setModal({ open: false, text: "" })}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {modal.alert && (
              <HiOutlineExclamationCircle className="mx-auto mb-4 size-14 text-red-600 dark:text-red-400" />
            )}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {modal.text}
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="gray"
                onClick={() => setModal({ open: false, text: "" })}
              >
                Ok
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <motion.div
        variants={fadeIn("", "spring", 1, 0.75)}
        className="flex-[0.75] rounded-2xl bg-gray-900 p-8 dark:bg-black-100"
        viewport={{ once: false, amount: 0.8 }}
      >
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-3 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="mb-3 font-medium text-white">Votre nom</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Quel est votre nom ?"
              className="rounded-lg border-none bg-davys-gray p-3 font-medium text-white placeholder:text-secondary dark:bg-tertiary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-3 font-medium text-white">Votre email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Quel est votre email ?"
              className="rounded-lg border-none bg-davys-gray p-3 font-medium text-white placeholder:text-secondary dark:bg-tertiary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-3 font-medium text-white">Votre message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Qu'est ce que vous voulez dire ?"
              className="rounded-lg border-none bg-davys-gray p-3 font-medium text-white placeholder:text-secondary dark:bg-tertiary"
            />
          </label>

          <Button
            type="submit"
            className="w-fit bg-davys-gray px-5 py-1 font-bold dark:bg-tertiary"
            isProcessing={loading}
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </Button>
        </form>

        <div className="m-5 flex flex-col gap-5">
          <article className="flex flex-row gap-3 text-center align-middle">
            <div className="ml-1 mt-1">
              <MdEmail />
            </div>
            <a
              href={`mailto:${EMAIL}`}
              rel="noreferrer"
              target="_blank"
              className="inline-block bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] bg-clip-text text-transparent"
            >
              {EMAIL}
            </a>
          </article>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
