import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagramSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { dayak_strip } from './objective';

const Action = () =>{
    return (<section className="relative w-full h-screen max-h-[800px]">
        <div className="absolute top-0 w-full h-full bg-dun-drawn-large opacity-30 bg-center bg-no-repeat -z-10"></div>
        <section className='lg:pt-[400px] max-container padding-container relative'>
            <div className="text-center font-extrabold text-[40px] pt-20 max-container padding-container">
                <h2 className="pb-10">WHAT ARE YOU WAITING FOR?</h2>
                <h2>FOLLOW US TODAY!</h2>
            </div>
            <div className="flex flex-row justify-center gap-10 py-16 lg:pt-10 x-10">
                <a href='https://www.facebook.com/pmsum.sarawak/?locale=ms_MY'>
                    <FontAwesomeIcon
                        icon={faFacebookSquare}
                        style={{ color: "red", fontSize: 64}}
                        
                    />
                </a>
                <a href='https://my.linkedin.com/in/persatuan-mahasiswa-sarawak-universiti-malaya-4265272aa'>
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ color: "black", fontSize: 64}}
                        
                    />
                </a>
                <a href='https://www.instagram.com/pmsum_/?hl=en'>
                    <FontAwesomeIcon
                        icon={faInstagramSquare}
                        style={{ color: "", fontSize: 64}}
                        className="text-yellow-dark"
                    />
                </a>
            </div>
            {dayak_strip('left-0 hidden lg:inline')}
            {dayak_strip('right-0 hidden lg:inline')}
        </section>
    </section>)
}

export default Action;