import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ContactsPage = () => {
  const teacherInfo = {
    name: 'Иванова Мария Петровна',
    position: 'Учитель начальных классов',
    category: 'Высшая квалификационная категория',
    experience: '15 лет',
    education: 'МПГУ им. В.И. Ленина, педагогический факультет',
    awards: ['Почетный работник образования РФ', 'Лучший учитель года (2018)', 'Грамота Министерства образования'],
    photo: '/api/placeholder/200/200'
  };

  const contacts = [
    {
      type: 'Рабочий телефон',
      value: '+7 (495) 123-45-67',
      description: 'Звонить в рабочее время',
      icon: 'Phone',
      primary: true
    },
    {
      type: 'Мобильный телефон',
      value: '+7 (905) 987-65-43',
      description: 'WhatsApp, Telegram',
      icon: 'Smartphone',
      primary: true
    },
    {
      type: 'Email',
      value: 'ivanova.teacher@school215.ru',
      description: 'Основная почта для связи',
      icon: 'Mail',
      primary: true
    },
    {
      type: 'Дополнительный email',
      value: 'm.ivanova.teacher@gmail.com',
      description: 'Личная почта',
      icon: 'Mail',
      primary: false
    }
  ];

  const schedule = [
    {
      day: 'Понедельник',
      hours: '8:00 - 16:00',
      note: 'Основные уроки',
      available: true
    },
    {
      day: 'Вторник',
      hours: '8:00 - 17:00',
      note: 'Уроки + прием родителей (16:00-17:00)',
      available: true
    },
    {
      day: 'Среда',
      hours: '8:00 - 16:00',
      note: 'Основные уроки',
      available: true
    },
    {
      day: 'Четверг',
      hours: '8:00 - 17:00',
      note: 'Уроки + прием родителей (16:00-17:00)',
      available: true
    },
    {
      day: 'Пятница',
      hours: '8:00 - 16:00',
      note: 'Основные уроки',
      available: true
    },
    {
      day: 'Суббота',
      hours: 'По договоренности',
      note: 'Индивидуальные консультации',
      available: false
    },
    {
      day: 'Воскресенье',
      hours: 'Выходной',
      note: 'Только экстренные вопросы',
      available: false
    }
  ];

  const quickActions = [
    {
      title: 'Записаться на встречу',
      description: 'Индивидуальная консультация по успехам ребенка',
      icon: 'Calendar',
      color: 'education'
    },
    {
      title: 'Сообщить о болезни',
      description: 'Уведомить об отсутствии ребенка',
      icon: 'Heart',
      color: 'red'
    },
    {
      title: 'Задать вопрос',
      description: 'Получить консультацию по учебным вопросам',
      icon: 'MessageCircle',
      color: 'academic'
    },
    {
      title: 'Экстренная связь',
      description: 'Срочные вопросы в рабочее время',
      icon: 'Phone',
      color: 'orange'
    }
  ];

  const schoolInfo = {
    name: 'ГБОУ Школа № 215',
    address: 'г. Москва, ул. Школьная, д. 25',
    phone: '+7 (495) 123-45-00',
    email: 'info@school215.ru',
    website: 'www.school215.ru',
    director: 'Петров Александр Иванович'
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-education-800 mb-4">
          Контактная информация
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Всегда на связи для решения вопросов об обучении и развитии ваших детей
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="User" size={24} className="text-education-600" />
                <span>Классный руководитель</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gradient-to-r from-education-200 to-academic-200 rounded-full flex items-center justify-center">
                  <Icon name="User" size={32} className="text-education-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{teacherInfo.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                    <p>{teacherInfo.position}</p>
                    <p>{teacherInfo.category}</p>
                    <p>Стаж работы: {teacherInfo.experience}</p>
                    <p>Образование: {teacherInfo.education}</p>
                  </div>
                  <div className="space-y-1">
                    {teacherInfo.awards.map((award, index) => (
                      <Badge key={index} variant="secondary" className="mr-1 mb-1">
                        <Icon name="Award" size={12} className="mr-1" />
                        {award}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Phone" size={24} className="text-education-600" />
                <span>Способы связи</span>
              </CardTitle>
              <CardDescription>
                Выберите удобный способ связи для решения ваших вопросов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      contact.primary ? 'bg-education-50 border-education-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        contact.primary ? 'bg-education-100' : 'bg-gray-100'
                      }`}>
                        <Icon
                          name={contact.icon as any}
                          size={18}
                          className={contact.primary ? 'text-education-600' : 'text-gray-600'}
                        />
                      </div>
                      <div>
                        <div className="font-medium">{contact.type}</div>
                        <div className="text-lg font-mono">{contact.value}</div>
                        <div className="text-sm text-gray-500">{contact.description}</div>
                      </div>
                    </div>
                    <Button variant={contact.primary ? "default" : "outline"} size="sm">
                      Связаться
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Clock" size={24} className="text-education-600" />
                <span>График работы</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {schedule.map((day, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-2 rounded ${
                      day.available ? 'bg-green-50' : 'bg-gray-50'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-sm">{day.day}</div>
                      <div className="text-xs text-gray-500">{day.note}</div>
                    </div>
                    <div className="text-sm font-mono text-right">
                      {day.hours}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Zap" size={24} className="text-academic-600" />
                <span>Быстрые действия</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-${action.color}-100 rounded-lg flex items-center justify-center`}>
                        <Icon name={action.icon as any} size={16} className={`text-${action.color}-600`} />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-sm">{action.title}</div>
                        <div className="text-xs text-gray-500">{action.description}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-education-50 to-academic-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Building" size={24} className="text-education-600" />
            <span>Информация о школе</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <div className="font-medium text-sm">Название:</div>
                <div className="text-lg">{schoolInfo.name}</div>
              </div>
              <div>
                <div className="font-medium text-sm">Адрес:</div>
                <div>{schoolInfo.address}</div>
              </div>
              <div>
                <div className="font-medium text-sm">Директор:</div>
                <div>{schoolInfo.director}</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-gray-500" />
                <span>{schoolInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-gray-500" />
                <span>{schoolInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} className="text-gray-500" />
                <span>{schoolInfo.website}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactsPage;