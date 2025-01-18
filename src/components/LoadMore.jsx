import { useEffect, useRef } from 'react';

const LoadMoreButton = ({ onClick, disabled }) => {
  const buttonRef = useRef(null);

  // Intersection Observer to trigger the load more action when the button is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !disabled) {
          onClick(); // Trigger the load more function when the button is in view
        }
      },
      { threshold: 1 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, [onClick, disabled]);

  const handleButtonClick = () => {
    if (!disabled) {
      onClick(); // Trigger the load more function when the button is clicked
    }
  };

  return (
    <button
      ref={buttonRef}
      className="load-more-button spinner"
      onClick={handleButtonClick}
    >
      <span className="load-more-button-svg">
      <svg fill="#fff" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m4.818 6.664s0 0-.001 0c-1.02 0-1.847-.827-1.847-1.847s.827-1.847 1.847-1.847 1.847.827 1.847 1.847c0 .51-.207.972-.541 1.306-.324.334-.776.541-1.277.541-.01 0-.019 0-.029 0zm-2.97 7.182s0 0-.001 0c-1.02 0-1.847-.827-1.847-1.847s.827-1.847 1.847-1.847 1.847.827 1.847 1.847c0 .51-.207.972-.541 1.306-.324.334-.776.541-1.278.541-.01 0-.021 0-.031 0h.002zm10.152-10.154s0 0-.001 0c-1.02 0-1.847-.827-1.847-1.847s.827-1.847 1.847-1.847 1.847.827 1.847 1.847c0 .51-.207.972-.541 1.306-.324.334-.776.541-1.277.541-.01 0-.019 0-.029 0zm-7.182 17.337s0 0-.001 0c-1.02 0-1.847-.827-1.847-1.847s.827-1.847 1.847-1.847 1.847.827 1.847 1.847c0 .51-.207.972-.541 1.306-.323.334-.775.541-1.276.541-.01 0-.021 0-.031 0zm14.364-13.904c-1.275 0-2.308-1.033-2.308-2.308s1.033-2.308 2.308-2.308c1.275 0 2.308 1.033 2.308 2.308s-1.033 2.308-2.308 2.308zm-7.182 16.875s0 0-.001 0c-1.02 0-1.847-.827-1.847-1.847s.827-1.847 1.847-1.847 1.847.827 1.847 1.847c0 .51-.207.972-.541 1.306-.324.334-.776.541-1.277.541-.01 0-.019 0-.029 0zm10.154-9.231c-.014 0-.031 0-.048 0-.75 0-1.428-.309-1.913-.807l-.001-.001c-.499-.503-.808-1.196-.808-1.961s.308-1.458.808-1.962c.486-.499 1.164-.808 1.914-.808h.05-.003.048c.75 0 1.427.309 1.913.807l.001.001c.499.503.808 1.196.808 1.961s-.308 1.458-.808 1.962c-.486.499-1.164.809-1.915.809-.016 0-.033 0-.049 0h.002zm-2.971 7.643c-.015 0-.032 0-.05 0-.878 0-1.671-.365-2.236-.951l-.001-.001c-.584-.584-.945-1.391-.945-2.283s.361-1.698.945-2.283c.567-.583 1.358-.945 2.234-.945h.054-.003.042c.877 0 1.67.362 2.237.944l.001.001c.588.582.952 1.39.952 2.283s-.364 1.7-.952 2.282c-.567.588-1.361.953-2.24.953-.014 0-.027 0-.04 0z"></path></g></svg>
      </span>
    </button>
  );
};

export default LoadMoreButton;
