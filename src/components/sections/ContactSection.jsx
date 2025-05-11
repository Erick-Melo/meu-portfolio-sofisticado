import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulação de envio de formulário
    // Em um projeto real, você faria uma chamada para um backend ou serviço de email (ex: EmailJS, Formspree)
    emailjs
      .sendForm(
        "service_j8ie6t1", // Copie do painel do EmailJS
        "template_g1xe9l6", // Copie do painel do EmailJS
        form.current,
        "aYyBPoKclHNt0USSh" // Também chamado de user ID (public key)
      )
      .then(
        (result) => {
          console.log("Mensagem enviada!", result.text);
          setSubmitStatus("success");
        },
        (error) => {
          console.log("Erro:", error.text);
          setSubmitStatus("error");
        }
      );
    setIsSubmitting(false);
    e.target.reset();
  };

  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12">
          Entre em Contato
        </motion.h2>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 p-8 md:p-10 rounded-xl shadow-2xl">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white transition-colors"
                placeholder="seu.email@exemplo.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white transition-colors"
                placeholder="Sua mensagem aqui..."
              />
            </div>
            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-all duration-200 ease-in-out">
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" /> Enviar Mensagem
                  </>
                )}
              </motion.button>
            </div>
            {submitStatus === "success" && (
              <p className="text-sm text-green-600 dark:text-green-400 text-center">
                Mensagem enviada com sucesso! Entrarei em contato em breve.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400 text-center">
                Ocorreu um erro ao enviar a mensagem. Tente novamente mais
                tarde.
              </p>
            )}
          </form>

          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-600 text-center">
            <p className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
              Ou me encontre em:
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:erick.coelho2013@hotmail.com"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/erickjosecmelo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com/Erick-Melo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Github size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
