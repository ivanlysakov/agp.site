import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Book, Building, CheckCircle2, Gavel, Scale } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Get the element id from the hash (remove the # prefix)
      const id = location.hash.substring(1);
      const element = document.getElementById(id);

      // If element exists, scroll to it
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]); // Re-run when location changes

  return (
    <>
      {/* Header */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold">Наші послуги</h1>
          <p className="mt-4 mx-auto max-w-3xl text-xl text-muted-foreground">
            Адвокатське об'єднання Абрамов & Галушко надає широкий спектр
            юридичних послуг у сфері цивільного та сімейного права.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Як ми можемо вам допомогти</h2>
              <p className="mt-4 text-muted-foreground">
                Ми надаємо комплексну юридичну підтримку, що включає
                консультації, складання документів, представництво в суді та
                супровід у вирішенні різноманітних правових питань.
              </p>
              <p className="mt-4 text-muted-foreground">
                Наша команда адвокатів має багаторічний досвід успішного
                вирішення складних юридичних задач у сфері цивільного та
                сімейного права, завжди захищаючи інтереси наших клієнтів.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contacts">Зв'язатися з нами</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Юридичні консультації та допомога"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Civil Law */}
      <section id="civil" className="py-16 bg-muted scroll-mt-20">
        <div className="container">
          <div className="flex items-center gap-4 justify-center">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Scale className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold">Цивільне право</h2>
          </div>
          <p className="mt-4 mx-auto max-w-3xl text-muted-foreground text-center">
            Наша команда спеціалізується на вирішенні широкого спектру питань
            цивільного права, включаючи майнові спори, договірні відносини,
            питання власності та інші аспекти.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-semibold text-center">
                Договірні відносини
              </h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                <ServiceListItem>
                  Складання, аналіз та експертиза договорів
                </ServiceListItem>
                <ServiceListItem>Супровід договірних відносин</ServiceListItem>
                <ServiceListItem>
                  Врегулювання договірних спорів
                </ServiceListItem>
                <ServiceListItem>
                  Представництво інтересів у судових спорах
                </ServiceListItem>
              </ul>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-semibold text-center">
                Майнові спори
              </h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                <ServiceListItem>
                  Вирішення спорів щодо права власності
                </ServiceListItem>
                <ServiceListItem>Спори про спадкування</ServiceListItem>
                <ServiceListItem>Поділ майна</ServiceListItem>
                <ServiceListItem>
                  Захист майнових прав та інтересів
                </ServiceListItem>
              </ul>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-semibold text-center">
                Відшкодування шкоди
              </h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                <ServiceListItem>
                  Відшкодування матеріальної шкоди
                </ServiceListItem>
                <ServiceListItem>Компенсація моральної шкоди</ServiceListItem>
                <ServiceListItem>Стягнення збитків</ServiceListItem>
                <ServiceListItem>
                  Супровід справ про відшкодування шкоди
                </ServiceListItem>
              </ul>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-semibold text-center">
                Інтелектуальна власність
              </h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                <ServiceListItem>
                  Захист авторських та суміжних прав
                </ServiceListItem>
                <ServiceListItem>
                  Захист прав на торговельні марки
                </ServiceListItem>
                <ServiceListItem>Питання патентування</ServiceListItem>
                <ServiceListItem>
                  Судовий захист прав інтелектуальної власності
                </ServiceListItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Family Law */}
      <section id="family" className="py-16 scroll-mt-20">
        <div className="container">
          <div className="flex items-center gap-4 justify-center">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Building className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold">Сімейне право</h2>
          </div>
          <p className="mt-4 mx-auto max-w-3xl text-muted-foreground text-center">
            Ми надаємо професійну юридичну допомогу у вирішенні сімейних питань,
            включаючи розлучення, поділ майна, аліменти, опіку над дітьми та
            інші сімейні справи.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-semibold text-center">
                Шлюбні відносини
              </h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                <ServiceListItem>
                  Складання та аналіз шлюбних договорів
                </ServiceListItem>
                <ServiceListItem>Юридичний супровід розлучення</ServiceListItem>
                <ServiceListItem>
                  Поділ спільного майна подружжя
                </ServiceListItem>
                <ServiceListItem>
                  Врегулювання майнових спорів між подружжям
                </ServiceListItem>
              </ul>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-semibold text-center">
                Питання дітей
              </h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                <ServiceListItem>
                  Визначення місця проживання дитини
                </ServiceListItem>
                <ServiceListItem>
                  Встановлення та стягнення аліментів
                </ServiceListItem>
                <ServiceListItem>Участь у вихованні дитини</ServiceListItem>
                <ServiceListItem>
                  Захист прав та інтересів дітей
                </ServiceListItem>
              </ul>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-semibold text-center">Усиновлення</h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                <ServiceListItem>
                  Юридичний супровід процедури усиновлення
                </ServiceListItem>
                <ServiceListItem>Оскарження усиновлення</ServiceListItem>
                <ServiceListItem>
                  Встановлення опіки та піклування
                </ServiceListItem>
                <ServiceListItem>
                  Правова підтримка прийомних сімей
                </ServiceListItem>
              </ul>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-semibold text-center">
                Спадкові спори
              </h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                <ServiceListItem>Оформлення спадщини</ServiceListItem>
                <ServiceListItem>
                  Складання та оскарження заповітів
                </ServiceListItem>
                <ServiceListItem>Захист прав спадкоємців</ServiceListItem>
                <ServiceListItem>
                  Вирішення спорів між спадкоємцями
                </ServiceListItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Court Representation */}
      <section id="court" className="py-16 bg-muted scroll-mt-20">
        <div className="container">
          <div className="flex items-center gap-4 justify-center">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Gavel className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold">Представництво в суді</h2>
          </div>
          <p className="mt-4 mx-auto max-w-3xl text-muted-foreground text-center">
            Наша команда адвокатів має багаторічний досвід представництва
            інтересів клієнтів в судах всіх інстанцій, захищаючи їхні права та
            інтереси.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-semibold text-center">
                Судовий процес
              </h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                <ServiceListItem>
                  Підготовка процесуальних документів
                </ServiceListItem>
                <ServiceListItem>
                  Представництво в суді першої інстанції
                </ServiceListItem>
                <ServiceListItem>Подання та розгляд апеляцій</ServiceListItem>
                <ServiceListItem>Касаційне оскарження</ServiceListItem>
              </ul>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-semibold text-center">
                Досудове врегулювання
              </h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                <ServiceListItem>Переговори з опонентами</ServiceListItem>
                <ServiceListItem>Медіація та примирення</ServiceListItem>
                <ServiceListItem>Підготовка мирових угод</ServiceListItem>
                <ServiceListItem>Претензійна робота</ServiceListItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consultations */}
      <section id="consultation" className="py-16 scroll-mt-20">
        <div className="container">
          <div className="flex items-center gap-4 justify-center">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Book className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold">Юридичні консультації</h2>
          </div>
          <p className="mt-4 mx-auto max-w-3xl text-muted-foreground text-center">
            Ми надаємо професійні консультації з широкого кола правових питань,
            допомагаючи нашим клієнтам приймати правильні рішення та уникати
            потенційних проблем.
          </p>

          <div className="mt-10 rounded-lg border bg-background p-8">
            <h3 className="text-xl font-semibold text-center">
              Як проходить консультація
            </h3>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h4 className="mt-4 font-semibold">Запис на консультацію</h4>
                <p className="mt-2 text-muted-foreground">
                  Зв'яжіться з нами за телефоном або заповніть форму на сайті
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h4 className="mt-4 font-semibold">Обговорення питання</h4>
                <p className="mt-2 text-muted-foreground">
                  Детальний аналіз вашої ситуації з адвокатом
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h4 className="mt-4 font-semibold">Пропозиція рішення</h4>
                <p className="mt-2 text-muted-foreground">
                  Розробка стратегії та плану дій для вирішення вашого питання
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link to="/contacts">Записатися на консультацію</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Вартість послуг</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
            Ми пропонуємо гнучку систему оплати, яка залежить від складності та
            тривалості справи
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-background p-6 flex flex-col justify-between">
              <div className="flex flex-col justify-start">
                <h3 className="text-xl font-semibold text-center">
                  Консультація
                </h3>
                <div className="mt-4 text-3xl font-bold text-center">
                  від 500 грн
                </div>
                <p className="mt-2 text-muted-foreground text-center">
                  Усна консультація тривалістю до 60 хвилин
                </p>
                <Separator className="my-4" />
                <ul className="mt-4 space-y-3">
                  <ServiceListItem>Аналіз правової ситуації</ServiceListItem>
                  <ServiceListItem>Відповіді на запитання</ServiceListItem>
                  <ServiceListItem>Попередні рекомендації</ServiceListItem>
                </ul>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contacts">Замовити</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-lg flex flex-col justify-between">
              <div className="flex flex-col justify-start">
                <div className="rounded bg-primary/10 px-3 py-1 text-center text-sm text-primary w-fit mx-auto">
                  Популярний вибір
                </div>
                <h3 className="mt-2 text-xl font-semibold text-center">
                  Комплексний супровід
                </h3>
                <div className="mt-4 text-3xl font-bold text-center">
                  від 5000 грн
                </div>
                <p className="mt-2 text-muted-foreground text-center">
                  Повний юридичний супровід вашої справи
                </p>
                <Separator className="my-4" />
                <ul className="mt-4 space-y-3">
                  <ServiceListItem>
                    Консультації протягом всієї справи
                  </ServiceListItem>
                  <ServiceListItem>
                    Підготовка необхідних документів
                  </ServiceListItem>
                  <ServiceListItem>Представництво в суді</ServiceListItem>
                  <ServiceListItem>Виконання судового рішення</ServiceListItem>
                </ul>
                <div className="mt-6">
                  <Button className="w-full" asChild>
                    <Link to="/contacts">Замовити</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 flex flex-col justify-between">
              <div className="flex flex-col justify-start">
                <h3 className="text-xl font-semibold text-center">Документи</h3>
                <div className="mt-4 text-3xl font-bold text-center">
                  від 1500 грн
                </div>
                <p className="mt-2 text-muted-foreground text-center">
                  Складання юридичних документів
                </p>
                <Separator className="my-4" />
                <ul className="mt-4 space-y-3">
                  <ServiceListItem>Договори</ServiceListItem>
                  <ServiceListItem>Позовні заяви</ServiceListItem>
                  <ServiceListItem>Скарги та заперечення</ServiceListItem>
                  <ServiceListItem>Інші юридичні документи</ServiceListItem>
                </ul>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contacts">Замовити</Link>
                </Button>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            * Точна вартість послуг визначається після детального вивчення
            справи та залежить від її складності. Для отримання персонального
            розрахунку зв'яжіться з нами.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">
            Потрібна професійна юридична допомога?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Звертайтеся до нас для отримання кваліфікованої юридичної підтримки
            у вирішенні вашої справи. Наші адвокати нададуть вам необхідну
            допомогу.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacts">Зв'язатися з нами</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent"
              asChild
            >
              <a href="tel:+380501234567">+380 68 154 5657</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
      <span>{children}</span>
    </li>
  );
};

export default Services;
