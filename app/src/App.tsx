import { Route, Routes } from "react-router"

import './App.css'
import SignIn from "./views/SignIn"
import PageNotFound from "./views/PageNotFound"
import SignUp from "./views/SignUp"
import { Link } from "react-router-dom"
import AccountView from "./views/AccountView"

let links = [
 { text: "Sign in", link: "sign-in" },
 { text: "Sign up", link: "sign-up" },
 { text: "Account", link: "account" },
]

// main App component
function App() {

  return (
    <div>
      <div>
        {links.map(link => {
          return <Link className="p-4 m-4 hover:underline" to={link.link}>{link.text}</Link>
        })}
      </div>
      <Routes>
        <Route 
          index 
          element={<SignIn />}
        />
        <Route 
          path="sign-in" 
          element={<SignIn />}
        />
        <Route 
          path="sign-up" 
          element={<SignUp />}
        />
        <Route 
          path="account" 
          element={<AccountView />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <div className="my-4"><p className="text-xs">This content is developed by <a href="https://github.com/rarya618">Russal Arya</a>, modified by <a href="https://github.com/liutkwilliam">William Liu</a>.</p></div>
    </div>
  )
}

export default App
