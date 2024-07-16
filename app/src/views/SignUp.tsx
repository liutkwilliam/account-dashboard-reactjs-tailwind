import { FormEvent } from "react"
import { FormInput, GenerateFormElements } from "./SignIn";

const SignUp = () => {
  let formInputs: FormInput[] = [
    {label: "First Name", id: "firstName", type: "text"},
    {label: "Last Name", id: "lastName", type: "text"},
    {label: "Email", id: "email", type: "email"},
    {label: "Password", id: "password", type: "password"},
    {label: "Confirm Password", id: "confirmPassword", type: "password"}
  ];
  
  // write code here

  const signUp = (event: FormEvent) => {
    event.preventDefault();

    // @ts-ignore
    const elementsArray = [...event.target.elements];
    
    // write function code here
    const data = elementsArray.reduce((acc, element) => {
      if (element.id) {
        acc[element.id] = element.value;
      }

      return acc;
    }, {}) // important

    try {
      // double equal for numbers and check condition, triple equal for strings
      if (data.firstName === '') throw("Please enter a first name")
      if (data.lastName === '') throw("Please enter a last name")
      if (data.email === "") throw("Please enter an email");
      if (data.password === "") throw("Please enter a password");
      if (data.confirmPassword === '') throw("Please confirm your password")
      if (data.password.length < 8) throw("The password should be at least 8 characters long");
      if (data.password !== data.confirmPassword) throw ("The password does not match")
    } catch (error) {
      alert(error);
    }
  }

  // use quick fix to resolve missing components
  return (<form onSubmit={signUp}>
    <h1 className="text-6xl p-4 m-4 font-bold">Sign up</h1>
    {GenerateFormElements(formInputs)} 
    <button className="m-4 w-6/12 hover:bg-violet-700 hover:text-white">Submit</button>
    {/* create components here */}
  </form>)
}

export default SignUp