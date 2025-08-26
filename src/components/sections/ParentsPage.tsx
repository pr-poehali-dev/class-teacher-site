import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ParentsPage = () => {
  const announcements = [
    {
      title: 'Родительское собрание',
      date: '30 августа 2025',
      time: '18:00',
      location: 'Кабинет 215',
      description: 'Обсуждение планов на новый учебный год, знакомство с новыми требованиями',
      type: 'Собрание',
      important: true
    },
    {
      title: 'Экскурсия в музей',
      date: '15 сентября 2025',
      time: '10:00',
      location: 'Краеведческий музей',
      description: 'Образовательная экскурсия по программе "Окружающий мир"',
      type: 'Экскурсия',
      important: false
    },
    {
      title: 'Творческий конкурс',
      date: '1-20 октября 2025',
      time: '',
      location: 'Школа',
      description: 'Конкурс рисунков "Золотая осень" - прием работ до 20 октября',
      type: 'Конкурс',
      important: false
    }
  ];

  const tips = [
    {
      title: 'Как помочь ребенку с домашним заданием',
      icon: 'BookOpen',
      tips: [
        'Создайте комфортное рабочее место',
        'Установите режим выполнения домашних заданий',
        'Не делайте задания за ребенка, направляйте его',
        'Поощряйте самостоятельность',
        'Обращайтесь за помощью при затруднениях'
      ]
    },
    {
      title: 'Подготовка к школе дома',
      icon: 'Home',
      tips: [
        'Соблюдайте режим дня',
        'Ограничьте время у экранов',
        'Читайте вместе с ребенком каждый день',
        'Развивайте мелкую моторику',
        'Поощряйте любознательность'
      ]
    },
    {
      title: 'Общение с учителем',
      icon: 'MessageCircle',
      tips: [
        'Не стесняйтесь задавать вопросы',
        'Информируйте об особенностях ребенка',
        'Обсуждайте проблемы конструктивно',
        'Поддерживайте авторитет учителя дома',
        'Участвуйте в школьной жизни'
      ]
    }
  ];

  const contacts = [
    {
      type: 'Основной телефон',
      value: '+7 (495) 123-45-67',
      icon: 'Phone'
    },
    {
      type: 'WhatsApp',
      value: '+7 (905) 987-65-43',
      icon: 'MessageSquare'
    },
    {
      type: 'Email',
      value: 'ivanova.teacher@school.ru',
      icon: 'Mail'
    },
    {
      type: 'Время приема',
      value: 'Вторник, четверг 16:00-17:00',
      icon: 'Clock'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Собрание': return 'bg-red-100 text-red-800';
      case 'Экскурсия': return 'bg-blue-100 text-blue-800';
      case 'Конкурс': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-education-800 mb-4">
          Информация для родителей
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Важные объявления, полезные советы и контактная информация 
          для успешного сотрудничества
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
          <Icon name="Megaphone" size={24} className="text-education-600" />
          <span>Объявления и события</span>
        </h3>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <Card key={index} className={`${announcement.important ? 'ring-2 ring-red-200' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="flex items-center space-x-2">
                      {announcement.important && (
                        <Icon name="AlertCircle" size={18} className="text-red-600" />
                      )}
                      <span>{announcement.title}</span>
                    </CardTitle>
                    <CardDescription>{announcement.description}</CardDescription>
                  </div>
                  <Badge className={getTypeColor(announcement.type)}>
                    {announcement.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{announcement.date}</span>
                  </div>
                  {announcement.time && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{announcement.time}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={14} />
                    <span>{announcement.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
          <Icon name="Lightbulb" size={24} className="text-academic-600" />
          <span>Полезные советы</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-education-100 rounded-lg flex items-center justify-center">
                    <Icon name={tip.icon as any} size={16} className="text-education-600" />
                  </div>
                  <span className="text-lg">{tip.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tip.tips.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm">
                      <Icon name="Check" size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
          <Icon name="Phone" size={24} className="text-education-600" />
          <span>Как со мной связаться</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
              <CardDescription>
                Я всегда готова ответить на ваши вопросы и обсудить успехи вашего ребенка
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-education-100 rounded-lg flex items-center justify-center">
                      <Icon name={contact.icon as any} size={16} className="text-education-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{contact.type}</div>
                      <div className="text-sm text-gray-600">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-education-50 to-academic-50">
            <CardHeader>
              <CardTitle>Важная информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-2">
                <Icon name="Info" size={16} className="text-education-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Режим работы:</p>
                  <p>Понедельник-пятница: 8:00-16:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="AlertTriangle" size={16} className="text-amber-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">В случае болезни ребенка:</p>
                  <p>Сообщите до 9:00 утра</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Heart" size={16} className="text-red-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Помните:</p>
                  <p>Мы работаем в команде для успеха вашего ребенка!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ParentsPage;