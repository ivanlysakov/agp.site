import { Separator } from "@/components/ui/separator";
import { Award, BookOpen, Clock, Gavel, Scale, Users } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold">Про нас</h1>
          <p className="mt-4 max-w-3xl text-xl text-center w-full text-muted-foreground">
            Абрамов & Галушко — це команда професіоналів, що надає високоякісні
            юридичні послуги і допомагає клієнтам вирішувати найскладніші
            правові проблеми.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Наша історія</h2>
              <p className="mt-4 text-muted-foreground">
                Абрамов & Галушко було засновано у 2008 році досвідченими
                юристами Іваном Абрамовим та Оленою Галушко. За 15+ років роботи
                ми здобули репутацію надійного правового радника для фізичних та
                юридичних осіб.
              </p>
              <p className="mt-4 text-muted-foreground">
                Наша місія — захист прав та інтересів клієнтів шляхом надання
                кваліфікованої юридичної допомоги, заснованої на принципах
                професіоналізму, законності та конфіденційності.
              </p>
              <p className="mt-4 text-muted-foreground">
                Наша команда складається з сертифікованих адвокатів з великим
                досвідом роботи в різних галузях права. Ми постійно
                вдосконалюємо свої навички та знання, щоб забезпечити клієнтам
                найкращий юридичний захист.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Адвокатське об'єднання"
                className="h-full w-full max-h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Наші цінності</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
            Ми керуємося наступними принципами у нашій роботі:
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Scale className="h-6 w-6" />}
              title="Професіоналізм"
              description="Висока компетентність та увага до деталей у кожній справі"
            />
            <ValueCard
              icon={<Award className="h-6 w-6" />}
              title="Відповідальність"
              description="Відповідальне ставлення до кожного клієнта та його потреб"
            />
            <ValueCard
              icon={<Gavel className="h-6 w-6" />}
              title="Законність"
              description="Дотримання законів та етичних норм у всіх справах"
            />
            <ValueCard
              icon={<BookOpen className="h-6 w-6" />}
              title="Досвід"
              description="Багаторічний досвід роботи з різними категоріями справ"
            />
            <ValueCard
              icon={<Users className="h-6 w-6" />}
              title="Індивідуальний підхід"
              description="Розробка персоналізованих стратегій для кожного клієнта"
            />
            <ValueCard
              icon={<Clock className="h-6 w-6" />}
              title="Своєчасність"
              description="Оперативне реагування та дотримання всіх термінів"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Наша команда</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
            Познайомтеся з нашими висококваліфікованими спеціалістами
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Петро Абрамов"
              position="Керуючий партнер"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              description="Спеціаліст з цивільного права з понад 20-річним досвідом. Магістр права КНУ ім. Тараса Шевченка."
            />
            <TeamMember
              name="Анна Галушко"
              position="Керуючий партнер"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              description="Експерт з сімейного права. Більше 15 років юридичної практики. Кандидат юридичних наук."
            />
            <TeamMember
              name="Ольга Абрамова"
              position="Старший адвокат"
              image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              description="Спеціаліст з представництва в суді. Успішно вирішила більше 200 складних справ."
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="15+" label="Років на ринку" />
            <StatCard value="500+" label="Успішних справ" />
            <StatCard value="10+" label="Кваліфікованих юристів" />
            <StatCard value="98%" label="Задоволених клієнтів" />
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Наші досягнення</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
            Абрамов & Галушко - це визнана команда фахівців із значними
            досягненнями у юридичній сфері
          </p>
          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-semibold">Визнання та нагороди</h3>
                <Separator className="my-4" />
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">
                        Найкраща юридична фірма року (2022)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        За версією Асоціації адвокатів України
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">
                        Топ-10 юридичних компаній України
                      </p>
                      <p className="text-sm text-muted-foreground">
                        За рейтингом "Юридична газета" (2020-2023)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">
                        Лідер галузі в сфері сімейного права
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Національний рейтинг правничих компаній (2021)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-semibold">
                  Сертифікати та ліцензії
                </h3>
                <Separator className="my-4" />
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <BookOpen className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">
                        Свідоцтво про право на заняття адвокатською діяльністю
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Видане Кваліфікаційно-дисциплінарною комісією адвокатури
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">
                        Сертифікати з підвищення кваліфікації
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Міжнародні та вітчизняні програми для адвокатів
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">
                        Членство в Асоціації адвокатів України
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Активна участь у розвитку юридичної спільноти
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ValueCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-lg bg-background p-6 shadow-sm h-full flex flex-col items-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
};

const TeamMember = ({
  name,
  position,
  image,
  description,
}: {
  name: string;
  position: string;
  image: string;
  description: string;
}) => {
  return (
    <div className="overflow-hidden rounded-lg border h-full flex flex-col">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-primary">{position}</p>
        <p className="mt-4 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-background p-8 text-center shadow-sm h-full">
      <div className="text-4xl font-bold text-primary">{value}</div>
      <div className="mt-2">{label}</div>
    </div>
  );
};

export default About;
