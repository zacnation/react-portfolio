import PropTypes from "prop-types";
export default function About() {
  return (
    <section id="one" className="about">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        blanditiis, reiciendis ullam voluptatum ut doloremque exercitationem,
        suscipit accusamus asperiores voluptas quae magni? Et, ex. Dolores optio
        beatae odit excepturi inventore.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam,
        debitis minima sed perspiciatis fugiat facilis placeat.
      </p>
      <p>
        I have recently graduated from Le Wagon, a 9-week full-time intensive
        coding bootcamp teaching HTML, CSS, Bootstrap, Ruby, JavaScript ES6,
        SQL, git, GitHub, Heroku, and Ruby on Rails. During the bootcamp I
        designed, implemented, and shipped to production a clone of Airbnb and a
        Rails prototype of Mind Mission, a mindfulness training game for 9 to
        11-year-olds.
      </p>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
