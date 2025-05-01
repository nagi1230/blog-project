import React from 'react'
import "./Portfolio.css"
import Header from './Header'
import profile from "../Assets/profile.png"
import footerImg from "../Assets/Footer.png"
import destidashbord from "../Assets/destidashbord.png"

function Portfolio() {

    const posts = [
        {
            id: 1,
            year: "2020",
            category: "Dashboard",
            title: "Designing Dashboards",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            image: destidashbord
        },
        {
            id: 2,
            year: "2018",
            category: "Illustration",
            title: "Vibrant Portraits of 2020",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            image: destidashbord
        }
    ];

    return (
        <div className='main-dev'>
            <Header />
            <div className='portfolio-profile'>
                <div>
                    <h1>Hi, I am Dilpavittar,<br /> Creative Technologist</h1>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br /> amet sint.
                        Velit officia consequat duis enim velit mollit.<br /> Exercitation veniam consequat
                        sunt nostrud amet.
                    </p>
                </div>
                <div><img src={profile} alt='' /></div>
            </div>
            <button className='down-resume'>Download Resume</button>
            <div className='recent-posts-dev'>
                <p className='post-title'>Recent Posts</p>
                <div className='cards'>
                    <div className='post-card'><h2>Making a design system from <br />scratch</h2>
                        <p>12 Feb 2020 <span className='straightline'>|</span> <span>Figma, Icon Design</span></p>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className='post-card'><h2>Creating pixel perfect icons in <br /> Figma </h2>
                        <div className='viewDetails'>View all</div>
                        <p>12 Feb 2020 <span className='straightline'>|</span> <span>Figma, Icon Design</span></p>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
            <div className='feature'>
                <p className='feature-title'>Recent Posts</p>
                {posts.map((post) => (
                    <div key={post.id} className='post'>
                        <img src={post.image} alt={post.title} className='post-image' />
                        <div className='post-content'>
                            <h1 className='post-title'>{post.title}</h1>
                            <div className='post-meta'>
                                <span className='year'>{post.year}</span>
                                <span className='category'>{post.category}</span>
                            </div>
                            <p className='post-description'>{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <footer className='footer'>
                <img src={footerImg} alt='' />
                <p>Copyright ©2020 All rights reserved </p>
            </footer>
        </div>
    )
}

export default Portfolio
