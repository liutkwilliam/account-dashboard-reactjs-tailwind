import { FormEvent } from "react"

export type FormInput = {
  label: string, 
  id: string, 
  type: string
}

export const GenerateFormElements = (formInputs: FormInput[]) => {
  // write element generation code here
  // label = define label / naming
  // type = define type of the input
  return formInputs.map(formInput => {
    return (
      <div className="m-2 flex">
        <label className="mx-4 my-2 flex-1 text-left">{formInput.label}</label>
        <input className="p-2 bg-slate-100 dark:bg-black" id ={formInput.id} type={formInput.type} />
      </div>
    )
  }
  )
}

const SignIn = () => {
  let formInputs = [
    {label: "Email", id: "email", type: "email"},
    {label: "Password", id: "password", type: "password"}
  ];

  // write code here

  const signIn = (event: FormEvent) => {
    event.preventDefault(); // prevent the data to process but will go to firebase (backend)
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
      // double equal for numbers, triple equal for strings
      if (data.email === "") throw("Please enter an email");
      if (data.password === "") throw("Please enter a password");
      if (data.password.length < 8) throw("The password should be at least 8 characters long");
    } catch (error) {
      alert(error);
    }
  }

  return (<form onSubmit={signIn}>
    <h1 className="text-6xl p-4 m-4 font-bold">Sign in</h1>
    {GenerateFormElements(formInputs)}
    <button className="m-4 w-6/12 hover:bg-violet-700 hover:text-white">Submit</button>
    {/* create components here */}
  </form>)
}

export default SignIn