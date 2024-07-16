const AccountView = () => {
  let data = [
    {label: "First name", content: "John"},
    {label: "Last name", content: "Doe"},
    {label: "Email", content: "john.doe@example.com"}
  ]

  return (<div>
    <h1 className="text-6xl p-4 m-4 font-bold">Account View</h1>
    {/* create elements here */}
    {data.map(dataElement => {
      return (
        <div className="flex">
          <span className="flex-1 text-left p-2 m-1">{dataElement.label}</span>
          <span className="flex-1 text-left p-2 m-1">{dataElement.content}</span>
        </div>
      )
    })}
  </div>)
}

export default AccountView