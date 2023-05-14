import Template from "./Template";

const Contact = () => {
  return (
    <Template title="Contact">
    <div className="contact">
      <p>
        Please email us at{" "}
        <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a>
      </p>
      <p>We will reply to your email as soon as we can.</p>
    </div>
  </Template>
  );
};

export default Contact;
