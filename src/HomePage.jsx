import NavBar from "./NavBar";

function HomePage() {
  if(!localStorage.getItem("email") || !localStorage.getItem("password")) {
    window.location.href = "/"; // Redirect to login page
  }

  return (
    <>
     <NavBar />
     <h1>Welcome!</h1>
    </>

  );
}

export default HomePage;