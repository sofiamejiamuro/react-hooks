import React from 'react';
import useForm from '../../hook/useForm'
import './effects.css';

const FormWithCustomHook = () => {

/*   const [form, setForm] = useState({
    name: '',
    email: ''
  }); */

  // Este customHook use Form suple al useState de arriba
  // Retorna [ values, handleInputChange] del useState hook inside it.
  // Entonces haciendo el destructuring del array es otro valor y otra función

  const [values, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = values;

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(values);
  }

  return (
      <form onSubmit={ handleSubmit }>
        <h1>Form With Custom Hook</h1>
        <hr />
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            className="form-control"
            autoComplete="off"
            value={ name }
            onChange={ handleInputChange }
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Tu correo"
            className="form-control"
            autoComplete="off"
            value={ email }
            onChange={ handleInputChange }
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="*****"
            className="form-control"
            value={ password }
            onChange={ handleInputChange }
          />
        </div>
        <button
          type="submit"
          className="btn btn-danger"
        >Sing up</button>
      </form>
    )
}
 
export default FormWithCustomHook;