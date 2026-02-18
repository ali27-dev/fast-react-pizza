import Menuitem from './MenuItem';
import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul className="disabled-stone-200 divide-y px-2">
      {menu.map((pizza) => (
        <Menuitem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
