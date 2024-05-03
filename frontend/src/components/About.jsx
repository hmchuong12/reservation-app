import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>

            <p>The only thing we're serious about is food.</p>
          </div>

          <p className="mid">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            neque doloremque perferendis iusto quibusdam non molestias fugiat
            sunt vel sit ex explicabo tenetur laboriosam tempore hic distinctio
            eaque, minima ipsa dolorem, aut quod! Fugiat ea rem autem unde ut
            sed odit in quod, velit, adipisci, illum cumque perspiciatis illo
            porro.
          </p>

          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>

        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
