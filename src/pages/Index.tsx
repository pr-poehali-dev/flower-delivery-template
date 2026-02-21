import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/bucket/7a1385c9-0a69-43e8-bb40-2fa1b47e618c.jpg";

const IMG_TENDERNESS = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/files/6b73dea2-529e-48e8-af95-bdfdbba1586a.jpg";
const IMG_SUNNY = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/files/ea9e2c02-85ef-46cd-963e-867de576e314.jpg";
const IMG_ROMANCE = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/files/f5f59fc2-40b2-4712-b82d-897e25c41ab5.jpg";
const IMG_GIFTBOX = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/files/4fda8512-f92f-4e3e-a0b7-e02d2aef9a8a.jpg";
const IMG_SPRING = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/files/9ed77d74-f874-4b65-855e-0fef251f14ee.jpg";
const IMG_LUX = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/files/668a8d39-1b71-475b-9303-3a72df0c7397.jpg";
const IMG_SWEET_ZEFIR = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/bucket/9f569f1e-5ee6-491f-bd3d-0ad378d14930.jpg";
const IMG_SWEET_LILAC = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/bucket/ce679abf-6903-48cf-8363-59ef07af7aa1.jpg";
const IMG_SWEET_HEART = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/bucket/6f10e426-804e-4c7e-b297-af6406ab5bd0.jpg";
const IMG_SWEET_LOVE = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/bucket/b1c020e5-684d-41f4-bd22-0049236a9b95.jpg";
const IMG_SWEET_BUTTERFLY = "https://cdn.poehali.dev/projects/319aab64-219d-4a9d-8489-4f531d583034/bucket/a73170bf-d806-4f34-9a30-4e3406dedcea.jpg";

type Category = "all" | "flowers" | "sweet";

const catalog = [
  { id: 1, name: "Нежность", price: 3200, oldPrice: 3800, img: IMG_TENDERNESS, tag: "Хит", category: "flowers" as Category },
  { id: 2, name: "Солнечный день", price: 4500, img: IMG_SUNNY, tag: "Новинка", category: "flowers" as Category },
  { id: 3, name: "Романтика", price: 5800, oldPrice: 6500, img: IMG_ROMANCE, tag: "Скидка", category: "flowers" as Category },
  { id: 4, name: "Подарочный бокс", price: 6200, img: IMG_GIFTBOX, tag: "", category: "flowers" as Category },
  { id: 5, name: "Весеннее настроение", price: 2900, img: IMG_SPRING, tag: "Хит", category: "flowers" as Category },
  { id: 6, name: "Люкс букет", price: 8900, oldPrice: 10500, img: IMG_LUX, tag: "Премиум", category: "flowers" as Category },
  { id: 7, name: "Зефирный букет", price: 2000, img: IMG_SWEET_ZEFIR, tag: "Сладкие", category: "sweet" as Category },
  { id: 8, name: "Лавандовый букет", price: 2000, img: IMG_SWEET_LILAC, tag: "Сладкие", category: "sweet" as Category },
  { id: 9, name: "Букет-сердце", price: 2000, img: IMG_SWEET_HEART, tag: "Сладкие", category: "sweet" as Category },
  { id: 10, name: "Букет с сердечками", price: 2000, img: IMG_SWEET_LOVE, tag: "Сладкие", category: "sweet" as Category },
  { id: 11, name: "Букет с бабочками", price: 2000, img: IMG_SWEET_BUTTERFLY, tag: "Сладкие", category: "sweet" as Category },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "flowers", label: "Цветочные" },
  { key: "sweet", label: "Сладкие" },
];

const features = [
  { icon: "Truck", title: "Быстрая доставка", desc: "От 1 часа по городу" },
  { icon: "Shield", title: "Гарантия свежести", desc: "Только свежие цветы" },
  { icon: "Gift", title: "Красивая упаковка", desc: "Подарочное оформление" },
  { icon: "Clock", title: "Без выходных", desc: "Ежедневно с 9:00 до 21:00" },
];

