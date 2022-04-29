import React from 'react';

const Review = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full text-center">
                        <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                            This smells great and purchased at a great price! I made the wrong purchase, however, my boyfriend loved this stuf anyways. So I just desided to keep this rather than go through an exchange or refund process.
                        </p>
                        <div className="mt-12 mb-6 flex justify-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" className="rounded-full w-24 h-24 shadow-lg" alt="smaple image"/>
                        </div>
                        <p className="text-gray-500">- Anna Morian</p>
                    </div>
                    <div className="carousel-item relative float-left w-full text-center">
                        <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                        This product exceeded my expectations! I have no complaints about this cologne. It smells fresh, vibrant, sporty, and very summery. This cologne is everything I wanted, and then some! I
                        </p>
                        <div className="mt-12 mb-6 flex justify-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" className="rounded-full w-24 h-24 shadow-lg" alt="smaple image"/>
                        </div>
                        <p className="text-gray-500">- Teresa May</p>
                    </div>
                    <div className="carousel-item relative float-left w-full text-center">
                        <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                        I'm extremely pleased with the cologne scent. If this review was based solely on the smell, it would have 5 stars. However, although the cologne arrived in its package and was still wrapped, the entire cap was smashed into four pieces."
                        </p>
                        <div className="mt-12 mb-6 flex justify-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" className="rounded-full w-24 h-24 shadow-lg" alt="smaple image"/>
                        </div>
                        <p className="text-gray-500">- Kate Allise</p>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Review;