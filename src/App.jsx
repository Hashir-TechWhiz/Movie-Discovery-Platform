function App() {
    return (
        <main>
            <div className="pattern" />

            <div className="wrapper">
                <div className="flex justify-center">
                    <img src="./logo.png" alt="Logo" width={60} height={60} />
                </div>

                <header>
                    <img src="./hero.png" alt="Hero" />
                    <h1>
                        Find <span className="text-gradient">Movies</span> You'll Enjoy
                        Without the Hassle
                    </h1>
                </header>
            </div>
        </main>
    );
}

export default App;
