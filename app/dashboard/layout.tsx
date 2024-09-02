function Layout({
  children,
  notifications,
  user,
  revenue,
  login,
}: {
  children: React.ReactNode,
  notifications: React.ReactNode,
  user: React.ReactNode,
  revenue: React.ReactNode,
  login: React.ReactNode,
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      {children}
      <div style={{ display: "flex",justifyContent: 'center', width: '100%' }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{user}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  )
}

export default Layout;
