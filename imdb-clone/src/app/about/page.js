import React from 'react'

const page = () => {
    return (
        <div className='h-[900px] w-full md:px-28 bg dark:bg-gray-900'>
            <div className="p1 md:py-10">
                <p className=' text-3xl font-extrabold text-amber-600'>About our Website</p>
                <p className='w-full text-md font-medium pt-8 px-10 dark:text-gray-400'>
                    Welcome to Our IMDb Clone!
                    At Our Website, we are passionate about movies, TV shows, and everything in the world of entertainment. Our mission is to provide an extensive and engaging platform for film enthusiasts, critics, and casual viewers alike. Just like IMDb, we offer a comprehensive database of movies, TV shows, actors, directors, and more, making it easy for you to explore and discover new content.
                </p>
            </div>

            <div className="feat md:my-10">
                <p className=' text-3xl font-extrabold text-amber-600'>Features</p>

                <p className='text-md font-medium my-8 px-10 dark:text-gray-400'>
                    <ul>
                        Comprehensive Database: We offer a vast collection of information on movies, TV shows, actors, directors, and other industry professionals. Our database is regularly updated to ensure you have access to the latest information.
                    </ul>
                    <br />
                    <ul>
                        User Reviews and Ratings: Share your opinions and read reviews from other users. Our rating system allows you to gauge the popularity and quality of any movie or show at a glance.
                    </ul>
                    <br />
                    <ul>
                        Detailed Filmography: Discover the complete works of your favorite actors and directors. Our detailed filmographies include all their major works, awards, and career highlights.
                    </ul>
                    <br />
                    <ul>
                        Trending Content: Stay updated with the latest trends in the entertainment world. Our trending section highlights the most popular movies, TV shows, and industry news.
                    </ul>
                    <br />
                    <ul>
                        Watchlist: Create a personalized watchlist to keep track of movies and shows you want to watch. Never miss out on the latest releases or your all-time favorites.
                    </ul>
                </p>
            </div>
            <div className="join md:my-10">
                <p className=' text-3xl font-extrabold text-amber-600'>Join Us</p>
                <p className='text-md font-medium my-8 px-10 dark:text-gray-400 pb-10'>
                    Whether you're a die-hard cinephile or a casual viewer, IMDB Clone is the perfect place to indulge your love for entertainment. Explore our database, rate and review your favorite movies and shows, and connect with a community of fellow enthusiasts. Join us today and become a part of the ultimate movie and TV show experience!
                </p>
            </div>
        </div>
    )
}

export default page
