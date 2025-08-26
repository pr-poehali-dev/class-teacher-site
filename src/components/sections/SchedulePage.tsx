import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SchedulePage = () => {
  const schedule = [
    {
      day: 'Понедельник',
      lessons: [
        { time: '08:30-09:15', subject: 'Математика', room: '215', type: 'урок' },
        { time: '09:25-10:10', subject: 'Русский язык', room: '215', type: 'урок' },
        { time: '10:30-11:15', subject: 'Литературное чтение', room: '215', type: 'урок' },
        { time: '11:25-12:10', subject: 'Окружающий мир', room: '215', type: 'урок' },
        { time: '12:20-13:05', subject: 'Физкультура', room: 'Спортзал', type: 'урок' }
      ]
    },
    {
      day: 'Вторник', 
      lessons: [
        { time: '08:30-09:15', subject: 'Русский язык', room: '215', type: 'урок' },
        { time: '09:25-10:10', subject: 'Математика', room: '215', type: 'урок' },
        { time: '10:30-11:15', subject: 'Музыка', room: '110', type: 'урок' },
        { time: '11:25-12:10', subject: 'ИЗО', room: '208', type: 'урок' },
        { time: '13:00-13:45', subject: 'Шахматы', room: '215', type: 'кружок' }
      ]
    },
    {
      day: 'Среда',
      lessons: [
        { time: '08:30-09:15', subject: 'Математика', room: '215', type: 'урок' },
        { time: '09:25-10:10', subject: 'Русский язык', room: '215', type: 'урок' },
        { time: '10:30-11:15', subject: 'Английский язык', room: '203', type: 'урок' },
        { time: '11:25-12:10', subject: 'Технология', room: '301', type: 'урок' },
        { time: '12:20-13:05', subject: 'Физкультура', room: 'Спортзал', type: 'урок' }
      ]
    },
    {
      day: 'Четверг',
      lessons: [
        { time: '08:30-09:15', subject: 'Литературное чтение', room: '215', type: 'урок' },
        { time: '09:25-10:10', subject: 'Математика', room: '215', type: 'урок' },
        { time: '10:30-11:15', subject: 'Русский язык', room: '215', type: 'урок' },
        { time: '11:25-12:10', subject: 'Окружающий мир', room: '215', type: 'урок' },
        { time: '13:00-13:45', subject: 'Математика (доп.)', room: '215', type: 'доп. занятие' }
      ]
    },
    {
      day: 'Пятница',
      lessons: [
        { time: '08:30-09:15', subject: 'Русский язык', room: '215', type: 'урок' },
        { time: '09:25-10:10', subject: 'Математика', room: '215', type: 'урок' },
        { time: '10:30-11:15', subject: 'Английский язык', room: '203', type: 'урок' },
        { time: '11:25-12:10', subject: 'Физкультура', room: 'Спортзал', type: 'урок' },
        { time: '12:20-13:05', subject: 'Классный час', room: '215', type: 'воспитательная работа' }
      ]
    }
  ];

  const additionalActivities = [
    {
      name: 'Группа продленного дня',
      time: '13:30-16:00',
      days: 'Понедельник-пятница',
      description: 'Выполнение домашних заданий, игры, прогулки',
      icon: 'Clock'
    },
    {
      name: 'Кружок "Шахматы"',
      time: '13:00-13:45',
      days: 'Вторник',
      description: 'Обучение игре в шахматы, развитие логического мышления',
      icon: 'Crown'
    },
    {
      name: 'Дополнительная математика',
      time: '13:00-13:45',
      days: 'Четверг',
      description: 'Углубленное изучение математики для одаренных детей',
      icon: 'Calculator'
    },
    {
      name: 'Библиотечный час',
      time: '12:30-13:15',
      days: 'Среда',
      description: 'Знакомство с новыми книгами, литературные викторины',
      icon: 'BookOpen'
    }
  ];

  const getSubjectIcon = (subject: string) => {
    if (subject.includes('Математика')) return 'Calculator';
    if (subject.includes('Русский')) return 'BookOpen';
    if (subject.includes('Литературное')) return 'Book';
    if (subject.includes('Окружающий')) return 'Globe';
    if (subject.includes('Физкультура')) return 'Dumbbell';
    if (subject.includes('Английский')) return 'Languages';
    if (subject.includes('Музыка')) return 'Music';
    if (subject.includes('ИЗО')) return 'Palette';
    if (subject.includes('Технология')) return 'Wrench';
    if (subject.includes('Шахматы')) return 'Crown';
    if (subject.includes('Классный час')) return 'Users';
    return 'BookOpen';
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'урок': return 'bg-education-100 text-education-800';
      case 'кружок': return 'bg-academic-100 text-academic-800';
      case 'доп. занятие': return 'bg-green-100 text-green-800';
      case 'воспитательная работа': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-education-800 mb-4">
          Расписание занятий
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Расписание уроков и дополнительных занятий для 4-А класса
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
          <Icon name="Calendar" size={24} className="text-education-600" />
          <span>Основное расписание</span>
        </h3>
        <div className="grid gap-4">
          {schedule.map((day, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-education-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-education-600">{index + 1}</span>
                  </div>
                  <span>{day.day}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {day.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon name={getSubjectIcon(lesson.subject) as any} size={16} className="text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{lesson.subject}</div>
                          <div className="text-xs text-gray-500">
                            Кабинет {lesson.room} • {lesson.time}
                          </div>
                        </div>
                      </div>
                      <Badge className={getTypeColor(lesson.type)}>
                        {lesson.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
          <Icon name="Plus" size={24} className="text-academic-600" />
          <span>Дополнительные занятия</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {additionalActivities.map((activity, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-academic-100 rounded-lg flex items-center justify-center">
                    <Icon name={activity.icon as any} size={16} className="text-academic-600" />
                  </div>
                  <span className="text-lg">{activity.name}</span>
                </CardTitle>
                <CardDescription>{activity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-gray-500" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={14} className="text-gray-500" />
                    <span>{activity.days}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-education-50 to-academic-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <Icon name="Bell" size={24} className="text-education-600" />
          <span>Режим дня</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Основные перемены:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>1-я перемена:</span>
                <span>09:15-09:25 (10 мин)</span>
              </div>
              <div className="flex justify-between">
                <span>2-я перемена:</span>
                <span>10:10-10:30 (20 мин)</span>
              </div>
              <div className="flex justify-between">
                <span>3-я перемена:</span>
                <span>11:15-11:25 (10 мин)</span>
              </div>
              <div className="flex justify-between">
                <span>4-я перемена:</span>
                <span>12:10-12:20 (10 мин)</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3">Важно помнить:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Приходить в школу за 15 минут до начала уроков</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Иметь сменную обувь</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Не опаздывать на уроки</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;