import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <footer className="footer">
        <div>
        <p>{`© ${year}. All Rights Reserved.`}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;