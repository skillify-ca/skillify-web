import SEO from "../../components/SEO";

export default function Page() {
  return (
    <div>
      <SEO
        title={"Where can I learn to code in Toronto?"}
        description={"We break down where you can learn to code in Toronto."}
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <h1>Where can I learn to code in Toronto?</h1>
      <div>
        <p>
          If you are looking to learn to code in Toronto there are a few solid
          options. We definitely recommend the program at Skillify for being
          more afforable and more personalized compared to our competitors on
          this list.
        </p>
        <p>
          Some of our students actually graduated from programs at these other
          bootcamps and were still unable to find a job afterward. Our program
          includes job search support to make sure that you get hired in the
          tech industry if you are putting the work in to learn a high demand
          skill like coding for web and mobile development.
        </p>
        <ul>
          <li>
            <a href="/">Skillify</a>
          </li>
          <li>
            <a href="https://lighthouselabs.ca">Lighthouse Labs</a>
          </li>
          <li>
            <a href="https://brainstation.io">Brainstation</a>
          </li>
          <li>
            <a href="https://generalassemb.ly/">General Assembly</a>
          </li>
          <li>
            <a href="https://generalassemb.ly/">UofT Coding Bootcamp</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
