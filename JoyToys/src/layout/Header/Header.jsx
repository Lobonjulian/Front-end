import Logo from '@components/ui/Logo';
import NavItem from './NavItem';

const navigationItems = [
  {
    id: 1,
    href: 'events',
    name: 'Eventos',
    color: 'var(--color-primary-200)',
  },
  {
    id: 2,
    href: 'products',
    name: 'Productos',
    color: 'var(--color-accent-300)',
  },
  {
    id: 3,
    href: 'contact',
    name: 'Contacto',
    color: 'var(--color-accent-200)',
  },
];



const Header = () => {
  return (
    <header className="flex justify-between">
      <Logo />

      <nav className="flex">
        {navigationItems.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            color={item.color}
            onClick={() => {console.log('navegar a', item.path)}}
          />
        ))}
      </nav>
    </header>
  );
};

export default Header;
