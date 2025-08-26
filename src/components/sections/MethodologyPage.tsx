import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MethodologyPage = () => {
  const methodologies = [
    {
      title: 'Игровые технологии',
      description: 'Использование игровых элементов для повышения мотивации и интереса к обучению',
      benefits: ['Развивает творческое мышление', 'Повышает активность', 'Улучшает запоминание'],
      icon: 'Gamepad2',
      color: 'education'
    },
    {
      title: 'Проблемное обучение',
      description: 'Создание проблемных ситуаций и активное участие учащихся в их разрешении',
      benefits: ['Развивает логическое мышление', 'Формирует исследовательские навыки', 'Учит анализировать'],
      icon: 'Brain',
      color: 'academic'
    },
    {
      title: 'Коллективная работа',
      description: 'Организация работы в группах и парах для развития коммуникативных навыков',
      benefits: ['Развивает социальные навыки', 'Учит работать в команде', 'Повышает ответственность'],
      icon: 'Users',
      color: 'education'
    },
    {
      title: 'ИКТ-технологии',
      description: 'Интеграция информационных технологий в образовательный процесс',
      benefits: ['Делает урок интересным', 'Развивает цифровую грамотность', 'Расширяет возможности'],
      icon: 'Monitor',
      color: 'academic'
    }
  ];

  const learningPrinciples = [
    {
      title: 'Принцип наглядности',
      description: 'Использование визуальных материалов и демонстраций',
      icon: 'Eye'
    },
    {
      title: 'Принцип доступности',
      description: 'Соответствие материала возрастным особенностям',
      icon: 'Target'
    },
    {
      title: 'Принцип активности',
      description: 'Вовлечение учащихся в активную учебную деятельность',
      icon: 'Zap'
    },
    {
      title: 'Принцип систематичности',
      description: 'Последовательное и логичное изложение материала',
      icon: 'List'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-education-800 mb-4">
          Педагогическая методика
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Современные подходы к обучению в начальной школе, направленные на 
          всестороннее развитие личности каждого ребенка
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
          <Icon name="BookOpen" size={24} className="text-education-600" />
          <span>Используемые технологии</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {methodologies.map((method, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-${method.color}-100 rounded-lg flex items-center justify-center`}>
                    <Icon name={method.icon as any} size={20} className={`text-${method.color}-600`} />
                  </div>
                  <span>{method.title}</span>
                </CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Преимущества:</h4>
                  <ul className="space-y-2">
                    {method.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
          <Icon name="Target" size={24} className="text-academic-600" />
          <span>Основные принципы обучения</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {learningPrinciples.map((principle, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-r from-education-100 to-academic-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={principle.icon as any} size={24} className="text-education-600" />
                </div>
                <h4 className="font-semibold mb-2 text-sm">{principle.title}</h4>
                <p className="text-xs text-gray-600">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
          <Icon name="TrendingUp" size={24} className="text-education-600" />
          <span>Результаты применения методики</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="text-center bg-gradient-to-r from-education-50 to-education-100">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-education-700 mb-2">98%</div>
              <div className="text-sm text-education-600">Успеваемость в классе</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-academic-50 to-academic-100">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-academic-700 mb-2">95%</div>
              <div className="text-sm text-academic-600">Качество знаний</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-green-50 to-green-100">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
              <div className="text-sm text-green-600">Вовлеченность учащихся</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <Icon name="Quote" size={24} className="text-education-600" />
          <span>Педагогическое кредо</span>
        </h3>
        <blockquote className="text-lg italic text-gray-700 text-center">
          "Каждый ребенок уникален и талантлив. Моя задача — создать условия, 
          в которых этот талант сможет раскрыться и засиять."
        </blockquote>
        <div className="text-center mt-4">
          <Badge variant="secondary">М.П. Иванова</Badge>
        </div>
      </section>
    </div>
  );
};

export default MethodologyPage;