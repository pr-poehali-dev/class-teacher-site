import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const MaterialsPage = () => {
  const materials = {
    mathematics: [
      {
        title: 'Таблица умножения',
        description: 'Интерактивные карточки для изучения таблицы умножения',
        type: 'Интерактивный материал',
        grade: '3-4 класс',
        format: 'PDF',
        size: '2.5 МБ'
      },
      {
        title: 'Геометрические фигуры',
        description: 'Наглядные пособия по изучению основных геометрических фигур',
        type: 'Презентация',
        grade: '1-2 класс',
        format: 'PPT',
        size: '5.1 МБ'
      },
      {
        title: 'Задачи на логику',
        description: 'Сборник логических задач для развития математического мышления',
        type: 'Рабочая тетрадь',
        grade: '2-4 класс',
        format: 'PDF',
        size: '3.2 МБ'
      }
    ],
    russian: [
      {
        title: 'Правила русского языка',
        description: 'Основные правила орфографии и пунктуации в наглядной форме',
        type: 'Справочник',
        grade: '1-4 класс',
        format: 'PDF',
        size: '4.8 МБ'
      },
      {
        title: 'Словарные слова',
        description: 'Карточки для изучения словарных слов с примерами',
        type: 'Дидактический материал',
        grade: '2-4 класс',
        format: 'PDF',
        size: '1.9 МБ'
      },
      {
        title: 'Развитие речи',
        description: 'Упражнения для развития устной и письменной речи',
        type: 'Рабочая тетрадь',
        grade: '1-4 класс',
        format: 'PDF',
        size: '6.7 МБ'
      }
    ],
    reading: [
      {
        title: 'Техника чтения',
        description: 'Упражнения для развития скорости и качества чтения',
        type: 'Тренажер',
        grade: '1-4 класс',
        format: 'PDF',
        size: '2.1 МБ'
      },
      {
        title: 'Анализ произведений',
        description: 'Схемы и планы для анализа литературных произведений',
        type: 'Методическое пособие',
        grade: '3-4 класс',
        format: 'DOC',
        size: '1.8 МБ'
      }
    ],
    science: [
      {
        title: 'Природные зоны России',
        description: 'Интерактивная карта природных зон с описанием',
        type: 'Презентация',
        grade: '3-4 класс',
        format: 'PPT',
        size: '12.4 МБ'
      },
      {
        title: 'Животный мир',
        description: 'Энциклопедия животных с фотографиями и описанием',
        type: 'Справочник',
        grade: '1-4 класс',
        format: 'PDF',
        size: '18.9 МБ'
      }
    ]
  };

  const getSubjectIcon = (subject: string) => {
    switch (subject) {
      case 'mathematics': return 'Calculator';
      case 'russian': return 'BookOpen';
      case 'reading': return 'Book';
      case 'science': return 'Globe';
      default: return 'FileText';
    }
  };

  const getSubjectName = (subject: string) => {
    switch (subject) {
      case 'mathematics': return 'Математика';
      case 'russian': return 'Русский язык';
      case 'reading': return 'Литературное чтение';
      case 'science': return 'Окружающий мир';
      default: return subject;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Интерактивный материал': return 'bg-education-100 text-education-800';
      case 'Презентация': return 'bg-academic-100 text-academic-800';
      case 'Рабочая тетрадь': return 'bg-blue-100 text-blue-800';
      case 'Справочник': return 'bg-green-100 text-green-800';
      case 'Дидактический материал': return 'bg-purple-100 text-purple-800';
      case 'Методическое пособие': return 'bg-orange-100 text-orange-800';
      case 'Тренажер': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-education-800 mb-4">
          Учебные материалы
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Методические материалы, презентации и дидактические пособия 
          для эффективного обучения
        </p>
      </div>

      <Tabs defaultValue="mathematics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          {Object.keys(materials).map((subject) => (
            <TabsTrigger key={subject} value={subject} className="flex items-center space-x-2">
              <Icon name={getSubjectIcon(subject) as any} size={16} />
              <span className="hidden sm:inline">{getSubjectName(subject)}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(materials).map(([subject, items]) => (
          <TabsContent key={subject} value={subject}>
            <div className="grid gap-4">
              {items.map((material, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="flex items-center space-x-2">
                          <Icon name={getSubjectIcon(subject) as any} size={18} className="text-education-600" />
                          <span>{material.title}</span>
                        </CardTitle>
                        <CardDescription>{material.description}</CardDescription>
                      </div>
                      <Badge className={getTypeColor(material.type)}>
                        {material.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Icon name="Users" size={14} />
                          <span>{material.grade}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="FileType" size={14} />
                          <span>{material.format}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="HardDrive" size={14} />
                          <span>{material.size}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" size={14} className="mr-1" />
                          Просмотр
                        </Button>
                        <Button size="sm">
                          <Icon name="Download" size={14} className="mr-1" />
                          Скачать
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <section className="bg-gradient-to-r from-education-50 to-academic-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <Icon name="Lightbulb" size={24} className="text-education-600" />
          <span>Как использовать материалы</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-medium">Для учителей:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Используйте материалы для планирования уроков</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Адаптируйте под особенности своего класса</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Комбинируйте разные типы материалов</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Для родителей:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Помогайте детям с домашними заданиями</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Дополнительная практика дома</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Подготовка к контрольным работам</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaterialsPage;