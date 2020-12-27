import React from "react"
import { ExtLink, Button } from "./atoms"

export const Contact = () => {
  return (
    <div className="mt-32 full-width-container bg-secondary">
      <div className="container max-w-screen-xl mx-auto pt-16 text-gray-900">
        <h1 className="text-3xl font-semibold text-center text-primary">
          Get in touch{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p className="px-4 mt-4 text-center text-secondary">
          Feel free to reach out about anything. Want to work on a project
          together? Give some feedback?
        </p>
        <p className="px-4 mt-1 text-center text-secondary">
          You can also reach me around the web:{" "}
          <ExtLink link="https://github.com/sushilburagute" newTab>
            GitHub
          </ExtLink>
          ,{" "}
          <ExtLink link="https://twitter.com/codetastic1" newTab>
            Twitter
          </ExtLink>
          ,{" "}
          <ExtLink link="https://instagram.com/sushil.buragute" newTab>
            Instagram
          </ExtLink>
          ,{" "}
          <ExtLink link="https://in.linkedin.com/in/sushil-buragute" newTab>
            LinkedIn
          </ExtLink>
        </p>
        <div className="mx-auto  pt-10 flex justify-center">
          <Button width="widest" link="mailto:codetastic101@gmail.com">
            <span className=" text-2xl font-semibold text-on-accent">
              Say hello
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Contact
