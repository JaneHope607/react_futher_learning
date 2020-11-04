export default function Login() {
    const [formState, setFormState] = useState({});
  
    const handleChange = ({ target }) => {
      const { name, value } = target;
      setFormState((prev) => ({
        ...prev,
        [name]: value
      }));
      // above this is state setter callback function - new object to be returned
    };
  
    return (
      <form>
        <input
          value={formState.firstName}
          onChange={handleChange}
          name="firstName"
          type="text"
        />
        <input
          value={formState.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
      </form>
    );
  }