import { NavItem } from './components';

const navItems = ['Home', 'My Story', 'Projects'];

function NavItems() {
  return (
    <nav>
      <ul className='flex gap-x-4'>
        {navItems.map((navItem, i) => (
          <li key={i}>
            <NavItem label={navItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavItems;
