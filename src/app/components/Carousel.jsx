import styles from './Carousel.module.css'
import Image from 'next/image'

export function Carousel () {
    const photoshoot = []
    

    return (
        <section className={`${styles.carouselBlock}`}>
            <div className={`${styles.carouselSlide}`}>
                {Array.from(Array(12).keys()).map((el) =>{
                    return(<Image
                        src={'/images/photoshoot/' +(el+1)+'.png'}
                        loading = 'lazy'
                        width={1920}
                        height={1080}
                        alt="Image"
                        key={el}
                    />)    
                })}
            </div>
        </section>
    )
}