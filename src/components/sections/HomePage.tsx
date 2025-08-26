import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-gradient-to-r from-education-50 to-academic-50 rounded-lg">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-education-800 mb-4">
            Добро пожаловать в наш класс!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Здесь вы найдете всю необходимую информацию о жизни нашего класса, 
            успехах учеников и полезные материалы для родителей.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">4-А класс</Badge>
            <Badge variant="secondary" className="text-sm">30 учеников</Badge>
            <Badge variant="secondary" className="text-sm">2024-2025 учебный год</Badge>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="User" size={20} className="text-education-600" />
              <span>Об учителе</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Иванова Мария Петровна</h3>
              <p className="text-gray-600">
                Учитель начальных классов высшей квалификационной категории
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-academic-600" />
                  <span>Стаж работы: 15 лет</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="GraduationCap" size={16} className="text-academic-600" />
                  <span>Образование: МПГУ им. В.И. Ленина</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-academic-600" />
                  <span>Почетный работник образования РФ</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="BookOpen" size={20} className="text-education-600" />
              <span>Последние новости</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-education-400 pl-4">
                <p className="font-medium text-sm text-gray-800">
                  Проведена контрольная работа по математике
                </p>
                <p className="text-xs text-gray-500">25 августа 2025</p>
              </div>
              <div className="border-l-4 border-academic-400 pl-4">
                <p className="font-medium text-sm text-gray-800">
                  Родительское собрание переносится на 30 августа
                </p>
                <p className="text-xs text-gray-500">20 августа 2025</p>
              </div>
              <div className="border-l-4 border-education-400 pl-4">
                <p className="font-medium text-sm text-gray-800">
                  Новые учебные материалы добавлены в раздел "Материалы"
                </p>
                <p className="text-xs text-gray-500">18 августа 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-education-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} className="text-education-600" />
            </div>
            <h3 className="font-semibold mb-2">30 учеников</h3>
            <p className="text-sm text-gray-600">в нашем дружном классе</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-academic-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Trophy" size={24} className="text-academic-600" />
            </div>
            <h3 className="font-semibold mb-2">12 отличников</h3>
            <p className="text-sm text-gray-600">по итогам прошлого года</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-education-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Calendar" size={24} className="text-education-600" />
            </div>
            <h3 className="font-semibold mb-2">185 учебных дней</h3>
            <p className="text-sm text-gray-600">в этом учебном году</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;