import { Link } from "react-router-dom"
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

function Footer() {
  const social =[
    {
        link: 'https://www.linkedin.com/in/kartik-mehta-6729b0255/',
        label: "Linkedin",
        Icon:SiLinkedin,
    },
    {
        link: 'https://github.com/kartikmehta18',
        label: "Github",
        Icon: SiGithub,
    },
    {
        link: 'https://x.com/Kartikmehta_png',
        label: "x",
        Icon:SiX,
    },
]

  return (
    <>
    
    {/* <div className="flex justify-center items-center">
  <iframe className="-mb-12 xl:hidden md:hidden" src="https://lottie.host/embed/1563e308-b03d-4c53-9c81-510ca83578da/Yy6PxIJtQ3.json"></iframe>
</div> */}
  <hr className="border-t-1 border-orange-500 -mb-4"/>


    <div className="flex justify-between mt-6">
      
     {/* <h1>Created with ❤️ by <Link  className="text-orange-500  " to={"https://github.com/kartikmehta18"} target="_blank">kartikmehta18</Link></h1> */}
     <h1>Created with ❤️ by<Link  className="text-orange-500  " to={"https://github.com/kartikmehta18"} target="_blank">Pull Stackers</Link></h1>
     <div className='flex items-center gap-5'> 
            {social.map((social,index) =>{
                return(
                <Link 
                to={social.link} 
                key={index} 
                target="_blank"
                >
                    
                    <social.Icon  className='w-5 h-4 hover:scale-125 transition-all'/>
                </Link>
                );
            })}
        </div>
    </div>

    
 
    </>
  )
}

export default Footer