const reviews = [
  { name: "Анна М.", text: "Заказывала букет маме на юбилей — она была в восторге! Доставили вовремя, цветы свежайшие.", rating: 5 },
  { name: "Дмитрий К.", text: "Уже третий раз заказываю здесь. Всегда отличное качество и приятные цены. Рекомендую!", rating: 5 },
  { name: "Елена С.", text: "Подарочный бокс превзошёл все ожидания. Красивая упаковка, шоколад и цветы — идеальный подарок.", rating: 5 },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-3xl">💐</span>
          <span className="text-2xl font-extrabold text-gradient">Все пучком</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
          <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
          <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+79069528766" className="text-sm font-semibold flex items-center gap-1.5 hover:text-primary transition-colors">
            <Icon name="Phone" size={16} />
            +7 (906) 952-87-66
          </a>
          <Button className="bg-gradient-accent hover:opacity-90 transition-opacity text-white rounded-full px-6">
            Заказать
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 animate-fade-up">
          <a href="#catalog" onClick={() => setOpen(false)} className="text-sm font-medium">Каталог</a>
          <a href="#delivery" onClick={() => setOpen(false)} className="text-sm font-medium">Доставка</a>
          <a href="#reviews" onClick={() => setOpen(false)} className="text-sm font-medium">Отзывы</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-medium">Контакты</a>
          <a href="tel:+79069528766" className="text-sm font-semibold flex items-center gap-1.5">
            <Icon name="Phone" size={16} /> +7 (906) 952-87-66
          </a>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-[100vh] flex items-center bg-gradient-hero overflow-hidden">
    <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-4 relative pt-24 pb-16">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-6 bg-secondary/30 text-foreground font-medium px-5 py-2 rounded-full text-sm animate-fade-up">
            🌸 Бесплатная доставка от 3 000 ₽
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight animate-fade-up-delay-1">
            Все пучком
          </h1>
          <p className="mt-2 text-2xl md:text-3xl font-semibold text-muted-foreground/80 animate-fade-up-delay-1">
            Дарите <span className="text-gradient font-extrabold">радость</span> с каждым букетом
          </p>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-up-delay-2">
            Свежие цветы, стильные подарки и доставка по Хакасии и Красноярскому краю. Доставка по Сибири с любовью!
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 text-white rounded-full px-10 text-lg h-16 shadow-lg shadow-primary/25">
              <Icon name="ShoppingBag" size={22} />
              Выбрать букет
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 text-lg h-16 border-2">
              <Icon name="Gift" size={22} />
              Подарки
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm md:text-base text-muted-foreground animate-fade-up-delay-3">
            <span className="flex items-center gap-2"><Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" /> 4.9 рейтинг</span>
            <span className="flex items-center gap-2"><Icon name="Users" size={18} /> 2 500+ клиентов</span>
            <span className="flex items-center gap-2"><Icon name="Truck" size={18} /> от 1 часа</span>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="relative animate-float">
            <img
              src={HERO_IMG}
              alt="Девушка с красивым букетом цветов"
              className="w-full max-w-xl mx-auto rounded-[2rem] shadow-2xl shadow-primary/20 object-cover aspect-[3/4]"
            />

          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="text-center p-6 rounded-2xl hover:bg-muted/50 transition-colors group">
            <div className="w-14 h-14 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon name={f.icon} size={24} className="text-white" />
            </div>
            <h3 className="font-bold text-sm">{f.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Catalog = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const filtered = activeFilter === "all" ? catalog : catalog.filter((i) => i.category === activeFilter);

  return (
  <section id="catalog" className="py-16 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="font-hand text-2xl text-primary">Наши букеты</span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2">Популярные букеты</h2>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">Каждый букет собирается вручную из самых свежих цветов</p>
      </div>
      <div className="flex justify-center gap-2 mb-8">
        {filters.map((f) => (
          <Button
            key={f.key}
            variant={activeFilter === f.key ? "default" : "outline"}
            className={`rounded-full px-6 ${activeFilter === f.key ? "bg-gradient-accent text-white" : ""}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </Button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <Card key={item.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
            <div className="relative overflow-hidden bg-[#f5f0eb]">
              <img
                src={item.img}
                alt={item.name}
                className={`w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-500 ${item.tag === "Сладкие" ? "object-contain p-3" : "object-cover"}`}
              />
              {item.tag && (
                <Badge className="absolute top-4 left-4 bg-gradient-accent text-white border-0 rounded-full px-3">
                  {item.tag}
                </Badge>
              )}
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-sm">
                <Icon name="Heart" size={18} className="text-primary" />
              </button>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xl font-extrabold text-primary">{item.price.toLocaleString()} ₽</span>
                {item.oldPrice && (
                  <span className="text-sm text-muted-foreground line-through">{item.oldPrice.toLocaleString()} ₽</span>
                )}
              </div>
              <Button className="w-full mt-4 bg-gradient-accent hover:opacity-90 text-white rounded-full h-11">
                <Icon name="ShoppingCart" size={16} />
                В корзину
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button variant="outline" size="lg" className="rounded-full px-10 border-2">
          Смотреть все букеты
          <Icon name="ArrowRight" size={18} />
        </Button>
      </div>
    </div>
  </section>
  );
};

const PromoSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-accent p-8 md:p-12 text-white min-h-[320px] flex flex-col justify-end">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          <span className="font-hand text-3xl mb-2">Специальное предложение</span>
          <h3 className="text-2xl md:text-3xl font-extrabold">Скидка 20% на первый заказ</h3>
          <p className="mt-2 text-white/80">Используйте промокод ПУЧОК20</p>
          <Button size="lg" className="mt-6 bg-white text-primary hover:bg-white/90 rounded-full w-fit px-8 font-bold">
            Получить скидку
          </Button>
        </div>
        <div className="relative rounded-3xl overflow-hidden min-h-[320px]">
          <img src={IMG_GIFTBOX} alt="Подарки" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
            <span className="font-hand text-3xl mb-2">Новая коллекция</span>
            <h3 className="text-2xl md:text-3xl font-extrabold">Подарочные боксы</h3>
            <p className="mt-2 text-white/80">Цветы, сладости и сюрпризы в одной коробке</p>
            <Button size="lg" variant="outline" className="mt-6 border-white text-white hover:bg-white hover:text-foreground rounded-full w-fit px-8 font-bold">
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DeliverySection = () => (
  <section id="delivery" className="py-16 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="font-hand text-2xl text-primary">Как это работает</span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2">Простая доставка</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { step: "01", icon: "MousePointer", title: "Выберите букет", desc: "Найдите идеальный букет в нашем каталоге" },
          { step: "02", icon: "CreditCard", title: "Оформите заказ", desc: "Укажите адрес и удобное время доставки" },
          { step: "03", icon: "Scissors", title: "Мы собираем", desc: "Флористы бережно соберут ваш букет" },
          { step: "04", icon: "Truck", title: "Доставляем", desc: "Курьер привезёт букет в идеальном виде" },
        ].map((s, i) => (
          <div key={i} className="relative text-center">
            <div className="text-6xl font-extrabold text-primary/10 mb-4">{s.step}</div>
            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4">
              <Icon name={s.icon} size={28} className="text-primary" />
            </div>
            <h3 className="font-bold text-lg">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id="reviews" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="font-hand text-2xl text-primary">Отзывы</span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2">Нас любят клиенты</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <Card key={i} className="p-6 rounded-2xl border-0 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex gap-1 mb-4">
              {[...Array(r.rating)].map((_, j) => (
                <Icon key={j} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">"{r.text}"</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                {r.name[0]}
              </div>
              <span className="font-semibold text-sm">{r.name}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-hand text-2xl text-primary">Свяжитесь с нами</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2">Остались вопросы?</h2>
          <p className="text-muted-foreground mt-4 max-w-md">Оставьте заявку и мы перезвоним вам в течение 5 минут, поможем подобрать идеальный букет</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Телефон</p>
                <a href="tel:+79069528766" className="font-bold hover:text-primary transition-colors">+7 (906) 952-87-66</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Адрес</p>
                <p className="font-bold">г. Черногорск, ул. Юбилейная, 24б</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Почта</p>
                <a href="mailto:fey.75@mail.ru" className="font-bold hover:text-primary transition-colors">fey.75@mail.ru</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Режим работы</p>
                <p className="font-bold">Ежедневно с 9:00 до 21:00, без выходных</p>
              </div>
            </div>
          </div>
        </div>
        <Card className="p-8 rounded-2xl border-0 shadow-lg">
          <h3 className="text-xl font-bold mb-6">Заказать обратный звонок</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Ваше имя" className="h-12 rounded-xl" />
            <Input placeholder="Телефон" type="tel" className="h-12 rounded-xl" />
            <Textarea placeholder="Комментарий к заказу" className="rounded-xl resize-none" rows={3} />
            <Button className="w-full h-12 bg-gradient-accent hover:opacity-90 text-white rounded-xl text-base font-bold">
              <Icon name="Send" size={18} />
              Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
          </form>
        </Card>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-foreground text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💐</span>
            <span className="text-xl font-bold">Все пучком</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">Доставка цветов и подарков по Республике Хакасия и Красноярскому краю. Доставка по Сибири с любовью!</p>
          <div className="flex gap-3 mt-4">
            {["Instagram", "MessageCircle", "Send"].map((icon, i) => (
              <button key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Icon name={icon} size={18} />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Каталог</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Букеты</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Композиции</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Подарочные боксы</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Корпоративным клиентам</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Информация</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Гарантии</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Контакты</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex items-center gap-2"><Icon name="Phone" size={14} /> +7 (906) 952-87-66</li>
            <li className="flex items-center gap-2"><Icon name="Mail" size={14} /> fey.75@mail.ru</li>
            <li className="flex items-center gap-2"><Icon name="MapPin" size={14} /> г. Черногорск, ул. Юбилейная, 24б</li>
            <li className="flex items-center gap-2"><Icon name="Clock" size={14} /> Ежедневно 9:00–21:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>© 2025 Все пучком. Все права защищены.</p>
        <p>Доставка цветов по Сибири с любовью</p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Catalog />
      <PromoSection />
      <DeliverySection />
      <Reviews />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;