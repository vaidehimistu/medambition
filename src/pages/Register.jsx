export default function Register() {
  return (
    <div className="section">
      <h1>Register</h1>
      <form>
        <div>
          <label>Full Name:</label><br />
          <input type="text" required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" required />
        </div>
        <div>
          <label>Course of Interest:</label><br />
          <input type="text" required />
        </div>
        <button className="button" type="submit">Register Now</button>
      </form>
    </div>
  );
}