import { useState, useEffect, useRef } from 'react'

export const useScroll = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    const [scrollDirection, setScrollDirection] = useState();
      
    const listener = e => {
    
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
        setLastScrollTop(-bodyOffset.top)
    };
      
    useEffect(() => {
          window.addEventListener("scroll", listener);
          return () => {
            window.removeEventListener("scroll", listener);
          };
    });
      
    return {
        scrollY,
        scrollDirection
    }
}

// Determine window size
export const useWindowSize = () => {
    const initialWidth = window.innerWidth
    const initialHeight = window.innerHeight
    const [windowWidth, setWindowWidth] = useState(initialWidth)
    const [windowHeight, setWindowHeight] = useState(initialHeight)
  
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    }
  
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize);
          };
    }, [])
  
    return { windowWidth, windowHeight }
}

export const useVisible = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );
  
        element && observer.observe(element);
  
        return () => observer.unobserve(element);
    }, []);
  
    return {
        isVisible
    };
  }

  export const isScrolledIntoView = (el) => {
    let isVisible
    if(!el) return true
    const rect = el.getBoundingClientRect()
    const elemTop = rect.top
    const elemBottom = rect.bottom
    isVisible = (elemTop >= 0) && (elemBottom - 100 <= (window.innerHeight))
    return isVisible;
  }