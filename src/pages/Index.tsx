import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const portfolioItems = [
    {
      title: 'Платформа автоматизации бизнес-процессов',
      description: 'Разработка SaaS-решения для крупного корпоративного клиента',
      metrics: [
        { label: 'Рост эффективности', value: '+245%' },
        { label: 'Экономия времени', value: '120 ч/мес' },
        { label: 'ROI за 6 мес', value: '380%' }
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: '🚀'
    },
    {
      title: 'AI-powered аналитическая система',
      description: 'Внедрение машинного обучения для прогнозирования спроса',
      metrics: [
        { label: 'Точность прогнозов', value: '94.5%' },
        { label: 'Снижение издержек', value: '-42%' },
        { label: 'Скорость обработки', value: '15x' }
      ],
      tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      image: '🤖'
    },
    {
      title: 'Мобильное приложение для финтеха',
      description: 'Кроссплатформенное решение с blockchain интеграцией',
      metrics: [
        { label: 'Активных пользователей', value: '50K+' },
        { label: 'App Store рейтинг', value: '4.8/5' },
        { label: 'Транзакций в день', value: '10K+' }
      ],
      tech: ['React Native', 'Solidity', 'Firebase'],
      image: '💳'
    }
  ];

  const services = [
    {
      icon: 'Code',
      title: 'Разработка MVP',
      description: 'Быстрый запуск продукта с проверенными технологиями и agile-подходом'
    },
    {
      icon: 'Rocket',
      title: 'Масштабирование',
      description: 'Оптимизация архитектуры для роста нагрузки и расширения функционала'
    },
    {
      icon: 'Brain',
      title: 'AI/ML интеграция',
      description: 'Внедрение искусственного интеллекта для автоматизации и аналитики'
    },
    {
      icon: 'Shield',
      title: 'DevOps & Security',
      description: 'CI/CD конвейеры, мониторинг, тестирование и защита данных'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
        
        <div className="container relative z-10 px-4 text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary text-sm font-medium">Технологии будущего сегодня</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
            Инновационные решения для вашего бизнеса
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Fullstack разработчик с 8+ лет опыта в создании высоконагруженных систем и AI-интеграции
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gap-2 animate-glow">
              <Icon name="MessageSquare" size={20} />
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="FileText" size={20} />
              Скачать резюме
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="animate-slide-in">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">лет опыта</div>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">проектов</div>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">технологий</div>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">удовлетворённость</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">О себе</h2>
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Специализируюсь на разработке современных веб-приложений и внедрении AI/ML решений. 
              Работал с компаниями от стартапов до Fortune 500. Применяю best practices, TDD подход 
              и создаю масштабируемые архитектуры.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <Icon name="Award" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Экспертиза</h3>
                  <p className="text-muted-foreground">React, TypeScript, Node.js, Python, AWS, Docker</p>
                </CardContent>
              </Card>
              
              <Card className="border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <Icon name="TrendingUp" size={40} className="text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Результаты</h3>
                  <p className="text-muted-foreground">ROI от 250%, сокращение времени разработки в 3x</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <Icon name="Users" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Подход</h3>
                  <p className="text-muted-foreground">Agile, Code Review, CI/CD, команды до 15 человек</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Портфолио</h2>
          <div className="flex items-center justify-center mb-16">
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index} 
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0 text-8xl">{item.image}</div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{item.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {item.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-muted/50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Услуги</h2>
          <div className="flex items-center justify-center mb-16">
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <Icon name={service.icon as any} size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Контакты</h2>
            <div className="flex items-center justify-center mb-12">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full gap-2" size="lg">
                    <Icon name="Send" size={20} />
                    Отправить сообщение
                  </Button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex justify-center gap-6">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="Github" size={24} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="Linkedin" size={24} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="Mail" size={24} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="Phone" size={24} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-muted/30 border-t border-border">
        <div className="container px-4 text-center text-muted-foreground">
          <p>© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
