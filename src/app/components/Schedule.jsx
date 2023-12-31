import styles from './Schedule.module.css'
import Image from 'next/image'
import { windsong } from '../ui/fonts'



export function Schedule({dinner}) {
    return (
        <section className={`${styles.containerSchedule}`}>
            <div className={`${dinner=='cena' ? styles.scheduleBlockCena : styles.scheduleBlockDCena}`}>
            <div className={`${styles.iconsInfoBlock}`}>
                <svg width="80px" height="80px" viewBox="0 0 48 48" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.4481 13.1661C23.7827 12.9446 24.2173 12.9446 24.5519 13.1661L31.3519 17.6661C31.6317 17.8513 31.8 18.1644 31.8 18.5V22.8009L41.2658 25.411C41.6995 25.5306 42 25.9251 42 26.375V42H40V27.1366L30.5342 24.5265C30.1005 24.4069 29.8 24.0124 29.8 23.5625V19.0374L24 15.1991L18.2 19.0374V23.5625C18.2 23.9758 17.9457 24.3466 17.5601 24.4954L8 28.1859V42H6V27.5C6 27.0867 6.25428 26.7159 6.63987 26.5671L16.2 22.8766V18.5C16.2 18.1644 16.3683 17.8513 16.6481 17.6661L23.4481 13.1661Z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M18 27L18 42L16 42L16 27L18 27Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M32 27L32 42L30 42L30 27L32 27Z" />
                    <path d="M21 32C21 30.3431 22.3431 29 24 29C25.6569 29 27 30.3431 27 32V42H21V32Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M23 14V6H25V14H23Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M28 11L20 11L20 9L28 9L28 11Z" />
                </svg>
                <svg height="80px" width="80px" version="1.1" id="Capa_1" viewBox="0 0 462.885 462.885">
                <path d="M359.544,87.075c-19.054-25.112-45.501-44.314-75.086-54.679c-0.669-8.337-4.226-16.086-10.205-22.065
                    C267.591,3.669,258.733,0,249.312,0c-6.385,0-12.512,1.685-17.87,4.845C226.084,1.685,219.957,0,213.572,0
                    c-9.421,0-18.278,3.669-24.94,10.331c-5.981,5.981-9.539,13.734-10.206,22.074c-22.684,7.933-43.519,20.987-60.62,38.089
                    c-30.353,30.353-47.068,70.708-47.068,113.631v268.76c0,5.523,4.478,10,10,10h37.38c5.522,0,10-4.477,10-10v-268.76
                    c0-24.864,9.001-48.907,25.344-67.702c15.095-17.359,35.458-29.171,57.761-33.62l7.851,7.851l-15.131,27.642
                    c-2.652,4.844-0.875,10.921,3.97,13.573c1.524,0.834,3.17,1.23,4.793,1.23c3.536,0,6.963-1.88,8.78-5.2l9.958-18.192l9.959,18.192
                    c2.65,4.844,8.727,6.621,13.573,3.97c4.845-2.652,6.622-8.729,3.97-13.573l-15.132-27.642l7.851-7.851
                    c22.303,4.449,42.666,16.261,57.761,33.62c16.343,18.795,25.344,42.838,25.344,67.702v268.76c0,5.523,4.478,10,10,10h37.38
                    c5.522,0,10-4.477,10-10v-268.76C392.147,148.745,380.873,115.186,359.544,87.075z M354.767,342.529l17.38,13.843v37.758
                    l-17.38-13.843V342.529z M354.767,316.96v-37.758l17.38,13.843v37.758L354.767,316.96z M354.767,253.632v-37.758l17.38,13.843
                    v37.758L354.767,253.632z M354.767,190.304v-6.18c0-10.743-1.414-21.356-4.134-31.591l18.698,3.335
                    c1.865,9.202,2.816,18.652,2.816,28.257v20.023L354.767,190.304z M202.774,24.473c2.977-2.977,6.888-4.466,10.798-4.466
                    c3.911,0,7.822,1.489,10.799,4.466c3.906,3.905,10.236,3.905,14.143,0c5.952-5.953,15.643-5.955,21.597,0
                    c2.885,2.885,4.473,6.719,4.473,10.799s-1.588,7.914-4.473,10.799l-28.668,28.668L202.774,46.07
                    c-2.885-2.885-4.473-6.719-4.473-10.799S199.89,27.357,202.774,24.473z M108.117,380.287l-17.38,13.844v-37.758l17.38-13.844
                    V380.287z M108.117,316.96l-17.38,13.844v-37.758l17.38-13.844V316.96z M108.117,253.632l-17.38,13.844v-37.758l17.38-13.844
                    V253.632z M108.117,184.125v6.18l-17.38,13.844v-20.023c0-9.647,0.971-19.144,2.855-28.385l18.693-3.334
                    C109.543,162.68,108.117,173.336,108.117,184.125z M90.737,442.885v-23.184l17.38-13.844v37.028H90.737z M120.348,130.651
                    l-20.573,3.669c5.911-15.646,14.637-30.188,25.917-43.005l13.35,11.224c-0.224,0.254-0.453,0.503-0.675,0.759
                    C131.115,111.64,125.076,120.849,120.348,130.651z M153.541,88.599l-13.543-11.386c12.626-10.798,27.083-19.314,42.592-25.063
                    c1.598,2.924,3.619,5.64,6.042,8.062l6.164,6.164C179.777,71.065,165.767,78.618,153.541,88.599z M274.253,60.212
                    c2.417-2.417,4.435-5.127,6.032-8.045c15.364,5.708,29.699,14.151,42.23,24.783l-13.516,11.364
                    c-12.144-9.841-26.033-17.293-40.91-21.938L274.253,60.212z M323.549,102.21l13.343-11.218c2.338,2.638,4.586,5.359,6.72,8.171
                    c8.281,10.915,14.827,22.771,19.552,35.288l-20.561-3.667c-4.738-9.853-10.8-19.107-18.086-27.486
                    C324.198,102.932,323.871,102.573,323.549,102.21z M354.767,442.885v-37.028l17.38,13.843v23.185H354.767z"/>
                </svg>
                {dinner=='cena'&&
                <>
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" >
                <path stroke='none' fillRule="evenodd" clipRule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44771 22 6 22H18C18.5523 22 19 21.5523 19 21V3C19 2.44772 18.5523 2 18 2H6ZM3 3C3 1.34315 4.34315 0 6 0H18C19.6569 0 21 1.34314 21 3V21C21 22.6569 19.6569 24 18 24H6C4.34315 24 3 22.6569 3 21V3ZM8.25 4.44232C8.01755 4.17216 7.66222 4 7.26562 4C6.56918 4 6 4.53088 6 5.19111C6 5.79154 6.35648 6.34854 6.76709 6.80297C7.18353 7.26386 7.69434 7.66115 8.07724 7.94376C8.17883 8.01875 8.32117 8.01875 8.42276 7.94376C8.80566 7.66115 9.31647 7.26386 9.73291 6.80297C10.1435 6.34854 10.5 5.79154 10.5 5.19111C10.5 4.53088 9.93082 4 9.23438 4C8.83778 4 8.48245 4.17216 8.25 4.44232ZM14.7656 16C15.1622 16 15.5175 16.1722 15.75 16.4423C15.9825 16.1722 16.3378 16 16.7344 16C17.4308 16 18 16.5309 18 17.1911C18 17.7915 17.6435 18.3485 17.2329 18.803C16.8165 19.2639 16.3057 19.6611 15.9228 19.9438C15.8212 20.0187 15.6788 20.0187 15.5772 19.9438C15.1943 19.6611 14.6835 19.2639 14.2671 18.803C13.8565 18.3485 13.5 17.7915 13.5 17.1911C13.5 16.5309 14.0692 16 14.7656 16Z" fill="#000000"/>
                </svg>
                <svg height="80px" width="80px" version="1.1" id="Layer_1" viewBox="0 0 512 512">
                <g>
                    <g>
                        <path d="M481.06,366.508l-20.278-40.912h-23.609c-6.561-78.846-63.648-143.558-138.709-161.586
                            c0.284-1.991,0.437-4.007,0.437-6.034c0-23.655-19.245-42.9-42.9-42.9s-42.9,19.245-42.9,42.9c0,2.027,0.152,4.042,0.437,6.034
                            c-75.06,18.029-132.147,82.74-138.709,161.586H51.218L30.94,366.508H0v30.417h15.864h480.273H512v-30.417H481.06z M256,145.493
                            c6.883,0,12.483,5.6,12.483,12.483c0,0.497-0.027,0.974-0.079,1.434c-0.307-0.021-0.615-0.027-0.923-0.047
                            c-1.437-0.09-2.877-0.163-4.322-0.219c-0.509-0.02-1.018-0.043-1.527-0.058c-1.871-0.057-3.746-0.095-5.631-0.095
                            c-1.885,0-3.761,0.039-5.631,0.095c-0.509,0.015-1.018,0.039-1.527,0.058c-1.445,0.056-2.886,0.129-4.322,0.219
                            c-0.309,0.019-0.617,0.026-0.925,0.047c-0.052-0.459-0.079-0.937-0.079-1.434C243.517,151.093,249.117,145.493,256,145.493z
                            M237.289,190.564c1.163-0.143,2.329-0.275,3.498-0.391c0.224-0.022,0.447-0.051,0.672-0.072c1.468-0.139,2.94-0.253,4.416-0.351
                            c0.309-0.02,0.62-0.036,0.93-0.056c1.291-0.077,2.583-0.139,3.877-0.184c0.226-0.008,0.452-0.017,0.678-0.024
                            c3.091-0.092,6.189-0.092,9.28,0c0.226,0.007,0.452,0.016,0.678,0.024c1.294,0.045,2.586,0.107,3.877,0.184
                            c0.31,0.018,0.62,0.034,0.93,0.056c1.475,0.097,2.947,0.211,4.416,0.351c0.225,0.021,0.448,0.05,0.672,0.072
                            c1.169,0.117,2.335,0.248,3.498,0.391c69.717,8.631,124.898,64.838,131.929,135.033h-301.28
                            C112.391,255.402,167.572,199.195,237.289,190.564z M64.889,366.508l5.201-10.495h4.095h363.629h4.095l5.201,10.495H64.889z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M326.387,230.216c-21.036-13.431-45.376-20.531-70.387-20.531v30.417c19.2,0,37.88,5.447,54.019,15.75
                            c15.736,10.047,28.371,24.2,36.541,40.93l27.332-13.347C363.266,261.677,346.84,243.273,326.387,230.216z"/>
                    </g>
                </g>
                </svg>
                </>}
                <svg width="80px" height="80px" viewBox="0 0 24 24">
                <path d="M5.5713 14.5L9.46583 18.4141M18.9996 3.60975C17.4044 3.59505 16.6658 4.33233 16.4236 5.07743C16.2103 5.73354 16.4052 7.07735 15.896 8.0727C15.4091 9.02443 14.1204 9.5617 12.6571 9.60697M20 7.6104L20.01 7.61049M19 15.96L19.01 15.9601M7.00001 3.94926L7.01001 3.94936M19 11.1094C17.5 11.1094 16.5 11.6094 15.5949 12.5447M10.2377 7.18796C11 6.10991 11.5 5.10991 11.0082 3.52734M3.53577 20.4645L7.0713 9.85791L14.1424 16.929L3.53577 20.4645Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className={`${styles.divisonScheduleBlock}`}>
                <Image
                    src={dinner=='cena'?'/images/pathSchedule.svg' : '/images/pathScheduleDespues.svg'}
                    width={200}
                    height={500}
                    alt="division"
                />
            </div>
            <div className={`${styles.infoScheduleBlock}`}>
                <span>19:45</span>
                <p className={`${windsong.className}`}>Ceremonia</p>
                <span>21:00</span>
                <p className={`${windsong.className}`}>Saludos</p>
                {(dinner=='cena') && (<><span>22:00</span> <p className={`${windsong.className}`}>Civil</p> <span>22:30</span> <p className={`${windsong.className}`}>Cena</p></>)}
                <span>00:30</span>
                <p className={`${windsong.className}`}>Fiesta</p>
            </div>
            </div>
        </section>
    )
}