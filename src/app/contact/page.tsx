"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { dictionary } from "@/lib/i18n";
import { ArrowLeft, Mail, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const { language, toggleLanguage } = useLanguage();
  const contact = dictionary.contact;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = contact.validation.nameRequired[language];
    }

    if (!formData.email.trim()) {
      newErrors.email = contact.validation.emailRequired[language];
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = contact.validation.emailInvalid[language];
    }

    if (!formData.message.trim()) {
      newErrors.message = contact.validation.messageRequired[language];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("sending");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success (in real app, this would be an actual API call)
    setStatus("success");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card !rounded-none border-t-0 border-x-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back</span>
              </Link>
              <span className="text-white/20">|</span>
              <span className="text-white font-medium">
                {contact.title[language]}
              </span>
            </div>
            <button
              onClick={toggleLanguage}
              className="lang-toggle"
              aria-label="Toggle language"
            >
              {language === "en" ? "TR" : "EN"}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {contact.title[language]}
            </h1>
            <p className="text-gray-400">{contact.subtitle[language]}</p>
          </div>

          {/* Contact email */}
          <div className="glass-card p-6 mb-8 text-center">
            <div className="flex items-center justify-center gap-3 text-[var(--accent)]">
              <Mail size={20} />
              <span>{contact.emailPlaceholder[language]}</span>
            </div>
          </div>

          {/* Success message */}
          {status === "success" && (
            <div className="glass-card p-6 mb-8 border-[var(--accent)]/30">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">{contact.success[language]}</p>
              </div>
            </div>
          )}

          {/* Error message */}
          {status === "error" && (
            <div className="glass-card p-6 mb-8 border-red-500/30">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">{contact.error[language]}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {contact.form.name[language]}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? "border-red-500/50" : ""}`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {contact.form.email[language]}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? "border-red-500/50" : ""}`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {contact.form.company[language]}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {contact.form.message[language]}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`form-input resize-none ${
                  errors.message ? "border-red-500/50" : ""
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-accent w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? contact.form.sending[language]
                : contact.form.submit[language]}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            {dictionary.footer.copyright[language]}
          </p>
        </div>
      </footer>
    </div>
  );
}
