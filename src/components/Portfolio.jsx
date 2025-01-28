import React from "react";

export default function Portfolio() {
    return (
        <>
            <h1 className="text-6xl font-bold my-2.5 mb-10">Projects</h1>
            <div className="grid grid-cols-3 content-center ">
                <div className="carousel-item m-2">
                    <div className="portfolio-container">
                        <div className="card bg-red-100 w-96 shadow-xl">
                            <figure>
                                <img src="/Yummage.png" alt="Yummage Site" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title ">Yummage</h2>
                                <p>
                                    Yummage is a CRUD recipe application where the user is able to
                                    explore recipes from the Spoonacular API and other users. The user
                                    can create and save recipes for later use.
                                </p>
                                <br></br>
                                <div className="card-actions justify-end">
                                    <a
                                        href="https://yummage.onrender.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Visit Site</button>
                                    </a>
                                    <a
                                        href="https://github.com/Nemo080/TKH-recipe-capstone"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Github Repo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item m-2">
                    <div className="portfolio-container">
                        <div className="card bg-red-100 w-96 shadow-xl">
                            <figure>
                                <img src="/spyfam.png"
                                    alt="spy x family anime api" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title ">Anime API</h2>
                                <p>
                                    No idea what SPY x FAMILY is? Come find out :) <br />{" "}<br />
                                    Programmed with HTML, CSS, JavaScript
                                </p>
                                <br></br>
                                <div className="card-actions justify-end">
                                    <a
                                        href="https://spy-family-eight.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Visit Site</button>
                                    </a>
                                    <a
                                        href="https://github.com/Nemo080/anime-api"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Github Repo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item m-2">
                    <div className="portfolio-container">
                        <div className="card bg-red-100 w-96 shadow-xl">
                            <figure>
                                <img src="/Grocerylist.png"
                                    alt="grocery list" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title ">Grocery List</h2>
                                <p>
                                    It's just a random list of groceries{" "}
                                    <br /> <br />Programmed with HTML, CSS, JavaScript
                                </p>
                                <br></br>
                                <div className="card-actions justify-end">
                                    <a
                                        href="https://nemo080.github.io/TKH-GroceryList/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Visit Site</button>
                                    </a>
                                    <a
                                        href="https://github.com/Nemo080/TKH-GroceryList"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Github Repo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item m-2">
                    <div className="portfolio-container">
                        <div className="card bg-red-100 w-96 shadow-xl">
                            <figure>
                                <img src="/KJSGame.png"
                                    alt="knights of javascript" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title ">Knights of JavaScript</h2>
                                <p>
                                    Two-player game... see who can beat the other! <br /> <br />Programmed
                                    with HTML, CSS, JavaScript
                                </p>
                                <br></br>
                                <div className="card-actions justify-end">
                                    <a
                                        href="https://nemo080.github.io/TKH-KJS/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Visit Site</button>
                                    </a>
                                    <a
                                        href="https://github.com/Nemo080/TKH-KJS"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Github Repo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item m-2">
                    <div className="portfolio-container">
                        <div className="card bg-red-100 w-96 shadow-xl">
                            <figure>
                                <img src="/RPSGame.png" alt="rock, paper. scissors game" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title ">Rock, Paper, Scissors!</h2>
                                <p>
                                    Can you beat a computer at rock, paper, scrssors? Let's see you try!{" "}
                                    <br /> <br />Fully programmed with JavaScript
                                </p>
                                <br></br>
                                <div className="card-actions justify-end">
                                    <a
                                        href="https://nemo080.github.io/TKH-RPSGame/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Visit Site</button>
                                    </a>
                                    <a
                                        href="https://github.com/Nemo080/TKH-RPSGame"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Github Repo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item m-2">
                    <div className="portfolio-container">
                        <div className="card bg-red-100 w-96 shadow-xl">
                            <figure>
                                <img src="/Adventure.png"
                                    alt="lunch adventure" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title ">Adventure</h2>
                                <p>
                                    Wanna have lunch? Well, your options are limited but have a go at
                                    this small little lunch adventure and see what you end on. <br />{" "}
                                    <br />
                                    Programmed with HTML, CSS, JavaScript
                                </p>
                                <br></br>

                                <div className="card-actions justify-end">
                                    <a
                                        href="https://nemo080.github.io/TKH-adventure/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Visit Site</button>
                                    </a>
                                    <a
                                        href="https://github.com/Nemo080/TKH-adventure"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Github Repo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item m-2">
                    <div className="portfolio-container">
                        <div className="card bg-red-100 w-96 shadow-xl">
                            <figure>
                                <img src="/AboutMeAssignment.png" alt="about me" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title ">About Me</h2>
                                <p>
                                    Just a teeny tiny bit about me. <br /> About Me was programmed
                                    using HTML and CSS
                                </p>
                                <br></br>
                                <div className="card-actions justify-end">
                                    <a
                                        href="https://nemo080.github.io/Portfolio-aboutme/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Visit Site</button>
                                    </a>
                                    <a
                                        href="https://github.com/Nemo080/Portfolio-aboutme"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-primary">Github Repo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
