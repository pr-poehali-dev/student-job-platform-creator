import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [testAnswers, setTestAnswers] = useState<string[]>([]);
  const [testResults, setTestResults] = useState<any>(null);

  const careerQuestions = [
    {
      question: "Что больше всего тебе нравится делать в свободное время?",
      options: [
        { value: "tech", label: "Программировать или изучать новые технологии" },
        { value: "design", label: "Рисовать, создавать дизайн или контент" },
        { value: "business", label: "Планировать проекты и управлять процессами" },
        { value: "social", label: "Общаться с людьми и помогать им" }
      ]
    },
    {
      question: "Какая работа кажется тебе наиболее интересной?",
      options: [
        { value: "tech", label: "Разработка мобильных приложений" },
        { value: "design", label: "Создание рекламных роликов" },
        { value: "business", label: "Управление командой в стартапе" },
        { value: "social", label: "Работа в благотворительной организации" }
      ]
    },
    {
      question: "В школе тебе больше нравятся предметы:",
      options: [
        { value: "tech", label: "Математика, информатика, физика" },
        { value: "design", label: "Изобразительное искусство, литература" },
        { value: "business", label: "Обществознание, экономика, география" },
        { value: "social", label: "История, иностранные языки, психология" }
      ]
    }
  ];

  const jobVacancies = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      company: "ТехСтарт",
      location: "Москва",
      salary: "60 000 - 80 000 ₽",
      type: "Стажировка",
      skills: ["React", "JavaScript", "HTML/CSS"],
      description: "Ищем талантливого школьника для разработки современных веб-интерфейсов"
    },
    {
      id: 2,
      title: "SMM-стажёр",
      company: "Креативное агентство",
      location: "СПб",
      salary: "40 000 - 50 000 ₽",
      type: "Частичная занятость",
      skills: ["Photoshop", "Контент", "Соцсети"],
      description: "Создание контента для социальных сетей и работа с блогерами"
    },
    {
      id: 3,
      title: "Аналитик данных",
      company: "DataFlow",
      location: "Удаленно",
      salary: "50 000 - 70 000 ₽",
      type: "Проектная работа",
      skills: ["Excel", "Python", "SQL"],
      description: "Анализ данных и создание отчетов для принятия бизнес-решений"
    }
  ];

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...testAnswers];
    newAnswers[currentQuestionIndex] = value;
    setTestAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < careerQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const scores = { tech: 0, design: 0, business: 0, social: 0 };
    testAnswers.forEach(answer => {
      if (answer in scores) {
        scores[answer as keyof typeof scores]++;
      }
    });

    const topCareer = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    const careerMap = {
      tech: { name: "IT и Технологии", description: "Программирование, разработка, системное администрирование" },
      design: { name: "Креатив и Дизайн", description: "Графический дизайн, видеопродукция, контент-маркетинг" },
      business: { name: "Бизнес и Управление", description: "Менеджмент, аналитика, предпринимательство" },
      social: { name: "Социальная сфера", description: "HR, психология, образование, благотворительность" }
    };

    setTestResults({
      career: careerMap[topCareer[0] as keyof typeof careerMap],
      scores: scores,
      total: testAnswers.length
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-energetic/10 via-white to-inspiring/10">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-energetic to-inspiring rounded-lg flex items-center justify-center">
                <Icon name="Briefcase" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-energetic to-inspiring bg-clip-text text-transparent">
                Youth Careers
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-energetic transition-colors">Главная</a>
              <a href="#vacancies" className="text-gray-700 hover:text-energetic transition-colors">Вакансии</a>
              <a href="#test" className="text-gray-700 hover:text-energetic transition-colors">Профориентация</a>
              <a href="#portfolio" className="text-gray-700 hover:text-energetic transition-colors">Портфолио</a>
              <a href="#profile" className="text-gray-700 hover:text-energetic transition-colors">Профиль</a>
            </div>
            <Button className="bg-energetic hover:bg-energetic/90">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-energetic to-inspiring bg-clip-text text-transparent">
                Твоя карьера
              </span>
              <br />
              <span className="text-gray-900">начинается здесь!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Платформа для школьников 9-11 классов. Проходи тесты на профориентацию,
              устраивайся на работу и строй портфолио своих достижений.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-energetic hover:bg-energetic/90 text-lg px-8 py-4">
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать путь
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-inspiring text-inspiring hover:bg-inspiring hover:text-white">
                <Icon name="Play" className="mr-2" size={20} />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Возможности платформы</h2>
            <p className="text-xl text-gray-600">Всё для успешного старта твоей карьеры</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-energetic to-inspiring rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Профориентация</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Пройди тесты и узнай, какая сфера деятельности подходит именно тебе</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-inspiring to-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Briefcase" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Вакансии</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Ищи стажировки и работу, подходящую для школьников и студентов</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-navy to-energetic rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Портфолио</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Создай впечатляющее портфолио с проектами и достижениями</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Vacancies Section */}
      <section id="vacancies" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Актуальные вакансии</h2>
            <p className="text-xl text-gray-600">Найди работу мечты уже сегодня</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Badge className="bg-energetic/10 text-energetic hover:bg-energetic hover:text-white cursor-pointer px-4 py-2">
              Все сферы
            </Badge>
            <Badge variant="outline" className="hover:bg-inspiring hover:text-white cursor-pointer px-4 py-2">
              IT
            </Badge>
            <Badge variant="outline" className="hover:bg-inspiring hover:text-white cursor-pointer px-4 py-2">
              Дизайн
            </Badge>
            <Badge variant="outline" className="hover:bg-inspiring hover:text-white cursor-pointer px-4 py-2">
              Маркетинг
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobVacancies.map((job) => (
              <Card key={job.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-gray-900">{job.title}</CardTitle>
                    <Badge className="bg-success/10 text-success">{job.type}</Badge>
                  </div>
                  <p className="text-inspiring font-semibold">{job.company}</p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {job.location}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-energetic mb-2">{job.salary}</p>
                    <p className="text-gray-600 text-sm mb-3">{job.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-energetic hover:bg-energetic/90">
                    Откликнуться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Test Section */}
      <section id="test" className="py-16 px-4 bg-gradient-to-r from-inspiring/10 to-energetic/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Тест на профориентацию</h2>
            <p className="text-xl text-gray-600">Узнай, какая карьера подходит именно тебе</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                {!testResults ? (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <CardTitle className="text-xl">Вопрос {currentQuestionIndex + 1} из {careerQuestions.length}</CardTitle>
                      <Badge className="bg-inspiring/10 text-inspiring">
                        {Math.round(((currentQuestionIndex + 1) / careerQuestions.length) * 100)}%
                      </Badge>
                    </div>
                    <Progress value={((currentQuestionIndex + 1) / careerQuestions.length) * 100} className="mb-6" />
                  </>
                ) : (
                  <CardTitle className="text-2xl text-center text-gray-900">Результаты теста</CardTitle>
                )}
              </CardHeader>
              <CardContent>
                {!testResults ? (
                  <>
                    <h3 className="text-lg font-semibold mb-6 text-gray-900">
                      {careerQuestions[currentQuestionIndex].question}
                    </h3>
                    <RadioGroup
                      value={testAnswers[currentQuestionIndex] || ""}
                      onValueChange={handleAnswerChange}
                      className="space-y-4"
                    >
                      {careerQuestions[currentQuestionIndex].options.map((option, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <RadioGroupItem value={option.value} id={`option-${index}`} className="mt-1" />
                          <Label htmlFor={`option-${index}`} className="cursor-pointer text-gray-700 leading-relaxed">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <div className="flex justify-end mt-8">
                      <Button
                        onClick={handleNextQuestion}
                        disabled={!testAnswers[currentQuestionIndex]}
                        className="bg-energetic hover:bg-energetic/90"
                      >
                        {currentQuestionIndex === careerQuestions.length - 1 ? 'Узнать результат' : 'Далее'}
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-energetic to-inspiring rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon name="Trophy" size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {testResults.career.name}
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {testResults.career.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-energetic">
                          {Math.round((Object.values(testResults.scores).reduce((a: any, b: any) => Math.max(a, b), 0) / testResults.total) * 100)}%
                        </div>
                        <div className="text-gray-600">Совпадение</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-inspiring">
                          {testResults.total}
                        </div>
                        <div className="text-gray-600">Вопросов</div>
                      </div>
                    </div>
                    <Button 
                      onClick={() => {
                        setTestResults(null);
                        setCurrentQuestionIndex(0);
                        setTestAnswers([]);
                      }}
                      className="mt-8 bg-inspiring hover:bg-inspiring/90"
                    >
                      Пройти еще раз
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-energetic to-inspiring rounded-lg flex items-center justify-center">
                  <Icon name="Briefcase" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">Youth Careers</span>
              </div>
              <p className="text-gray-400">
                Платформа для построения успешной карьеры школьниками
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Возможности</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Поиск вакансий</li>
                <li>Тесты профориентации</li>
                <li>Портфолио</li>
                <li>Обучающие материалы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Центр помощи</li>
                <li>Связаться с нами</li>
                <li>FAQ</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@youthcareers.ru
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Youth Careers. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;