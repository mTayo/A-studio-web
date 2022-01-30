/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Carousel, {CarouselItem} from '../components/Carousel';

const Home: NextPage = () => {
  return (
    <>
      <header>
        <nav>
          <div className='logo-container'>
            <img
              src="/images/app-logo.svg"
              alt="A+ Studio"
            />
          </div>
          <div className='nav-links-container'>
            <ul>
              <li>Home</li>
              <li>What we do</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>


        <div className='hero'>
          <div className='hero-left'>
              <h3>
                A Digital Product Agency
              </h3>
              <p className='hero-text'>
                Leading digital agency with solid design <br/>and development expertise.<br/> 
                We build readymade websites, mobile applications, 
                and<br/> elaborate online business services.
              </p>
              <button>
                Contact us
              </button>

              <div 
                className='hero-left-dot-container'
              >
                <img 
                  src="/images/Dot Ornament.svg" 
                  className='hero-left-floating-shape'
                  alt='Floating shape'
                />
              </div>
          </div>
          <div className='hero-right'>
            <img
                src="/images/hero_img.png"
                alt="A+ Studio"
            />
            <div 
                className='hero-right-shape-top'
            >
              <img 
                src="/images/Ellipse 85.png" 
                className='hero-right-floating-shape-1'
                alt='Floating shape'
              />
            </div>
            <div 
                className='hero-right-shape-bottom'
            >
               <img 
                  src="/images/Rectangle 23.png" 
                  style={{
                    'width':'150px',
                    // 'transformOrigin': 'left',
                    'transform': 'rotate(270deg)'
                  }}
                  alt='Floating shape'
                />
            </div>
            
          </div>
        </div>

      </header>

      <section className='clients'>
        <div className='client-text'>
          <h3>
            Our Client
          </h3>
          <p>
            Several selected clients, who already<br/> believe in our service.
          </p>
        </div>

        <div className='client-images'>
          <ul>
            <li>
              <img 
                src="/images/Google Logo.svg"
                alt="A+ Studio google"
              />
            </li>
            <li>
              <img 
                src="/images/Airbnb Logo.svg"
                alt="A+ Studio Airbnb Logo.svg"
              />
            </li>
            <li>
              <img 
                src="/images/Uber Eats Logo.svg"
                alt="A+ Studio Uber Eats Logo.svg"
              />
            </li>
            <li>
              <img 
                src="/images/Amazon Logo.svg"
                alt="A+ Studio Amazon Logo.svg"
              />
            </li>
            
          </ul>
        </div>

      </section>

      {/* Business section */}
      <section className='business-section '>
        <div className='business-section-bg' />
        <div className='business-section-bg-2' />
          
        <div className='children-container default-margin'>

        
          <div className='business-left'> 
              <div className='header-container'>
                <h3>
                  How can we help <br/> your Business ?
                </h3>
                <div className='floating-img'>
                    <img 
                      src="/images/Rectangle 25.svg"
                      alt="A+ Studio"
                    />
                </div>
              </div>
              
              <p>
                We build readymade websites, 
                mobile applications,<br/> and elaborate online business services.
              </p>
          </div>
          <div className='business-right'>
              <div className='business-card-container-1'>
                  <div className='business-card '>
                    <div className='icon-container light-blue'>
                      <img
                        src="/images/box-search 1.svg"
                        alt="A+ Studio Amazon Logo.png"
                      />
                    </div>
                    <div>
                      <h5>Business Idea Planning</h5>
                      <p>Protocols apart from aengage models, pricing billing</p>
                    </div>

                  </div>

                  <div className='business-card'>
                    <div className='icon-container light-red'>
                      <img
                        src="/images/code-1 1.svg"
                        alt="A+ Studio Amazon Logo.png"
                      />
                    </div>
                    <div>
                      <h5>Development Website and App</h5>
                      <p>Communication protocols apart from engagement models</p>
                    </div>
                  </div>
              </div>

              <div className='business-card-container-2'>
                <div className='business-card'>
                  <div className='icon-container light-orange'>
                    <img
                      src="/images/empty-wallet 1.svg"
                      alt="A+ Studio Amazon Logo.png"
                    />
                  </div>
                  <div>
                    <h5>Financial Planning System</h5>
                    <p>Protocols apart from aengage models, pricing billing</p>
                  </div>
                </div>

                  <div className='business-card'>
                    <div className='icon-container light-green'>
                      <img
                        src="/images/chart-square 1.svg"
                        alt="A+ Studio Amazon Logo.png"
                      />
                    </div>
                    <div>
                      <h5>Market Analysis Project</h5>
                      <p>Protocols apart from aengage models, pricing billing</p>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Digital product */}
      <section className='digital-product default-margin'>
        <div className='img-container'>
          <img src="/images/video.jpeg" />
          <div className='play-button' />
          <div className='floating-img' />
        </div>
        <div>
            <div className='digital-product-header'> 
              <h3>
                Great Digital Product Agency since 2016 
              </h3>
              <span />
            </div>
            <p>
              Our Business Plan is a written document describing a 
              company&apos;s core business activites, Objectives, 
              and how it plans to achieve its goals. Our goal is to provide our client 
              high quality Product with modern idea accordingly their budgets and according thir reuirements.
            </p>
        </div>
      </section>
      {/* Carousel */}
      <div className='carousel-header default-margin'>
            <h3>What our happy client say</h3>
            <p>Several selected clients, who already believe in our service.</p>
      </div>
      <div className='carousel-section  default-margin'>
        <Carousel>
          <CarouselItem>
              <div className='carousel-img'>
                <img src="/images/testimonial.jpeg"/>
              </div>
              <div className='carousel-details'>
                  <h3>
                    Matthew Paul
                  </h3>
                  <p>
                    Perfect, very good job!<br/> Thank you for the amazing design<br/> and work. 
                    Really impressed with <br/>the high quality and quick<br/> turnaround time. 
                    Highly recommend.
                  </p>
              </div>
          
          </CarouselItem>
          <CarouselItem>
              <div className='carousel-img'>
                <img src="/images/meritt-thomas-aoQ4DYZLE_E-unsplash.jpg"/>
                </div>
                <div className='carousel-details'>
                  <h3>
                    Ana Ross
                  </h3>
                  <p>
                    Perfect, very good job!<br/> Thank you for the amazing design<br/> and work. 
                    Really impressed with <br/>the high quality and quick<br/> turnaround time. 
                    Highly recommend.
                  </p>
              </div>
            
          </CarouselItem>
          <CarouselItem>
                <div className='carousel-img'>
                  <img src="/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"/>
                </div>
                <div className='carousel-details'>
                  <h3>
                    Andriana maxi
                  </h3>
                  <p>
                    Perfect, very good job!<br/> Thank you for the amazing design<br/> and work. 
                    Really impressed with <br/>the high quality and quick<br/> turnaround time. 
                    Highly recommend.
                  </p>
              </div>
          
          </CarouselItem>
          <CarouselItem>
              <div className='carousel-img'>
                  <img src="/images/austin-distel-7uoMmzPd2JA-unsplash.jpg" />
                </div>
                <div className='carousel-details'>
                  <h3>
                    
                    Lewis Baker
                  </h3>
                  <p>
                    Perfect, very good job!<br/> Thank you for the amazing design<br/> and work. 
                    Really impressed with <br/>the high quality and quick<br/> turnaround time. 
                    Highly recommend.
                  </p>
              </div>
            
          </CarouselItem>
        </Carousel>
        <div className='img-gallery'>
              <img src="/images/Group 71.png" />
        </div>
      </div>
      <div className='CTA default-margin'>
          <div className='CTA-content'>
                <div>
                  <h3>
                    Subscribe Newsletter
                  </h3>
                  <p>
                    I will update good news and promotion service not spam
                  </p>
                </div>
                <form className='contact-form'>
                  <input 
                    placeholder='Enter your email address..'
                  />
                   <button>
                    Contact now
                  </button>
                </form>
          </div>
      </div>
      {/* Footer */}
      <div className='footer default-margin'>
          <div className='footer-short-cut-section'>
            <div className='footer-section-1'>
              <div className=''>
                <img
                  src="/images/app-logo.svg"
                  alt="A+ Studio"
                />
            </div>
            <p>
              Leading digital agency with solid 
              design and development expertise. 
              We build readymade websites, mobile applications, 
              and elaborate online business services.
            </p>
            </div>
            <div className='footer-section-2'>
                <div>
                  <h5>
                    What We Do
                  </h5>
                  
                  <div>
                    <ul>
                      <li>Web Design </li>
                      <li>App Design</li>
                      <li>Social Media Manage</li>
                      <li>Market Analysis Project</li>
                      
                    </ul>
                  </div>
                </div>

                <div>
                  <h5>
                    Company
                  </h5>
                  
                  <div>
                    <ul>

                      <li>About Us </li>
                      <li>Career</li>
                      <li>Become Investor</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h5>
                    Support
                  </h5>
                  
                  <div>
                    <ul>
                      <li>FAQ</li>
                      <li>Policy</li>
                      <li>Business</li>
                      
                    </ul>
                  </div>
                </div>

                <div>
                  <h5>
                    Contact
                  </h5>
                  
                  <div>
                    <ul>
                      <li>WhatsApp</li>
                      <li>Support 24</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
            <div className='footer-links'>
               <div>
                 <img src="/images/facebook.svg" />
               </div>
               <div>
                 <img src="/images/twitter.svg" />
               </div>
               <div>
                 <img src="/images/linkedin.svg" />
               </div>
            </div>
      </div>
    </>
  )
}

export default Home
