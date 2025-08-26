import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'journal', label: 'Электронный журнал', icon: 'BookOpen' },
    { id: 'methodology', label: 'Методика', icon: 'GraduationCap' },
    { id: 'materials', label: 'Материалы', icon: 'FileText' },
    { id: 'parents', label: 'Родителям', icon: 'Users' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-education-500 to-academic-500 rounded-full flex items-center justify-center">
                <Icon name="GraduationCap" size={16} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-education-800">Начальная школа</h1>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onSectionChange(item.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full justify-start flex items-center space-x-2"
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;