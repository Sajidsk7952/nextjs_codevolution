type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Object;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

async function Page() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (data) => data.json()
  );
//   console.log(users);
  return (
    <div>
      <h1 className="text-xl font-bold ">Users Page </h1>
      <div className="grid grid-cols-2 gap-4 p-4 rounded-lg">
        {users.map((user : User) => (
          <div
          key={user.id}
          className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600"
        >
          <div className="flex flex-col space-y-1">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm ">{user.username}</p>
          </div>
          <div className="flex flex-col space-y-1 items-end">
            <div className="text-md">{user.email}</div>
            <div className="text-md">{user.phone}</div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
