import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold">Контакти</h1>
          <p className="mt-3 md:mt-4 max-w-3xl text-lg md:text-xl text-muted-foreground">
            Зв'яжіться з нами для отримання професійної юридичної консультації
            або запису на прийом до юриста.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Наші контакти</h2>
              <p className="mt-3 md:mt-4 text-muted-foreground">
                Ми завжди готові допомогти вам у вирішенні будь-яких юридичних
                питань. Зв'яжіться з нами одним із зазначених нижче способів, і
                наші професійні юристи нададуть вам кваліфіковану консультацію
                та підтримку.
              </p>

              <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ContactItem
                  icon={<PhoneCall className="h-5 w-5 text-primary" />}
                  title="Телефон"
                  content={
                    <>
                      <a
                        href="tel:+380681545657"
                        className="transition-colors hover:text-primary"
                      >
                        +38 068 154 5657
                      </a>
                      <br />
                      <a
                        href="tel:+380992263871"
                        className="transition-colors hover:text-primary"
                      >
                        +38 099 226 3871
                      </a>
                    </>
                  }
                />
                <ContactItem
                  icon={<Mail className="h-5 w-5 text-primary" />}
                  title="Email"
                  content={
                    <a
                      href="mailto:info@abramov-partners.com"
                      className="transition-colors hover:text-primary"
                    >
                      ag.lawyer.ua@gmail.com
                    </a>
                  }
                />
                <ContactItem
                  icon={<MapPin className="h-5 w-5 text-primary" />}
                  title="Адреса"
                  content={
                    <p>м. Полтава 36000, вул. Європейська, 2, каб. 402</p>
                  }
                />
                <ContactItem
                  icon={<Clock className="h-5 w-5 text-primary" />}
                  title="Години роботи"
                  content={
                    <>
                      <p>Пн-Пт: 9:00 - 18:00</p>
                      <p>Сб: 10:00 - 15:00 (за попереднім записом)</p>
                      <p>Нд: Вихідний</p>
                    </>
                  }
                />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold">Соціальні мережі</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Слідкуйте за нами у соціальних мережах, щоб дізнаватись про
                  новини та корисні юридичні поради
                </p>
                <div className="mt-4 flex flex-wrap gap-4 items-center justify-center">
                  <a
                    href="#"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-center">
              <div className="w-full rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Зв'яжіться з нами</h3>
                <p className="mt-2 text-muted-foreground">
                  Заповніть форму нижче, і наш юрист зв'яжеться з вами
                  найближчим часом
                </p>

                {isSubmitted ? (
                  <div className="mt-6 rounded-lg bg-primary/10 p-6 text-center">
                    <h4 className="text-lg font-semibold text-primary">
                      Дякуємо за звернення!
                    </h4>
                    <p className="mt-2">
                      Ми отримали ваше повідомлення та зв'яжемося з вами
                      протягом 24 годин.
                    </p>
                    <Button
                      className="mt-4"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Надіслати ще одне повідомлення
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium"
                        >
                          Ім'я та прізвище *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Введіть ваше ім'я та прізвище"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="ваш@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium"
                      >
                        Телефон
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="+380 XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium"
                      >
                        Тема запиту *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="" disabled>
                          Оберіть тему
                        </option>
                        <option value="Цивільне право">Цивільне право</option>
                        <option value="Господарське право">
                          Господарське право
                        </option>
                        <option value="Сімейне право">Сімейне право</option>
                        <option value="Трудове право">Трудове право</option>
                        <option value="Кримінальне право">
                          Кримінальне право
                        </option>
                        <option value="Консультація">
                          Загальна консультація
                        </option>
                        <option value="Інше">Інше</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium"
                      >
                        Повідомлення *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Опишіть детально ваше питання або проблему..."
                      ></textarea>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      * поля, обов'язкові для заповнення
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="h-4 w-4 animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Відправка...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Send className="h-4 w-4" />
                            Надіслати повідомлення
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold">
            Наше розташування
          </h2>
          <p className="mx-auto mt-3 md:mt-4 max-w-3xl text-center text-muted-foreground">
            Наш офіс знаходиться в центрі Києва, зручне розташування робить його
            легкодоступним для всіх клієнтів
          </p>
          <div className="mt-8 md:mt-10 overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.6008940472784!2d34.5518425763035!3d49.58945724898243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d825f5e151ca25%3A0x14f5dbf886f82bb2!2sYevropeiska%20St%2C%202%2C%20Poltava%2C%20Poltavs&#39;ka%20oblast%2C%2036000!5e1!3m2!1sen!2sua!4v1747250020051!5m2!1sen!2sua"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Офіс юридичної компанії на карті"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-primary p-6 md:p-8 text-center text-primary-foreground">
            <h2 className="text-xl md:text-2xl font-bold">
              Потрібна термінова юридична консультація?
            </h2>
            <p className="mx-auto mt-3 md:mt-4 max-w-2xl">
              Зателефонуйте нам прямо зараз, і ми надамо вам необхідну юридичну
              допомогу та професійну підтримку
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="mt-4 md:mt-6"
              asChild
            >
              <a href="tel:+380681545657">+38 068 154 5657</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactItem = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <div className="group flex flex-col justify-start items-center">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="mt-2 pl-11 text-sm md:text-base">{content}</div>
    </div>
  );
};

export default Contacts;
