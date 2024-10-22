//Crear y anidar componentes
function MyButton() {
    return (
      <button>
        Soy un botón
      </button>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h1>Bienvenido a mi aplicación</h1>
        <MyButton />
      </div>
    );
  }
 
  
//Añadir marcado con jsx 
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Foto de ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  
//Renderizado condicional
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

//renderizado de listas
const products = [
    { title: 'Col', isFruit: false, id: 1 },
    { title: 'Ajo', isFruit: false, id: 2 },
    { title: 'Manzana', isFruit: true, id: 3 },
  ];
  
  export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }
  
//Responder eventos
function MyButton() {
    function handleClick() {
      alert('¡Me hiciste clic!');
    }
  
    return (
      <button onClick={handleClick}>
        Hazme clic
      </button>
    );
  }

//Actualizar pantalla
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Contadores que se actualizan separadamente</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Hiciste clic {count} veces
    </button>
  );
}

//compartir datos entre componentes
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Contadores que se actualizan juntos</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Hiciste clic {count} veces
    </button>
  );
}

