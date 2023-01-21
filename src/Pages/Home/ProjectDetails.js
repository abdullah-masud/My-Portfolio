import { useParams, Link } from 'react-router-dom';
import allProjects from '../Shared/mernProjectsData'
import { IoMdArrowBack } from "react-icons/io";

const ProjectDetails = () => {
    const { projectId } = useParams()
    const selectedProject = allProjects.filter(p => p.id === projectId);
    const { image1, image2, image3, name, fullDescription, technologies, liveSiteHref, githubClientHref, githubServerHref } = selectedProject[0]
    return (
        <div className='bg-black mx-auto h-screen  flex justify-center flex-col items-center'>
            <div className='max-w-7xl mx-auto px-3 lg:px-0 bg-black lg:py-0 py-12 pt-24 lg:pt-0 '>
                <div className='flex gap-6 lg:flex-row flex-col items-center'>
                    <div class="carousel lg:w-1/4 rounded-xl lg:flex-1">
                        <div id="slide1" class="carousel-item relative w-full">
                            <img src={image1} class="w-full" alt='' />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" class="btn btn-circle btn-ghost">❮</a>
                                <a href="#slide2" class="btn btn-circle btn-ghost">❯</a>
                            </div>
                        </div>
                        <div id="slide2" class="carousel-item relative w-full">
                            <img src={image2} class="w-full" alt='' />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" class="btn btn-circle btn-ghost">❮</a>
                                <a href="#slide3" class="btn btn-circle btn-ghost">❯</a>
                            </div>
                        </div>
                        <div id="slide3" class="carousel-item relative w-full">
                            <img src={image3} class="w-full" alt='' />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" class="btn btn-circle btn-ghost">❮</a>
                                <a href="#slide4" class="btn btn-circle btn-ghost">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex-1'>
                        <h2 className='text-accent font-semibold font-primary text-6xl lg:mb-6'>{name}</h2>
                        <h2 className='text-white '>{fullDescription}</h2>
                        <h2 className='text-white my-6'>Technologies Used: {technologies}</h2>
                        <div className='flex gap-3 mb-3'>
                            <a className='text-accent hover:text-white cursor-pointer' href={liveSiteHref} target="_blank" rel='noreferrer'>
                                Live Website
                            </a>
                            <a className='text-accent hover:text-white cursor-pointer' href={githubClientHref} target="_blank" rel='noreferrer'>
                                Github Client
                            </a>
                            {
                                githubServerHref && <a className='text-accent hover:text-white cursor-pointer' href={githubServerHref} target="_blank" rel='noreferrer'>
                                    Github Server
                                </a>
                            }
                        </div>
                        <div className=''>
                            <Link to='/' className='btn btn-sm bg-accent hover:bg-accent-hover '><span><IoMdArrowBack /></span> Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectDetails;