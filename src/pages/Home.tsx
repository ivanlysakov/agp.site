import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Building,
  CheckCircle,
  Gavel,
  Scale,
  Shield,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Hero Section - Professional Instagram style */}
      <section className="py-20 lg:py-32 w-full relative overflow-hidden">
        <div className="container">
          {/* Professional brand header matching Instagram */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-primary mb-8 mx-auto shadow-professional-lg">
              <Scale className="h-14 w-14 text-white" />
            </div>
            <h1 className="heading-caps text-5xl lg:text-7xl mb-4 text-foreground">
              Адвокати
            </h1>
            <h2 className="heading-caps text-4xl lg:text-6xl mb-6 text-foreground">
              Абрамов & Галушко
            </h2>
            <p className="text-xl text-muted-foreground mb-2 font-medium">
              Адвокатське партнерство
            </p>

            {/* Professional credentials */}
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mb-12 mt-8">
              <span className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                <Award className="h-4 w-4 text-primary" />
                15+ років досвіду
              </span>
              <span className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-primary" />
                500+ успішних справ
              </span>
              <span className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4 text-primary" />
                100% довіри клієнтів
              </span>
            </div>
          </div>

          {/* Professional description and CTA */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-medium">
              Професійний юридичний захист ваших прав та інтересів. Ми
              спеціалізуємося на цивільному та сімейному праві, а також наданні
              юридичних консультацій та представленні в суді.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="px-12 py-4 text-base font-semibold shadow-professional hover:shadow-professional-lg transition-all duration-300"
                asChild
              >
                <Link to="/contacts">Зв'язатися з нами</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-4 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                asChild
              >
                <Link to="/services">Наші послуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional specializations section */}
      <section className="py-20 w-full bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-caps text-3xl lg:text-4xl mb-6 text-foreground">
              Наші спеціалізації
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Оберіть напрямок, в якому потрібна професійна юридична допомога
            </p>
          </div>

          {/* Clean professional grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <ProfessionalCard
              title="Цивільне право"
              description="Вирішення майнових та особистих немайнових спорів"
              icon={<Scale className="h-10 w-10" />}
              url="/services#civil"
            />
            <ProfessionalCard
              title="Сімейне право"
              description="Юридичний супровід у сімейних питаннях"
              icon={<Building className="h-10 w-10" />}
              url="/services#family"
            />
            <ProfessionalCard
              title="Представництво в суді"
              description="Професійний захист ваших інтересів"
              icon={<Gavel className="h-10 w-10" />}
              url="/services#court"
            />
          </div>
        </div>
      </section>

      {/* Professional about section */}
      <section className="py-24 w-full">
        <div className="container">
          <div className="grid gap-20 lg:grid-cols-2 items-center max-w-7xl mx-auto">
            <div className="space-y-10">
              <div>
                <h2 className="heading-caps text-4xl lg:text-5xl mb-8 text-foreground">
                  Про нас
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  Абрамов & Галушко — адвокатське партнерство з багаторічним
                  досвідом роботи у сфері юридичних послуг. Наша команда
                  висококваліфікованих юристів надає правову допомогу фізичним
                  та юридичним особам.
                </p>
              </div>

              {/* Professional stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-professional border border-border/50">
                  <div className="text-4xl font-bold text-primary mb-3">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    Років досвіду
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-professional border border-border/50">
                  <div className="text-4xl font-bold text-primary mb-3">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    Успішних справ
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-professional border border-border/50">
                  <div className="text-4xl font-bold text-primary mb-3">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    Задоволених клієнтів
                  </div>
                </div>
              </div>

              <Button
                className="px-10 py-4 text-base font-semibold shadow-professional hover:shadow-professional-lg transition-all duration-300"
                variant="outline"
                asChild
              >
                <Link to="/about">
                  Детальніше про нас <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-professional-lg border border-border/50">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  alt="Команда юристів"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              {/* Professional badge */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-professional-lg border-4 border-white">
                <Star className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional testimonials */}
      <section className="py-24 w-full bg-muted/30">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="heading-caps text-4xl lg:text-5xl mb-6 text-foreground">
              Відгуки наших клієнтів
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Що кажуть наші клієнти про співпрацю з нами
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <ProfessionalTestimonial
              text="Команда Абрамов & Галушко чудово впоралась із моєю справою. Професійний підхід та повна підтримка на всіх етапах."
              author="Олена К."
              position="Приватний підприємець"
              avatar="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            />
            <ProfessionalTestimonial
              text="Звернувся щодо сімейного спору, отримав кваліфіковану допомогу та вирішення питання у найкоротші терміни."
              author="Сергій М."
              position="Клієнт"
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            />
            <ProfessionalTestimonial
              text="Дякую за професійне представництво в суді. Результат перевершив мої очікування!"
              author="Ірина В."
              position="Клієнт"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
            />
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-24 w-full relative overflow-hidden bg-primary">
        <div className="relative container text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-caps text-4xl lg:text-6xl mb-8">
              Потрібна юридична консультація?
            </h2>
            <p className="text-xl mb-12 opacity-95 leading-relaxed font-medium max-w-3xl mx-auto">
              Зв'яжіться з нами сьогодні, щоб отримати професійну юридичну
              допомогу від команди досвідчених адвокатів Абрамов & Галушко.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="px-12 py-4 text-lg font-semibold shadow-professional-lg hover:shadow-xl transition-all duration-300 bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contacts">Зв'язатися з нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Professional card component matching Instagram style
const ProfessionalCard = ({
  title,
  description,
  icon,
  url,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}) => {
  return (
    <Link
      to={url}
      className="group  bg-white rounded-3xl p-8 border border-border/50 shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-start"
    >
      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed font-medium">
        {description}
      </p>
    </Link>
  );
};

// Professional testimonial component
const ProfessionalTestimonial = ({
  text,
  author,
  position,
  avatar,
}: {
  text: string;
  author: string;
  position: string;
  avatar: string;
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-professional hover:shadow-professional-lg transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="relative">
          <img
            src={avatar}
            alt={author}
            className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <CheckCircle className="h-3 w-3 text-white" />
          </div>
        </div>
        <div className="ml-4">
          <div className="font-bold text-sm text-foreground">{author}</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide">
            {position}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed italic font-medium">
        "{text}"
      </p>
      <div className="flex mt-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current text-amber-400" />
        ))}
      </div>
    </div>
  );
};

export default Home;
