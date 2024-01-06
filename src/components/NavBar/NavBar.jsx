import React from 'react'
import './NavBar.css';
import logo from '../../assets/home1/greenlogo1.png'
const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img class="img-fluid logoImg" src={logo} alt="Logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <img src="./assets/menu1.png" alt="Menu" />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto text-center">
                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle d-flex align-items-center gap-2 justify-content-center"
                                    href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span>Home</span> <i class="fa mt-1">&#xf107;</i>

                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="index.html">Home 1</a></li>
                                    <li><a class="dropdown-item" href="Home2.html">Home 2</a></li>
                                    <li><a class="dropdown-item" href="Home3.html">Home 3</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  d-flex align-items-center gap-2  " href="About.html">
                                    About
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link  dropdown-toggle  d-flex align-items-center gap-2 justify-content-center"
                                    href="Course.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span>
                                        Course
                                    </span> <i class="fa mt-1">&#xf107;</i>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="Course1.html">Course 1</a></li>
                                    <li><a class="dropdown-item" href="Course2.html">Course 2</a></li>
                                    <li><a class="dropdown-item" href="instructor.html">Instructor</a></li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle  d-flex align-items-center gap-2 justify-content-center"
                                    href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span>
                                        Pages
                                    </span> <i class="fa mt-1">&#xf107;</i>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/EventsGrid.html">Events Grid</a></li>
                                    <li><a class="dropdown-item" href="/EventsList.html">Events List</a></li>
                                    <li><a class="dropdown-item" href="/EventsDetails.html">Events Details</a></li>
                                    <li><a class="dropdown-item" href="Gallary.html">Gallery</a></li>
                                    <li><a class="dropdown-item" href="/Testimonial.html">Testimonial</a></li>
                                    <li><a class="dropdown-item" href="/ContactUs.html">Contact Us</a></li>
                                    <li><a class="dropdown-item" href="/404.html">404 page</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle  d-flex align-items-center gap-2 justify-content-center"
                                    href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span>
                                        Blog
                                    </span> <i class="fa mt-1">&#xf107;</i>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/Blog.html">Blog</a></li>
                                    <li><a class="dropdown-item" href="/BlogDetails.html">Blog Details</a></li>

                                </ul>
                            </li>

                        </ul>
                        <form class="d-flex gap-4 authBtn">
                            <a href="login.html" class="" type="submit">Login</a>
                            <button class="signup_button">
                                <a href="signup.html" class="" type="submit"><img src="/assets/home1/user-circle.png"
                                    alt="" />
                                    Create Account</a>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar