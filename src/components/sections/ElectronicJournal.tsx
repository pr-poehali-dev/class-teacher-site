import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Student {
  id: string;
  name: string;
  grades: {
    math: number[];
    russian: number[];
    reading: number[];
    science: number[];
  };
  homework: {
    date: string;
    subject: string;
    task: string;
    completed: boolean;
  }[];
}

const ElectronicJournal = () => {
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  
  const students: Student[] = [
    {
      id: '1',
      name: 'Александров Максим',
      grades: {
        math: [5, 4, 5, 4],
        russian: [4, 5, 4, 5],
        reading: [5, 5, 4, 5],
        science: [4, 4, 5, 4],
      },
      homework: [
        { date: '2025-08-26', subject: 'Математика', task: 'Стр. 45, упр. 1-5', completed: true },
        { date: '2025-08-25', subject: 'Русский язык', task: 'Выучить правило, упр. 78', completed: false },
      ]
    },
    {
      id: '2', 
      name: 'Белова Анна',
      grades: {
        math: [5, 5, 4, 5],
        russian: [5, 4, 5, 5],
        reading: [5, 5, 5, 4],
        science: [5, 4, 4, 5],
      },
      homework: [
        { date: '2025-08-26', subject: 'Математика', task: 'Стр. 45, упр. 1-5', completed: true },
        { date: '2025-08-25', subject: 'Русский язык', task: 'Выучить правило, упр. 78', completed: true },
      ]
    }
  ];

  const subjects = [
    { key: 'math', name: 'Математика', icon: 'Calculator' },
    { key: 'russian', name: 'Русский язык', icon: 'BookOpen' },
    { key: 'reading', name: 'Чтение', icon: 'Book' },
    { key: 'science', name: 'Окружающий мир', icon: 'Globe' },
  ];

  const getAverageGrade = (grades: number[]) => {
    return (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(1);
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 5) return 'bg-green-100 text-green-800';
    if (grade >= 4) return 'bg-blue-100 text-blue-800';
    if (grade >= 3) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-education-800">Электронный журнал</h2>
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={16} className="text-gray-500" />
          <span className="text-sm text-gray-600">Август 2025</span>
        </div>
      </div>

      <Tabs defaultValue="grades" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="grades">Оценки</TabsTrigger>
          <TabsTrigger value="homework">Домашние задания</TabsTrigger>
        </TabsList>

        <TabsContent value="grades" className="space-y-4">
          <div className="grid gap-4">
            {students.map((student) => (
              <Card key={student.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <Icon name="User" size={18} className="text-education-600" />
                      <span>{student.name}</span>
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedStudent(selectedStudent === student.id ? '' : student.id)}
                    >
                      {selectedStudent === student.id ? 'Скрыть' : 'Подробнее'}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {subjects.map((subject) => {
                      const grades = student.grades[subject.key as keyof typeof student.grades];
                      const average = getAverageGrade(grades);
                      return (
                        <div key={subject.key} className="text-center">
                          <div className="flex items-center justify-center space-x-1 mb-2">
                            <Icon name={subject.icon as any} size={16} className="text-gray-500" />
                            <span className="text-sm font-medium">{subject.name}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 justify-center mb-2">
                            {grades.map((grade, index) => (
                              <Badge
                                key={index}
                                className={`${getGradeColor(grade)} text-xs`}
                              >
                                {grade}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm text-gray-600">
                            Средний балл: <span className="font-medium">{average}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {selectedStudent === student.id && (
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="font-medium mb-3">Детальная информация</h4>
                      <div className="space-y-3">
                        {subjects.map((subject) => {
                          const grades = student.grades[subject.key as keyof typeof student.grades];
                          return (
                            <div key={subject.key} className="flex items-center justify-between">
                              <span className="text-sm">{subject.name}:</span>
                              <div className="flex space-x-1">
                                {grades.map((grade, index) => (
                                  <span
                                    key={index}
                                    className={`inline-flex items-center justify-center w-6 h-6 text-xs rounded ${getGradeColor(grade)}`}
                                  >
                                    {grade}
                                  </span>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="homework" className="space-y-4">
          <div className="grid gap-4">
            {students.map((student) => (
              <Card key={student.id}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="User" size={18} className="text-education-600" />
                    <span>{student.name}</span>
                  </CardTitle>
                  <CardDescription>Домашние задания</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {student.homework.map((task, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg border ${
                          task.completed ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon
                            name={task.completed ? "CheckCircle" : "Clock"}
                            size={18}
                            className={task.completed ? "text-green-600" : "text-yellow-600"}
                          />
                          <div>
                            <div className="font-medium text-sm">{task.subject}</div>
                            <div className="text-sm text-gray-600">{task.task}</div>
                            <div className="text-xs text-gray-500">{task.date}</div>
                          </div>
                        </div>
                        <Badge variant={task.completed ? "default" : "secondary"}>
                          {task.completed ? "Выполнено" : "В процессе"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ElectronicJournal;