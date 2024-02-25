function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <h1 className="text-4xl font-bold mb-2 text-center">
        Welcome to <br /> <span className="text-6xl">Gambit Challenge</span>
      </h1>
      <p className="text-xl mb-5">Sign in to see the data</p>
      <div className="flex flex-row space-x-3 "></div>
    </div>
  );
}

export default Home;
